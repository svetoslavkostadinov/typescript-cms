import {Application} from 'express';
import UserController from "../controllers/UserController";

export class UserRoutes {

    static routes(app: Application): void {

        // Setting up the users profile api
        app.route('/api/users/me').get(UserController.me);
        app.route('/api/users').put(UserController.update);
        app.route('/api/users/password').post(UserController.changePassword);
        app.route('/api/users/picture').post(UserController.changeProfilePicture);

        // Finish by binding the user middleware
        app.param('userId', UserController.userByID);

        // CORE ROUTES
        // app.route('/')
        //     .get((req: Request, res: Response) => {
        //         res.status(200).send({
        //             message: 'Get Request Successful!!!'
        //         })
        //     });
        //
        // // AUTHENTICATION ROUTES
        // app.route('/login')
        //     .post(AdminController.login);
        // app.route('/change-password')
        //     .post([checkJwt], AdminController.changePassword);
        //
        // // ADMIN ROUTES
        // /**
        //  * Create a new user
        //  */
        // app.route('/admin/add-user')
        //     .post([checkJwt, checkRole(["ADMIN"])], UserController.newUser);
        // app.route('/admin/users-list')
        //     .post([checkJwt, checkRole(["ADMIN"])], UserController.listAll);
        //
        //
        // // USER ROUTES
        // /**
        //  * Get one user
        //  */
        // app.route('/:id([0-9]+)')
        //     .get([checkJwt, checkRole(["ADMIN"])], UserController.getOneById);
        //
        // /**
        //  * Create a new user
        //  */
        // app.route('/user/register')
        //     .post(UserController.newUser);
    }
}