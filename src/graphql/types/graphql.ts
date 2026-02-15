/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: string; output: string; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type CategoryInputModel = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type CategoryModel = {
  __typename?: 'CategoryModel';
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  sneakers: Array<SneakerModel>;
  sortOrder: Scalars['Int']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: CategoryModel;
  createSneaker: SneakerModel;
  deleteProfile: UserModel;
  getNewTokens: AuthPayload;
  login: AuthPayload;
  register: AuthPayload;
  setMainSneakerImage: SneakerImageModel;
  toggleFavorite: Scalars['String']['output'];
  updateCategory: CategoryModel;
  updateProfile: UserModel;
  updateSneaker: SneakerModel;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInputModel;
};


export type MutationCreateSneakerArgs = {
  data: SneakerInputModel;
};


export type MutationGetNewTokensArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationSetMainSneakerImageArgs = {
  imageId: Scalars['String']['input'];
  sneakerId: Scalars['String']['input'];
};


export type MutationToggleFavoriteArgs = {
  sneakerId: Scalars['String']['input'];
};


export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['String']['input'];
  data: CategoryInputModel;
};


export type MutationUpdateProfileArgs = {
  data: UserUpdateInput;
};


export type MutationUpdateSneakerArgs = {
  data: SneakerInputModel;
  id: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  categories: Array<CategoryModel>;
  categoryById: Array<CategoryModel>;
  categoryBySlug: Array<CategoryModel>;
  createReview: ReviewModel;
  getAllUsers: Array<UserModel>;
  getReviewsBySneakerId: Array<ReviewModel>;
  getReviewsByUserId: Array<ReviewModel>;
  hello: Scalars['String']['output'];
  profile: UserModel;
  reviewImages: Array<ReviewImageModel>;
  sneakerById: SneakerModel;
  sneakerBySlug: SneakerModel;
  sneakerImagesById: Array<SneakerImageModel>;
  sneakerVariantsById: Array<SneakerVariantModel>;
  sneakers: Array<SneakerModel>;
};


export type QueryCategoryByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryCategoryBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QuerySneakerByIdArgs = {
  id: Scalars['String']['input'];
};


export type QuerySneakerBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QuerySneakerImagesByIdArgs = {
  sneakerId: Scalars['String']['input'];
};


export type QuerySneakerVariantsByIdArgs = {
  sneakerId: Scalars['String']['input'];
};

export type RegisterInput = {
  address: Scalars['String']['input'];
  birthDate: Scalars['DateTime']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  region: Scalars['String']['input'];
  surname: Scalars['String']['input'];
};

export type ReviewImageModel = {
  __typename?: 'ReviewImageModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  sortOrder: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type ReviewModel = {
  __typename?: 'ReviewModel';
  assessment: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  images: Array<ReviewImageModel>;
  sneaker: SneakerModel;
  text: Scalars['String']['output'];
  user: UserModel;
};

export type SneakerImageModel = {
  __typename?: 'SneakerImageModel';
  alt?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isMain: Scalars['Boolean']['output'];
  sortOrder: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type SneakerInputModel = {
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  ratingAvg?: InputMaybe<Scalars['Float']['input']>;
  ratingCount?: InputMaybe<Scalars['Int']['input']>;
};

export type SneakerModel = {
  __typename?: 'SneakerModel';
  category: CategoryModel;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images: Array<SneakerImageModel>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  ratingAvg?: Maybe<Scalars['Float']['output']>;
  ratingCount: Scalars['Int']['output'];
  reviews: Array<ReviewModel>;
  slug: Scalars['String']['output'];
  variants: Array<SneakerVariantModel>;
};

export type SneakerVariantModel = {
  __typename?: 'SneakerVariantModel';
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  size: Scalars['Int']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  stock: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserModel = {
  __typename?: 'UserModel';
  address: Scalars['String']['output'];
  birthDate: Scalars['DateTime']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  region: Scalars['String']['output'];
  reviews: Array<ReviewModel>;
  surname: Scalars['String']['output'];
};

export type UserUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  age?: InputMaybe<Scalars['Int']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
};
