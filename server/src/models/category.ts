import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../modules/database';
import SubCategory from './sub-category';

class Category extends Model {
  public id!: number;
  public name!: string;
  public orderWeight!: number;
  public deletedAt!: Date | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
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
      unique: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  { timestamps: true, tableName: 'category', sequelize }
);

Category.hasMany(SubCategory, {
  sourceKey: 'id',
  foreignKey: { name: 'categoryId', allowNull: false },
  as: 'subCategories',
});

export default Category;
