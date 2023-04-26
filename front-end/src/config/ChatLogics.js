export const getSender = (loggedUser, users) => {
  return loggedUser === users[0]._id ? users[0].name : users[1].name;
};
export const getSenderFull = (loggedUser, users) => {
  return loggedUser === users[0]._id ? users[0] : users[1];
};
