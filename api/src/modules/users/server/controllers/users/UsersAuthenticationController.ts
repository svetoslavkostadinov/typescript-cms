import { Request, Response } from "express";
import { UserContracts } from "../PersistantContracts/UserContracts";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";

export class UsersAuthenticationController {
  static register(req: Request, res: Response) {
    function validateUserRequest(body: any) {
      return body.hasOwnProperty("username") && body.hasOwnProperty("password");
    }

    if (validateUserRequest(req.body)) {
      UserContracts.userRegisterContract(req.body)
        .then((doc) => {
          res.status(200).jsonp(doc);
        })
        .catch((err) => {
          res.status(400).jsonp(err);
        })
    } else {
      res.status(400).jsonp("Request does not meet User criteria");
    }
  };

  static async login(req: Request, res: Response): Promise<void> {

    console.log('username: ' + req.body.username); // this is undefined - WHY?!?

    if(req.body.username !== undefined && req.body.password !== undefined) {
      this.findUser(req.body.username, req.body.password)
        .then((data)=>{
          res.status(200).jsonp(data.toString());
        })
        .catch((err)=>{
          res.status(500).jsonp(err.stackTrace);
        });
    } else {
      res.status(500).jsonp("Login Error")
    }

    //
  };

  private static async findUser(username: string, password: string): Promise<User[]> {
    const userRepository = getRepository(User);
    const user = await userRepository.find({
      select: ["id", "username", "role"] //We dont want to send the passwords on response
    });
    return user;
  }

  static logout(req: Request, res: Response): void {
    res.status(200).jsonp("OK")
  }

}