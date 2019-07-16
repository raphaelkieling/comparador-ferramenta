import * as HttpCodes from 'http-status-codes';

export interface IApiResponse {
  message: string;
  payload: any;
  status: number;
}

export default class ApiResponse {
  public static genResponse(
    status: number,
    payload: any,
    message: string,
  ): IApiResponse {
    return {
      message,
      payload,
      status,
    };
  }

  public static ok(payload: any, message: string = ''): IApiResponse {
    const status = HttpCodes.OK;
    return ApiResponse.genResponse(status, payload, message);
  }

  public static create(payload: any, message: string = ''): IApiResponse {
    const status = HttpCodes.CREATED;
    return ApiResponse.genResponse(status, payload, message);
  }

  public static internalError(
    payload: any,
    message: string = '',
  ): IApiResponse {
    const status = HttpCodes.INTERNAL_SERVER_ERROR;
    return ApiResponse.genResponse(status, payload, message);
  }
}
