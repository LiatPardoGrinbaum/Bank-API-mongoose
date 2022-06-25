export const withdrawValid = (account, amount) => {
  let newCredit = account.credit;
  let newCash = account.cash;
  if (amount === account.cash + account.credit) {
    newCredit = 0;
    newCash = 0;
  } else if (amount > account.cash + account.credit) {
    throw new Error("Not enough money in both cash and credit! Try to withdraw less money.");
  } else if (amount <= account.cash) {
    newCash = account.cash - amount;
  } else {
    //if withdraw is bigger than cash and smaller then cash+credit
    newCash = 0;
    newCredit = account.credit - (amount - account.cash);
  }
  return { newCash, newCredit };
};
