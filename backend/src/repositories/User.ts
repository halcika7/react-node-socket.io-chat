import User from '@model/User';
import { UserInterface } from '@model/User/User';
import { BaseRepository } from './Base';
import { Injectable } from '@decorator/class';
import { Dictionary } from '../utils/genericTypes';

@Injectable()
export class UserRepository extends BaseRepository {
  constructor() {
    super();
  }

  createUser(data: UserInterface): UserInterface {
    return super.createModelInstance<Dictionary, UserInterface>(User, data);
  }

  async findById(id: string) {
    const user = await User.findById(id).select('_id name picture');
    return { _id: user?.id, name: user?.name, picture: user?.picture };
  }

  async getAll(id: string) {
    return User.find({ _id: { $ne: id } }, '_id name picture');
  }
}
