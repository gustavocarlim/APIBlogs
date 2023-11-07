const { User } = require('../models');
const { generateToken } = require('../utils/token');

const postUser = async (name, mail, password, img) => {
  const userData = {
    displayName: name,  
    email: mail,
    password,
  };

  if (img) {
    userData.image = img;
  }
  const newUser = await User.create(userData);
  const { id, displayName, email, image } = newUser;
  const tokenData = { id, displayName, email };

  if (image) {
    tokenData.image = image;
  }
  const token = generateToken(tokenData);

  return { status: 201, data: { token } };
};

module.exports = { postUser };