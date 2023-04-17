// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Resources, Testimonials, Colleges, Comments, Tags, BlogPost, Users, Order, Category, Product, ResourcesCategory, BlogPostTags, ProductCategory } = initSchema(schema);

export {
  Resources,
  Testimonials,
  Colleges,
  Comments,
  Tags,
  BlogPost,
  Users,
  Order,
  Category,
  Product,
  ResourcesCategory,
  BlogPostTags,
  ProductCategory
};