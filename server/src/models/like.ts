import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../modules/database';
import { Product } from '.';

class Like extends Model {
  public id!: number;
  public deletedAt!: Date | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Like.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  { timestamps: true, tableName: 'like', sequelize }
);

Like.belongsTo(Product, {
  targetKey: 'id',
  foreignKey: { name: 'productId', allowNull: false },
  as: 'product',
});

export default Like;
