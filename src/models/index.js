// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Testimonials, Colleges, Comments, Tags, BlogPost, Users, Order, Category, Product, BlogPostTags, ProductCategory } = initSchema(schema);

export {
  Testimonials,
  Colleges,
  Comments,
  Tags,
  BlogPost,
  Users,
  Order,
  Category,
  Product,
  BlogPostTags,
  ProductCategory
};