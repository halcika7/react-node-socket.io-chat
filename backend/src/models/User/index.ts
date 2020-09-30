import { model, Schema } from 'mongoose';
import { UserInterface } from './User';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
    default: '',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subscription: {
    type: Object,
  },
  socialIds: {
    type: Map,
    of: String,
    unique: false,
  },
});

export default model<UserInterface>('User', userSchema);
