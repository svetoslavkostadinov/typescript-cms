import {Application} from 'express';
import {checkJwt} from "../../../../middlewares/checkJwt";
import { checkRole } from "../../../../middlewares/checkRole";
import {AdminController} from "../controllers/AdminController";

export class AdminRoutes {

    static routes(app: Application): void {
        // Users collection routes
        app.route('/api/users')
            .get(AdminController.list);
            // .get([checkJwt, checkRole(["ADMIN"])], AdminController.list);

        // Single user routes
        app.route('/api/users/:userId')
            .get([checkJwt, checkRole(["ADMIN"])], AdminController.read)
            .put([checkJwt, checkRole(["ADMIN"])], AdminController.update)
            .delete([checkJwt, checkRole(["ADMIN"])], AdminController.delete);

        // Finish by binding the user middleware
        app.param('userId', AdminController.userByID);
    }
}