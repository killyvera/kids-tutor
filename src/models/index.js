// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AddColleges, Video, OnlinePurchase, Contact, Resources, Testimonials, Colleges, Comments, BlogPost, Users, Order, Category, Product, ResourcesCategory, BlogPostCategory, ProductCategory } = initSchema(schema);

export {
  AddColleges,
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