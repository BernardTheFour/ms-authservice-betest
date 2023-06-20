import { Router } from "express";
import { index } from "../controller";


const router: Router = Router();
export default router;

router.use('/', (res, req) => index(res, req))