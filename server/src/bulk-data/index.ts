import fs from 'fs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { Category, SubCategory, Product, User, LoginProvider, Cart } from '../models';
import { jwtSecret } from '@config/constants';
import logger from '@config/logger';

const readData = (file: string) => {
  return JSON.parse(fs.readFileSync(`${__dirname}/${file}`, { encoding: 'utf-8' }));
};

const createAdminUser = async (body: {
  username: string;
  email: string;
  password: string;
}): Promise<string> => {
  body.password = crypto.createHash('sha256').update(body.password).digest('base64');
  const user = await User.create({
    username: body.username,
    email: body.email,
    isAdmin: true,
  });
  Cart.create({ userId: user.id });
  const emailUserData = {
    id: user.id.toString(),
    email: body.email,
    password: body.password,
    provider: 'email',
    userId: user.id,
  };
  LoginProvider.create(emailUserData);

  return jwt.sign(
    {
      data: user,
    },
    jwtSecret,
    { expiresIn: '1d' }
  );
};

const bulkData = async () => {
  // create Categories
  const categoryData = readData('data/category.json');
  await Category.bulkCreate(categoryData);

  // create SubCategories
  const subCategoryData = readData('data/sub-category.json');
  await SubCategory.bulkCreate(subCategoryData);

  // create fruit products
  const fruitProductData = readData('data/fruits.json');
  await Product.bulkCreate(fruitProductData);

  // create vegetables products
  const vegetableProductData = readData('data/vegetables.json');
  await Product.bulkCreate(vegetableProductData);

  // create Admin user
  const signupAdminUser = readData('data/user.json');
  const token = await createAdminUser(signupAdminUser);
  logger.info(`admin token: ${token}`);
};

export default bulkData;
