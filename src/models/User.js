const BlogPost = require('./BlogPost');

const UserSchema = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
	displayName: DataTypes.STRING,
	email: DataTypes.STRING,
	password: DataTypes.STRING,
	image: DataTypes.STRING,
}, {
	tableName: 'users',
	underscored: true,
	timestamps: false
});
	User.associate = ({ BlogPost }) => {
    User.hasMany(BlogPost, {
      foreignKey: 'userId',
      sourceKey: 'id',
    });
  };
return User;
}

module.exports = UserSchema;