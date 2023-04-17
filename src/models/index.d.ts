import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerResources = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resources, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly file?: string | null;
  readonly Categories?: (ResourcesCategory | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResources = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resources, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly file?: string | null;
  readonly Categories: AsyncCollection<ResourcesCategory>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Resources = LazyLoading extends LazyLoadingDisabled ? EagerResources : LazyResources

export declare const Resources: (new (init: ModelInit<Resources>) => Resources) & {
  copyOf(source: Resources, mutator: (draft: MutableModel<Resources>) => MutableModel<Resources> | void): Resources;
}

type EagerTestimonials = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Testimonials, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly location?: string | null;
  readonly rating?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestimonials = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Testimonials, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly location?: string | null;
  readonly rating?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Testimonials = LazyLoading extends LazyLoadingDisabled ? EagerTestimonials : LazyTestimonials

export declare const Testimonials: (new (init: ModelInit<Testimonials>) => Testimonials) & {
  copyOf(source: Testimonials, mutator: (draft: MutableModel<Testimonials>) => MutableModel<Testimonials> | void): Testimonials;
}

type EagerColleges = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Colleges, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly link?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyColleges = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Colleges, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly link?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Colleges = LazyLoading extends LazyLoadingDisabled ? EagerColleges : LazyColleges

export declare const Colleges: (new (init: ModelInit<Colleges>) => Colleges) & {
  copyOf(source: Colleges, mutator: (draft: MutableModel<Colleges>) => MutableModel<Colleges> | void): Colleges;
}

type EagerComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly published_date?: string | null;
  readonly author?: Users | null;
  readonly post_id?: BlogPost | null;
  readonly parent_coment?: string | null;
  readonly replies?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly commentsAuthorId?: string | null;
  readonly commentsPost_idId?: string | null;
}

type LazyComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly published_date?: string | null;
  readonly author: AsyncItem<Users | undefined>;
  readonly post_id: AsyncItem<BlogPost | undefined>;
  readonly parent_coment?: string | null;
  readonly replies?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly commentsAuthorId?: string | null;
  readonly commentsPost_idId?: string | null;
}

export declare type Comments = LazyLoading extends LazyLoadingDisabled ? EagerComments : LazyComments

export declare const Comments: (new (init: ModelInit<Comments>) => Comments) & {
  copyOf(source: Comments, mutator: (draft: MutableModel<Comments>) => MutableModel<Comments> | void): Comments;
}

type EagerTags = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tags, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tag_name?: string | null;
  readonly blogposts?: (BlogPostTags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTags = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tags, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tag_name?: string | null;
  readonly blogposts: AsyncCollection<BlogPostTags>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tags = LazyLoading extends LazyLoadingDisabled ? EagerTags : LazyTags

export declare const Tags: (new (init: ModelInit<Tags>) => Tags) & {
  copyOf(source: Tags, mutator: (draft: MutableModel<Tags>) => MutableModel<Tags> | void): Tags;
}

type EagerBlogPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BlogPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly cover?: string | null;
  readonly content?: string | null;
  readonly author?: string | null;
  readonly Tags?: (BlogPostTags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlogPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BlogPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly cover?: string | null;
  readonly content?: string | null;
  readonly author?: string | null;
  readonly Tags: AsyncCollection<BlogPostTags>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BlogPost = LazyLoading extends LazyLoadingDisabled ? EagerBlogPost : LazyBlogPost

export declare const BlogPost: (new (init: ModelInit<BlogPost>) => BlogPost) & {
  copyOf(source: BlogPost, mutator: (draft: MutableModel<BlogPost>) => MutableModel<BlogPost> | void): BlogPost;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub_cognito?: string | null;
  readonly name?: string | null;
  readonly firstname?: string | null;
  readonly registration_date?: string | null;
  readonly direction?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly postal_code?: string | null;
  readonly purchase_history?: string | null;
  readonly ratings?: string | null;
  readonly comments?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub_cognito?: string | null;
  readonly name?: string | null;
  readonly firstname?: string | null;
  readonly registration_date?: string | null;
  readonly direction?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly postal_code?: string | null;
  readonly purchase_history?: string | null;
  readonly ratings?: string | null;
  readonly comments?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly userId?: string | null;
  readonly address?: string | null;
  readonly date?: string | null;
  readonly total?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: string | null;
  readonly userId?: string | null;
  readonly address?: string | null;
  readonly date?: string | null;
  readonly total?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly products?: (ProductCategory | null)[] | null;
  readonly resourcess?: (ResourcesCategory | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly products: AsyncCollection<ProductCategory>;
  readonly resourcess: AsyncCollection<ResourcesCategory>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly sku?: string | null;
  readonly price?: number | null;
  readonly stock?: number | null;
  readonly dimensions?: string | null;
  readonly weight?: number | null;
  readonly rating?: number | null;
  readonly cover?: string | null;
  readonly categories?: (ProductCategory | null)[] | null;
  readonly top?: string | null;
  readonly bottom?: string | null;
  readonly front?: string | null;
  readonly back?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly sku?: string | null;
  readonly price?: number | null;
  readonly stock?: number | null;
  readonly dimensions?: string | null;
  readonly weight?: number | null;
  readonly rating?: number | null;
  readonly cover?: string | null;
  readonly categories: AsyncCollection<ProductCategory>;
  readonly top?: string | null;
  readonly bottom?: string | null;
  readonly front?: string | null;
  readonly back?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerResourcesCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ResourcesCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly resourcesId?: string | null;
  readonly categoryId?: string | null;
  readonly resources: Resources;
  readonly category: Category;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResourcesCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ResourcesCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly resourcesId?: string | null;
  readonly categoryId?: string | null;
  readonly resources: AsyncItem<Resources>;
  readonly category: AsyncItem<Category>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ResourcesCategory = LazyLoading extends LazyLoadingDisabled ? EagerResourcesCategory : LazyResourcesCategory

export declare const ResourcesCategory: (new (init: ModelInit<ResourcesCategory>) => ResourcesCategory) & {
  copyOf(source: ResourcesCategory, mutator: (draft: MutableModel<ResourcesCategory>) => MutableModel<ResourcesCategory> | void): ResourcesCategory;
}

type EagerBlogPostTags = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BlogPostTags, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tagsId?: string | null;
  readonly blogPostId?: string | null;
  readonly tags: Tags;
  readonly blogPost: BlogPost;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlogPostTags = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BlogPostTags, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tagsId?: string | null;
  readonly blogPostId?: string | null;
  readonly tags: AsyncItem<Tags>;
  readonly blogPost: AsyncItem<BlogPost>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BlogPostTags = LazyLoading extends LazyLoadingDisabled ? EagerBlogPostTags : LazyBlogPostTags

export declare const BlogPostTags: (new (init: ModelInit<BlogPostTags>) => BlogPostTags) & {
  copyOf(source: BlogPostTags, mutator: (draft: MutableModel<BlogPostTags>) => MutableModel<BlogPostTags> | void): BlogPostTags;
}

type EagerProductCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoryId?: string | null;
  readonly productId?: string | null;
  readonly category: Category;
  readonly product: Product;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoryId?: string | null;
  readonly productId?: string | null;
  readonly category: AsyncItem<Category>;
  readonly product: AsyncItem<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductCategory = LazyLoading extends LazyLoadingDisabled ? EagerProductCategory : LazyProductCategory

export declare const ProductCategory: (new (init: ModelInit<ProductCategory>) => ProductCategory) & {
  copyOf(source: ProductCategory, mutator: (draft: MutableModel<ProductCategory>) => MutableModel<ProductCategory> | void): ProductCategory;
}