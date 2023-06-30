// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";

contract FGrant is Ownable {
    struct Proposal {
        address proposer;
        string name;
        string project;
        string description;
        uint256 upvotes;
        uint256 downvotes;
        uint256 totalFunds;
        uint256 fundingGoal;
        bool fundingCompleted;
        mapping(address => bool) upvoters;
        mapping(address => bool) downvoters;
        mapping(address => uint256) pooledFunds;
        mapping(uint256 => bool) createdPools;
        mapping(address => bool) owners;
        address[] funders;
    }

    mapping(uint256 => Proposal) public proposals;

    uint256 public proposalCounter;

    event ProposalCreated(
        uint256 proposalId,
        address proposer,
        string name,
        string project,
        string description,
        uint256 fundingGoal
    );
    event ProposalUpvoted(uint256 proposalId, address voter);
    event ProposalDownvoted(uint256 proposalId, address voter);
    event ProposalFunded(uint256 proposalId, address funder, uint256 amount);
    event ProposalFundingCompleted(uint256 proposalId);
    event PoolCreated(uint256 proposalId, address poolCreator, uint256 amount);
    event PoolFundingCompleted(uint256 proposalId, address poolCreator);

    modifier canFundProposal(uint256 proposalId) {
        require(
            !proposals[proposalId].fundingCompleted,
            "Project funding is already completed"
        );
        require(
            !(proposals[proposalId].funders.length > 0) ||
                proposals[proposalId].funders[0] == msg.sender,
            "Proposal can only be funded by the initial funder"
        );
        _;
    }

    constructor() {
        proposalCounter = 0;
    }

    receive() external payable {}

    function createProposal(
        string calldata name,
        string calldata project,
        string calldata description,
        uint256 fundingGoal
    ) external {
        Proposal storage newProposal = proposals[proposalCounter];
        newProposal.proposer = msg.sender;
        newProposal.name = name;
        newProposal.project = project;
        newProposal.description = description;
        newProposal.fundingGoal = fundingGoal;

        emit ProposalCreated(
            proposalCounter,
            msg.sender,
            name,
            project,
            description,
            fundingGoal
        );

        proposalCounter++;
    }

    function upvoteProposal(uint256 proposalId) public {
        require(proposalId < proposalCounter, "Invalid proposal ID");
        Proposal storage proposal = proposals[proposalId];

        require(!proposal.upvoters[msg.sender], "You have already upvoted");

        proposal.upvoters[msg.sender] = true;

        if (!proposal.downvoters[msg.sender]) {
            proposal.upvotes++;
        }

        emit ProposalUpvoted(proposalId, msg.sender);
    }

    function downvoteProposal(uint256 proposalId) public {
        require(proposalId < proposalCounter, "Invalid proposal ID");
        Proposal storage proposal = proposals[proposalId];

        require(!proposal.downvoters[msg.sender], "You have already downvoted");

        proposal.downvoters[msg.sender] = true;

        if (!proposal.upvoters[msg.sender]) {
            proposal.downvotes++;
        }

        emit ProposalDownvoted(proposalId, msg.sender);
    }

    function fundProject(
        uint256 proposalId
    ) public payable canFundProposal(proposalId) {
        require(proposalId < proposalCounter, "Invalid proposal ID");
        Proposal storage proposal = proposals[proposalId];

        require(
            !proposal.fundingCompleted,
            "Project funding is already completed"
        );

        (bool success, ) = msg.sender.call{value: msg.value}("");
        require(success, "Insufficient funds");

        proposal.totalFunds += msg.value;
        proposal.funders.push(msg.sender);

        if (proposal.totalFunds >= proposal.fundingGoal) {
            proposal.fundingCompleted = true;

            emit ProposalFundingCompleted(proposalId);
        }

        emit ProposalFunded(proposalId, msg.sender, msg.value);
    }

    function createProjectPool(
        uint256 proposalId,
        uint256 amount
    ) public payable {
        require(proposalId < proposalCounter, "Invalid proposal ID");
        Proposal storage proposal = proposals[proposalId];

        require(
            !proposal.fundingCompleted,
            "Project funding is already completed"
        );
        require(
            !proposal.createdPools[proposalId],
            "Pool already created for this proposal"
        );
        require(amount > 0, "Invalid contribution amount");

        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Insufficient funds");

        proposal.pooledFunds[msg.sender] += amount;
        proposal.funders.push(msg.sender);
        proposal.createdPools[proposalId] = true;

        if (
            !proposal.fundingCompleted &&
            proposal.totalFunds + amount >= proposal.fundingGoal
        ) {
            proposal.fundingCompleted = true;

            emit ProposalFundingCompleted(proposalId);
        }

        emit PoolCreated(proposalId, msg.sender, amount);
    }

    function fundProjectPool(
        uint256 proposalId,
        uint256 amount
    ) public payable {
        require(proposalId < proposalCounter, "Invalid proposal ID");
        Proposal storage proposal = proposals[proposalId];
        require(
            !proposal.fundingCompleted,
            "Project funding has been completed"
        );
        require(
            proposal.createdPools[proposalId],
            "No pool exists for this proposal"
        );
        require(amount > 0, "Invalid contribution amount");

        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Insufficient funds");

        proposal.totalFunds += amount;
        proposal.pooledFunds[msg.sender] += amount;
        proposal.funders.push(msg.sender);

        emit ProposalFunded(proposalId, msg.sender, amount);
    }

    function isOwner(
        uint256 proposalId,
        address checkOwner
    ) external view returns (bool) {
        require(proposalId < proposalCounter, "Invalid proposal ID");
        Proposal storage proposal = proposals[proposalId];

        return proposal.owners[checkOwner];
    }

    function withdrawFunds(uint256 amount) external onlyOwner {
        require(
            amount <= address(this).balance,
            "Insufficient contract balance"
        );
        payable(owner()).transfer(amount);
    }

    //Getters

    function getProposal(
        uint256 proposalId
    )
        external
        view
        returns (
            address proposer,
            string memory name,
            string memory project,
            string memory description,
            uint256 upvotes,
            uint256 downvotes,
            uint256 totalFunds,
            uint256 fundingGoal,
            bool fundingCompleted
        )
    {
        require(proposalId < proposalCounter, "Invalid proposal ID");
        Proposal storage proposal = proposals[proposalId];

        return (
            proposal.proposer,
            proposal.name,
            proposal.project,
            proposal.description,
            proposal.upvotes,
            proposal.downvotes,
            proposal.totalFunds,
            proposal.fundingGoal,
            proposal.fundingCompleted
        );
    }

    function getPool(
        uint256 proposalId,
        address poolOwner
    ) external view returns (uint256) {
        require(proposalId < proposalCounter, "Invalid proposal ID");
        Proposal storage proposal = proposals[proposalId];

        return proposal.pooledFunds[poolOwner];
    }

    function getPools(
        uint256 proposalId
    ) external view returns (address[] memory, uint256[] memory) {
        require(proposalId < proposalCounter, "Invalid proposal ID");
        Proposal storage proposal = proposals[proposalId];
        address[] memory owners = new address[](proposal.funders.length);
        uint256[] memory amounts = new uint256[](proposal.funders.length);

        for (uint256 i = 0; i < proposal.funders.length; i++) {
            address poolOwner = proposal.funders[i];
            owners[i] = poolOwner;
            amounts[i] = proposal.pooledFunds[poolOwner];
        }

        return (owners, amounts);
    }

    function getFundedProposals() external view returns (uint256[] memory) {
        uint256[] memory fundedProposalIds = new uint256[](proposalCounter);
        uint256 fundedCount = 0;

        for (uint256 i = 1; i < proposalCounter; i++) {
            Proposal storage proposal = proposals[i];
            if (proposal.fundingCompleted) {
                fundedProposalIds[fundedCount] = i;
                fundedCount++;
            }
        }

        uint256[] memory fundedProposals = new uint256[](fundedCount);
        for (uint256 i = 0; i < fundedCount; i++) {
            fundedProposals[i] = fundedProposalIds[i];
        }

        return fundedProposals;
    }

    function getUnfundedProposals() external view returns (uint256[] memory) {
        uint256[] memory unfundedProposalIds = new uint256[](proposalCounter);
        uint256 unfundedCount = 0;

        for (uint256 i = 1; i < proposalCounter; i++) {
            Proposal storage proposal = proposals[i];
            if (!proposal.fundingCompleted) {
                unfundedProposalIds[unfundedCount] = i;
                unfundedCount++;
            }
        }

        uint256[] memory unfundedProposals = new uint256[](unfundedCount);
        for (uint256 i = 0; i < unfundedCount; i++) {
            unfundedProposals[i] = unfundedProposalIds[i];
        }

        return unfundedProposals;
    }

    function getProposalFunders(
        uint256 proposalId
    ) external view returns (address[] memory) {
        require(proposalId < proposalCounter, "Invalid proposal ID");
        Proposal storage proposal = proposals[proposalId];

        return proposal.funders;
    }
}
