# Fantom Grant Smart Contract

The Fantom Grant(FGrant) smart contract is a crowdfunding contract that allows users to create proposals for funding projects and receive contributions from other users. It is implemented in Solidity and follows the ERC-20 standard. The contract provides functions for creating proposals, upvoting/downvoting proposals, funding projects, creating project pools, and withdrawing funds.

## Features

- Proposal Creation: Users can create proposals by providing the name, project details, description, and funding goal. Each proposal is assigned a unique proposal ID.

- Upvoting/Downvoting: Users can upvote or downvote proposals to show their support or disapproval.

- Project Funding: Users can contribute funds to a project by calling the `fundProject` function. The total funds raised for a project are tracked, and if the funding goal is reached, the project is marked as completed.

- Project Pools: Users can create project pools by calling the `createProjectPool` function and contributing funds to a specific pool. Pooled funds are separate from the total funds raised for the project and are tracked individually.

- Pool Funding: Users can fund a project pool by calling the `fundProjectPool` function and contributing funds to a specific pool.

- Proposal Information: Various getter functions are available to retrieve information about a proposal, such as the proposer, name, project details, description, upvotes, downvotes, total funds raised, funding goal, and funding completion status.

- Withdraw Funds: The contract owner can withdraw funds from the contract using the `withdrawFunds` function.

## Contract Structure

The FGrant contract is built on top of the OpenZeppelin `Ownable` contract, which provides basic authorization control. The contract uses a struct called `Proposal` to store information about each proposal. It includes mappings to track upvoters, downvoters, pooled funds, owners, and an array of funders.

The contract maintains a `proposalCounter` variable to assign unique proposal IDs and uses events to emit important contract events, such as proposal creation, upvoting, downvoting, funding, and pool creation.

## Usage

To use the FGrant smart contract, follow these steps:

1. Deploy the contract to a compatible Ethereum network.

2. Interact with the contract using the available functions:

   - Call the `createProposal` function to create a new proposal, providing the name, project details, description, and funding goal.

   - Use the `upvoteProposal` and `downvoteProposal` functions to express your support or disapproval for a proposal.

   - Contribute funds to a project by calling the `fundProject` function, providing the proposal ID and sending the desired amount of Ether.

   - Create a project pool by calling the `createProjectPool` function, providing the proposal ID and sending the desired amount of Ether.

   - Fund a project pool by calling the `fundProjectPool` function, providing the proposal ID and sending the desired amount of Ether.

   - Retrieve information about a proposal using the various getter functions, such as `getProposal`, `getPool`, `getPools`, `getFundedProposals`, and `getUnfundedProposals`.

   - The contract owner can withdraw funds from the contract using the `withdrawFunds` function.

## License

The FGrant smart contract is released under the MIT License.
