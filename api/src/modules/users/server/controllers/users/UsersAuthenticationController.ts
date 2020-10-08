import {Request, Response} from "express";
import {UserContracts} from "../PersistantContracts/UserContracts";

export class UsersAuthenticationController {
    static register(req: Request, res: Response) {
        function validateUserRequest(body: any) {
            return body.hasOwnProperty("username") && body.hasOwnProperty("password");
        }
        if(validateUserRequest(req.body)) {
            UserContracts.userRegisterContract(req.body)
                .then((doc)=>{
                    res.status(200).jsonp(doc);
                })
                .catch((err)=>{
                    res.status(400).jsonp(err);
                })
        } else {
            res.status(400).jsonp("Request does not meet User criteria");
        }
    };

    static signIn(req: Request, res: Response): void {
        //TODO: Implement
        res.status(200).jsonp("OK")
    };

    static signOut(req: Request, res: Response): void {
        res.status(200).jsonp("OK")
    }
}