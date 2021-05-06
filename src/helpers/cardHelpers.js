import Web3 from "web3";

// Pack Methods
const buyPack = async (wordToken) => {
  const result = wordToken.methods
    .getRandom()
    .send({ value: 1000000000000000 });
  return result;
};

const getCards = async (wordToken, address) => {
  let cards = [];

  const count = await wordToken.methods.balanceOf(address).call();
  for (let i = 0; i < count; i++) {
    const tokenId = await wordToken.methods
      .tokenOfOwnerByIndex(address, i)
      .call();
    const word = await wordToken.methods.wordCards(tokenId).call();
    cards.push(word);
  }

  return cards;
};
