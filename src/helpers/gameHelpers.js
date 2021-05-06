import Web3 from "web3";
import { WordABI, WordAddress } from "./contractConfig";

const connect = async () => {
  const web3 = new Web3(
    new Web3.providers.WebsocketProvider(
      "wss://kovan.infura.io/ws/v3/18b53e21e95e48a3b8f06cb3644d1798"
    )
  );
  const wordToken = await new web3.eth.Contract(WordABI, WordAddress);
  return wordToken;
};

// Game Flow Methods
const resetTournament = async (wordToken) => {
  const result = await wordToken.methods.newTournament().send();
  return result;
};

const register = async (wordToken, player) => {
  const result = await wordToken.methods.register(player).send();
  return result;
};

const startTournament = async (wordToken) => {
  const result = await wordToken.methods.startTournament().send();
  return result;
};

const updateWinners = async (wordToken, winner, loser) => {
  const result = await wordToken.methods.updateWinners(winner, loser).send();
  return result;
};

const getFinalWinner = async (wordToken) => {
  const winner = await wordToken.methods.getFinalWinner().send();
  return winner;
};

// Move Check Methods
const checkRegistered = async (wordToken, player) => {
  const result = await wordToken.methods.checkRegistered(player).call();
  return result;
};

const checkUsage = async (wordToken, player, tokenId, timestamp, cooldown) => {
  const result = await wordToken.methods
    .checkUsage(player, tokenId, timestamp, cooldown)
    .send();
  return result;
};
