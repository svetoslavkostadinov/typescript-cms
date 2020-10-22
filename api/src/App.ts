import express from "express";
import * as typeOrm from "typeorm";
import morgan from "morgan";
import chalk from "chalk";
import { CoreRoutes } from "./modules/core/server/routes/CoreRoutes";
import { AdminRoutes } from "./modules/users/server/routes/AdminRoutes";
import { AuthRoutes } from "./modules/users/server/routes/AuthRoutes";
import { UserRoutes } from "./modules/users/server/routes/UserRoutes";

class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.typeOrmSetup();
    this.config();
    AdminRoutes.routes(this.app);
    AuthRoutes.routes(this.app);
    CoreRoutes.routes(this.app);
    UserRoutes.routes(this.app);
  }

  private typeOrmSetup() {
    typeOrm.createConnection()
      .then(() => {
        return;
      })
      .catch((error) => {
        console.error(chalk.red(error));
      });
  }

  private config() {
    // support application/json type post data
    this.app.use(express.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(express.urlencoded());
    // logger middleware
    this.app.use(morgan('dev'));
  }
}

export default new App().app;