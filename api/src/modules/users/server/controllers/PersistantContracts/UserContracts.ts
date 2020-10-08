import {User} from "../../entity/User";
import {getRepository} from "typeorm";

export class UserContracts {

    /**
     * The userRegisterContract method registers new user and returns a promise
     * @param body
     * @return Promise
     */
    static async userRegisterContract(body: any): Promise<any> {
        let user = new User();
        user.firstName = body.firstName;
        user.lastName = body.lastName;
        user.email = body.email;
        user.username = body.username;
        user.password = body.password;
        user.hashPassword();
        user.role = "USER";
        const userRepository = getRepository(User);
        return await userRepository.save(user);
    }

    /**
     * The list method returns all users from the Users entity
     */
    static async list(): Promise<any> {
        //Get users from database
        const userRepository = getRepository(User);
        return await userRepository.find({
            select: ["id", "username", "firstName", "lastName", "email", "role"]
        });
    }


}
