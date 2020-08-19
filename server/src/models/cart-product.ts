import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../modules/database';

class CartProduct extends Model {
  public id!: number;
  public count!: number;
  public deletedAt!: Date | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CartProduct.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  { timestamps: true, tableName: 'cart_product', sequelize }
);

export default CartProduct;
