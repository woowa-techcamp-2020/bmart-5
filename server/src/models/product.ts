import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../modules/database';

class Product extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
  content!: string;
  discount!: number;
  public outOfStockAt!: Date | null;
  public deletedAt!: Date | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    imgUrl: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
    },
    outOfStockAt: {
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
  { timestamps: true, tableName: 'product', sequelize }
);

export default Product;
