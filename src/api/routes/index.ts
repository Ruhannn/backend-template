import { Router } from "express";
import { test } from "../controller/testController";

const router = Router();


router.post('/test', test);



export default router;