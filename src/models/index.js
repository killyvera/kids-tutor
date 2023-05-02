// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Contact, Resources, Testimonials, Colleges, Comments, Tags, BlogPost, Users, Order, Category, Product, CategoryResources, BlogPostTags, ProductCategory } = initSchema(schema);

export {
  Contact,
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
  CategoryResources,
  BlogPostTags,
  ProductCategory
};