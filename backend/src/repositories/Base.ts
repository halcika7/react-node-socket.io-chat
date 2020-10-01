import { Injectable } from '@decorator/class';
import { Model as MongoModel, Document } from 'mongoose';

type Dic = Record<string, any>;

@Injectable()
export class BaseRepository {
  protected createModelInstance<U extends Dic, T extends Document>(
    Model: MongoModel<T>,
    values: U
  ) {
    return new Model({ ...values });
  }
}
