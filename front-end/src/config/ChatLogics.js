export const getSender = (loggedUser, users) => {
  return loggedUser === users[0]._id ? users[0].name : users[1].name;
};
