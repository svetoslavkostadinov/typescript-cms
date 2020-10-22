/**
 * Created By: Svet Kostadinov on 01/11/2019
 */
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { UserContracts } from "./PersistantContracts/UserContracts";

export class AdminController {

  /**
   * List All Users
   * @param req
   * @param res
   */
  static async list(req: Request, res: Response) {

    UserContracts.list()
      .then((users) => {
        res.status(200).jsonp(users);
      })
      .catch((err) => {
        res.status(400).jsonp(err);
      });
  }

  //Send the users object


  static read(req: Request, res: Response): void {
    //TODO: Implement
  }

  static update(req: Request, res: Response): void {
    //TODO: Implement
  }

  static delete(req: Request, res: Response): void {
    //TODO: Implement
  }

  static userByID(req: Request, res: Response): void {
    //TODO: Implement
  }
}