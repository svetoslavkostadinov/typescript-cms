import { Application } from 'express';
import { checkJwt } from "../../../../middlewares/checkJwt";
import { checkRole } from "../../../../middlewares/checkRole";
import { AdminController } from "../controllers/AdminController";
import UserController from "../controllers/UserController";

export class AdminRoutes {

  static routes(app: Application): void {

    // ADMIN ROUTES
    /**
     * Create a new user
     */
    app.route('/admin/add-user')
      .post([checkJwt, checkRole(["ADMIN"])], UserController.newUser);

    /**
     * List all users route
     */
    app.route('/admin/users-list')
      .get([checkJwt, checkRole(["ADMIN"])], AdminController.list);

    // Users collection routes
    // app.route('/api/users')
    //     .get(AdminController.list);
    // .get([checkJwt, checkRole(["ADMIN"])], AdminController.list);

    app.route('/api/login').get(UserController.login);

    // Single user routes
    app.route('/api/users/:userId')
      .get([checkJwt, checkRole(["ADMIN", "USER"])], AdminController.read)
      .put([checkJwt, checkRole(["ADMIN"])], AdminController.update)
      .delete([checkJwt, checkRole(["ADMIN"])], AdminController.delete);

    // Finish by binding the user middleware
    app.param('userId', AdminController.userByID);
  }
}