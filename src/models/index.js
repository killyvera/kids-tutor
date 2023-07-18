// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Video, OnlinePurchase, Contact, Resources, Testimonials, Colleges, Comments, BlogPost, Users, Order, Category, Product, ResourcesCategory, BlogPostCategory, ProductCategory } = initSchema(schema);

export {
  Video,
  OnlinePurchase,
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