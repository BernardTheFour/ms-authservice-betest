import { Request, Response } from "express";
import { ResponseEntity, STATUS, sendResponse } from "./response";

export async function index(req: Request, res: Response) {
  sendResponse(res, ResponseEntity(STATUS.SUCCESS, "server connected"));
}
