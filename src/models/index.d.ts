import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerAddColleges = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AddColleges, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly college?: string | null;
  readonly details?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAddColleges = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AddColleges, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly college?: string | null;
  readonly details?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AddColleges = LazyLoading extends LazyLoadingDisabled ? EagerAddColleges : LazyAddColleges

export declare const AddColleges: (new (init: ModelInit<AddColleges>) => AddColleges) & {
  copyOf(source: AddColleges, mutator: (draft: MutableModel<AddColleges>) => MutableModel<AddColleges> | void): AddColleges;
}

type EagerVideo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Video, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly video_id?: string | null;
  readonly details?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Video, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly video_id?: string | null;
  readonly details?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Video = LazyLoading extends LazyLoadingDisabled ? EagerVideo : LazyVideo

export declare const Video: (new (init: ModelInit<Video>) => Video) & {
  copyOf(source: Video, mutator: (draft: MutableModel<Video>) => MutableModel<Video> | void): Video;
}

type EagerOnlinePurchase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OnlinePurchase, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customer_name?: string | null;
  readonly customer_email?: string | null;
  readonly details?: string | null;
  readonly uuid?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOnlinePurchase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OnlinePurchase, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customer_name?: string | null;
  readonly customer_email?: string | null;
  readonly details?: string | null;
  readonly uuid?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OnlinePurchase = LazyLoading extends LazyLoadingDisabled ? EagerOnlinePurchase : LazyOnlinePurchase

export declare const OnlinePurchase: (new (init: ModelInit<OnlinePurchase>) => OnlinePurchase) & {
  copyOf(source: OnlinePurchase, mutator: (draft: MutableModel<OnlinePurchase>) => MutableModel<OnlinePurchase> | void): OnlinePurchase;
}

type EagerContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Contact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Contact = LazyLoading extends LazyLoadingDisabled ? EagerContact : LazyContact

export declare const Contact: (new (init: ModelInit<Contact>) => Contact) & {
  copyOf(source: Contact, mutator: (draft: MutableModel<Contact>) => MutableModel<Contact> | void): Contact;
}

type EagerResources = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resources, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly files?: string | null;
  readonly Categories?: (ResourcesCategory | null)[] | null;
  readonly cover?: string | null;
  readonly autor?: string | null;
  readonly rating?: number | null;
  readonly short?: string | null;
  readonly tags?: string | null;
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
  readonly files?: string | null;
  readonly Categories: AsyncCollection<ResourcesCategory>;
  readonly cover?: string | null;
  readonly autor?: string | null;
  readonly rating?: number | null;
  readonly short?: string | null;
  readonly tags?: string | null;
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
  readonly email?: string | null;
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
  readonly email?: string | null;
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
  readonly details?: string | null;
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
  readonly details?: string | null;
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
  readonly parent_id?: string | null;
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
  readonly parent_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly commentsAuthorId?: string | null;
  readonly commentsPost_idId?: string | null;
}

export declare type Comments = LazyLoading extends LazyLoadingDisabled ? EagerComments : LazyComments

export declare const Comments: (new (init: ModelInit<Comments>) => Comments) & {
  copyOf(source: Comments, mutator: (draft: MutableModel<Comments>) => MutableModel<Comments> | void): Comments;
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
  readonly tags?: string | null;
  readonly categories?: (BlogPostCategory | null)[] | null;
  readonly short?: string | null;
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
  readonly tags?: string | null;
  readonly categories: AsyncCollection<BlogPostCategory>;
  readonly short?: string | null;
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
  readonly purchase_products?: string | null;
  readonly ratings?: string | null;
  readonly comments?: string | null;
  readonly email?: string | null;
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
  readonly purchase_products?: string | null;
  readonly ratings?: string | null;
  readonly comments?: string | null;
  readonly email?: string | null;
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
  readonly resources?: (ResourcesCategory | null)[] | null;
  readonly color?: string | null;
  readonly blogposts?: (BlogPostCategory | null)[] | null;
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
  readonly resources: AsyncCollection<ResourcesCategory>;
  readonly color?: string | null;
  readonly blogposts: AsyncCollection<BlogPostCategory>;
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
  readonly marketplaces?: string | null;
  readonly images?: string | null;
  readonly type?: string | null;
  readonly tags?: string | null;
  readonly short?: string | null;
  readonly discount?: number | null;
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
  readonly marketplaces?: string | null;
  readonly images?: string | null;
  readonly type?: string | null;
  readonly tags?: string | null;
  readonly short?: string | null;
  readonly discount?: number | null;
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

type EagerBlogPostCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BlogPostCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly blogPostId?: string | null;
  readonly categoryId?: string | null;
  readonly blogPost: BlogPost;
  readonly category: Category;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlogPostCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BlogPostCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly blogPostId?: string | null;
  readonly categoryId?: string | null;
  readonly blogPost: AsyncItem<BlogPost>;
  readonly category: AsyncItem<Category>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BlogPostCategory = LazyLoading extends LazyLoadingDisabled ? EagerBlogPostCategory : LazyBlogPostCategory

export declare const BlogPostCategory: (new (init: ModelInit<BlogPostCategory>) => BlogPostCategory) & {
  copyOf(source: BlogPostCategory, mutator: (draft: MutableModel<BlogPostCategory>) => MutableModel<BlogPostCategory> | void): BlogPostCategory;
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