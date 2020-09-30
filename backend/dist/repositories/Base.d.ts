import { Model as MongoModel, Document } from 'mongoose';
export declare class BaseRepository {
    protected createModelInstance<U extends {
        [key: string]: any;
    }, T extends Document>(Model: MongoModel<T>, values: U): T;
}
