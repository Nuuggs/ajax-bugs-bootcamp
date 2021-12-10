import express from "express";
import initMainCtrl from "../controllers/mainCtrl.mjs";

const router = express.Router();
const mainCtrl = initMainCtrl();

router.get('/', mainCtrl.getMain);

export default router;