import { UserInterface } from '@model/User/User';
import { BaseRepository } from './Base';
export declare class UserRepository extends BaseRepository {
    constructor();
    createUser(data: UserInterface): UserInterface;
    findById(id: string): Promise<{
        _id: any;
        name: string | undefined;
        picture: string | undefined;
    }>;
    getAll(id: string): Promise<UserInterface[]>;
}
