import { Request, Response } from "express";

export class CoreController {
  /**
   * Render Index
   * @param req
   * @param res
   */
  static returnStatus(req: Request, res: Response): void {
    res.status(200).jsonp({
      "status": "Server is Up!",
      "message": "Please use the correct URI to access the API server. /api/endpoint"
    });
  }

  /**
   * Server Error
   * @param req
   * @param res
   */
  static renderServerError(req: Request, res: Response): void {
    res.status(500).render('modules/core/server/views/500', {
      error: 'Sorry, dude! Something went wrong!'
    });
  }

  /**
   * Not Found
   * @param req
   * @param res
   */
  static renderNotFound(req: Request, res: Response): void {
    res.status(404).format({
      'text/html': function () {
        res.render('modules/core/server/views/404', {
          url: req.originalUrl
        });
      },
      'application/json': function () {
        res.json({
          error: 'Path not found'
        });
      },
      'default': function () {
        res.send('Path not found');
      }
    });
  }
}
