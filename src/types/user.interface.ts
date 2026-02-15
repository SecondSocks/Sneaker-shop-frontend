import { UserModel } from '@/graphql/types/graphql'

export type TUser = Omit<UserModel, 'reviews'>
