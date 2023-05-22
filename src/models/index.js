// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Contact, Resources, Testimonials, Colleges, Comments, BlogPost, Users, Order, Category, Product, ResourcesCategory, BlogPostCategory, ProductCategory } = initSchema(schema);

export {
  Contact,
  Resources,
  Testimonials,
  Colleges,
  Comments,
  BlogPost,
  Users,
  Order,
  Category,
  Product,
  ResourcesCategory,
  BlogPostCategory,
  ProductCategory
};