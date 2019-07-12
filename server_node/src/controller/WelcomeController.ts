import Express from "express";
import ApiResponse from "../utils/ApiResponse";
import ApiController from "./ApiController";

class WelcomeController extends ApiController {
  public index(req: Express.Request, res: Express.Response) {
    const data = {
      message: "Hello World",
    };

    ApiResponse.ok(res, data);
  }
}

export default WelcomeController;
