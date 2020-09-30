import { Injectable } from '@decorator/class';
import { Model as MongoModel, Document } from 'mongoose';

@Injectable()
export class BaseRepository {
  protected createModelInstance<
    U extends { [key: string]: any },
    T extends Document
  >(Model: MongoModel<T>, values: U) {
    return new Model({ ...values });
  }
}
