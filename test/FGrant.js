const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FGrant", function () {
  let FGrant;
  let fgrant;
  let owner;
  let addr1;

  beforeEach(async function () {
    FGrant = await ethers.getContractFactory("FGrant");
    [owner, addr1] = await ethers.getSigners();

    fgrant = await FGrant.deploy();
    await fgrant.deployed();
  });

  it("should create a proposal", async function () {
    const name = "Proposal 1";
    const project = "Project 1";
    const description = "Description 1";
    const fundingGoal = 100;

    await fgrant.createProposal(name, project, description, fundingGoal);

    const proposal = await fgrant.getProposal(1);

    expect(proposal.proposer).to.equal(owner.address);
    expect(proposal.name).to.equal(name);
    expect(proposal.project).to.equal(project);
    expect(proposal.description).to.equal(description);
    expect(proposal.fundingGoal).to.equal(fundingGoal);
    expect(proposal.fundingCompleted).to.be.false;
  });

  it("should upvote a proposal", async function () {
    await fgrant.createProposal(
      "Proposal 1",
      "Project 1",
      "Description 1",
      100
    );

    await fgrant.upvoteProposal(1);

    const proposal = await fgrant.getProposal(1);

    expect(proposal.upvotes).to.equal(1);
    expect(proposal.downvotes).to.equal(0);
  });

  it("should downvote a proposal", async function () {
    await fgrant.createProposal(
      "Proposal 1",
      "Project 1",
      "Description 1",
      100
    );

    await fgrant.downvoteProposal(1);

    const proposal = await fgrant.getProposal(1);

    expect(proposal.upvotes).to.equal(0);
    expect(proposal.downvotes).to.equal(1);
  });

  it("should fund a proposal", async function () {
    await fgrant.createProposal(
      "Proposal 1",
      "Project 1",
      "Description 1",
      100
    );

    await fgrant.fundProject(1, { value: 50 });

    const proposal = await fgrant.getProposal(1);

    expect(proposal.totalFunds).to.equal(50);
    expect(proposal.fundingCompleted).to.be.false;
  });

  it("should create a project pool", async function () {
    await fgrant.createProposal(
      "Proposal 1",
      "Project 1",
      "Description 1",
      100
    );

    await fgrant.createProjectPool(1, { value: 50 });

    const proposal = await fgrant.getProposal(1);
    const pool = await fgrant.getPool(1, owner.address);

    expect(pool).to.equal(50);
    expect(proposal.pooledFunds[owner.address]).to.equal(50);
    expect(proposal.fundingCompleted).to.be.false;
  });

  it("should fund a project pool", async function () {
    await fgrant.createProposal(
      "Proposal 1",
      "Project 1",
      "Description 1",
      100
    );

    await fgrant.createProjectPool(1, { value: 50 });

    await fgrant.fundProjectPool(1, { value: 50 });

    const proposal = await fgrant.getProposal(1);

    expect(proposal.totalFunds).to.equal(100);
    expect(proposal.fundingCompleted).to.be.true;
  });

  it("should withdraw funds", async function () {
    await fgrant.createProposal(
      "Proposal 1",
      "Project 1",
      "Description 1",
      100
    );

    await fgrant.fundProject(1, { value: 100 });

    await fgrant.withdrawFunds(50);

    const contractBalance = await ethers.provider.getBalance(fgrant.address);

    expect(contractBalance).to.equal(50);
  });
});
