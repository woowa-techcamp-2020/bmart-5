import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../modules/database';
import LoginProvider from './login-provider';
import Cart from './cart';

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public imgUrl?: string;
  public isAdmin!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    imgUrl: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { timestamps: true, tableName: 'user', sequelize }
);

User.hasMany(Cart, {
  sourceKey: 'id',
  foreignKey: { name: 'userId', allowNull: false },
  as: 'carts',
});

export default User;