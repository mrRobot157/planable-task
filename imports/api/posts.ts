import { Mongo } from 'meteor/mongo';

export interface PostData {
  _id?: string;
  name: string;
  title: string;
  url: string;
  createdAt: number;
}

export const PostsCollection = new Mongo.Collection<PostData>('Posts');
