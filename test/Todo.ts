import { expect } from "chai";
import { ethers } from "hardhat";
import { describe } from "mocha";

describe("Todo", function () {
  const ownerName = "satriaali";
  async function deployTodo() {
    const Todo = await ethers.getContractFactory("Todo");
    const todo = await Todo.deploy(ownerName);
    const [owner, otherAccount] = await ethers.getSigners();
    return { todo, owner, otherAccount };
  }
  describe("Deployment", function () {
    it("Should return the correct todo owner name", async function () {
      const { todo } = await deployTodo();
      expect(await todo.ownerName()).to.equal(ownerName);
    });

    it("Should set the right owner", async function () {
      const { todo, owner } = await deployTodo();

      expect(await todo.owner()).to.equal(owner.address);
    });
  });

  describe("Todo Action", function () {
    describe("Validations", function () {
      it("should create new todo", async () => {
        const { todo } = await deployTodo();
        await expect(todo.createTodo("todo1", "new todo")).to.emit(
          todo,
          "TodoCreated"
        );
      });
    });
  });
});
