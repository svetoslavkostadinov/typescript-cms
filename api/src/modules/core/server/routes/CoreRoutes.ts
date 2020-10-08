import {Request, Response, Application} from "express";
import { CoreController } from "../controllers/CoreController";
import {checkJwt} from "../../../../middlewares/checkJwt";
import {checkRole} from "../../../../middlewares/checkRole";
import UserController from "../../../users/server/controllers/UserController";
export class CoreRoutes {

    // private static core: CoreController;
    public static routes(app: Application): void {

        //Define Error Pages
        app.route('/server-error').get((req: Request, res: Response) => {
                res.status(500).send(CoreController.renderServerError);
            });
        //Return a 404 for all undefined api, module or lib routes
        app.route('/:url(api|modules|lib)/*').get(CoreController.renderNotFound);
        // Define application route
        app.route('/api').get(CoreController.returnStatus);


        // ADMIN ROUTES
        /**
         * Create a new user
         */
        app.route('/admin/add-user')
            .post([checkJwt, checkRole(["ADMIN"])], UserController.newUser);
        app.route('/admin/users-list')
            .post([checkJwt, checkRole(["ADMIN"])], UserController.listAll);


        // USER ROUTES
        /**
         * Get one user
         */
        // app.route('/:id([0-9]+)')
        //     .get([checkJwt, checkRole(["ADMIN"])], UserController.getOneById);

        /**
         * Create a new user
         */
        // app.route('/user/register')
        //     .post(UserController.newUser);
    }

}