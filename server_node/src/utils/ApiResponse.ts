import Express from "express";
import HttpCodes from "http-status-codes";

export default class ApiResponse {
  public static genResponse(status: number, payload: any, message: string) {
    return {
      message,
      payload,
      status,
    };
  }

  public static ok(
    response: Express.Response,
    payload: any,
    message: string = "",
  ): void {
    const status = HttpCodes.OK;
    response
      .status(status)
      .send(ApiResponse.genResponse(status, payload, message));
  }

  public static create(
    response: Express.Response,
    payload: any,
    message: string = "",
  ): void {
    const status = HttpCodes.CREATED;
    response
      .status(status)
      .send(ApiResponse.genResponse(status, payload, message));
  }

  public static internalError(
    response: Express.Response,
    payload: any,
    message: string = "",
  ): void {
    const status = HttpCodes.INTERNAL_SERVER_ERROR;
    response
      .status(status)
      .send(ApiResponse.genResponse(status, payload, message));
  }
}
