const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === null) {
      this.chain.push('null');
    } else if (value === undefined) {
      this.chain.push('undefined');
    } else {
      this.chain.push(value);
    }
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const resultChain = this.chain.map((item) => `( ${item} )`).join("~~");
    this.chain = [];
    return resultChain;
  },
};

module.exports = {
  chainMaker,
};
