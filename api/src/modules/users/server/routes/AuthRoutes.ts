import { Application } from 'express';
import UserController from "../controllers/UserController";

export class AuthRoutes {

  static routes(app: Application): void {

    // Setting up the users password api
    app.route('/api/auth/forgot').post(UserController.forgot);
    app.route('/api/auth/reset/:token').get(UserController.validateResetToken);
    app.route('/api/auth/reset/:token').post(UserController.reset);

    // Setting up the users authentication api
    app.route('/api/auth/register').post(UserController.register);
    // app.route('/api/auth/login').post(UserController.login);
    app.route('/api/auth/sign-out').get(UserController.signOut);

  }
}