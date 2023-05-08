// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Contact, Resources, Testimonials, Colleges, Comments, Tags, BlogPost, Users, Order, Category, Product, ResourcesCategory, TagsResources, BlogPostTags, ProductTags, ProductCategory } = initSchema(schema);

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
  ResourcesCategory,
  TagsResources,
  BlogPostTags,
  ProductTags,
  ProductCategory
};