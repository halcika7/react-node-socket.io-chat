import { idTypes } from '@ctypes';
import { Document } from 'mongoose';

export interface UserInterface extends Document {
  name: string;
  picture: string;
  email: string;
  subscription: { [key: string]: any };
  socialIds: Map<idTypes, string>;
}
