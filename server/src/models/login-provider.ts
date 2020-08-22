import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../modules/database';
import User from './user';

class LoginProvider extends Model {
  public id!: string;
  public email!: string;
  public provider!: string;
  public password?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

LoginProvider.init(
  {
    id: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    provider: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  { timestamps: true, tableName: 'login_provider', sequelize }
);

LoginProvider.belongsTo(User, {
  targetKey: 'id',
  foreignKey: { name: 'userId', allowNull: false },
  as: 'user',
});

export default LoginProvider;
