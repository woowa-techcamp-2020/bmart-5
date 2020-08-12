import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../modules/database';
import Product from './product';

class SubCategory extends Model {
  public id!: number;
  public name!: string;
  public orderWeight!: number;
  public deletedAt!: Date | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SubCategory.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(45),
      unique: true,
      allowNull: false,
    },
    orderWeight: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  { timestamps: true, tableName: 'sub_category', sequelize }
);

SubCategory.hasMany(Product, {
  sourceKey: 'id',
  foreignKey: { name: 'subCategoryId', allowNull: false },
  as: 'products',
});

export default SubCategory;
