const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
      //aqui inserimos o datatype da coluna criada
    phoneNum: DataTypes.STRING,
  });

  return User;
};

module.exports = User;