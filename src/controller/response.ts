import { Request, Response } from "express";

export type ResponseEntityType = {
  message: string;
  status: STATUS;
  data?: object;
};

export enum STATUS {
  SUCCESS = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export function ResponseEntity(
  status: STATUS,
  message: string,
  data?: object
): ResponseEntityType {
  let responseMessage: string = "";

  switch (status) {
    case STATUS.SUCCESS:
      responseMessage = `[success] ${message}`;
      break;
    case STATUS.BAD_REQUEST:
      responseMessage = `[failed] Bad request: ${message}`;
      break;
    case STATUS.UNAUTHORIZED:
      responseMessage = `[failed] Unauthorized: ${message}`;
      break;
    case STATUS.FORBIDDEN:
      responseMessage = `[failed] Forbidded: ${message}`;
      break;
    case STATUS.NOT_FOUND:
      responseMessage = `[failed] Not found: ${message}`;
      break;
    case STATUS.SERVER_ERROR:
      responseMessage = `[failed] Server error: ${message}`;
      break;
  }

  return {
    message: responseMessage,
    status: status,
    data: data,
  } as ResponseEntityType;
}

export function sendResponse(res: Response, body: ResponseEntityType) {
  res.status(body.status).json(body);
}
