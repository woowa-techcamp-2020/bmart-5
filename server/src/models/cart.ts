import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../modules/database';
import CartProduct from './cart-product';

class Cart extends Model {
  public id!: number;
  public purchasedAt!: Date | null;
  public deletedAt!: Date | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    purchasedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  { timestamps: true, tableName: 'cart', sequelize }
);

Cart.hasMany(CartProduct, {
  sourceKey: 'id',
  foreignKey: { name: 'cartId', allowNull: false },
  as: 'cartProducts',
});

export default Cart;
