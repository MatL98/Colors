import {Router} from 'https://deno.land/x/oak/mod.ts';


import * as color from "../controllers/controllersColors.ts"


const router = new Router()

router.post("/", color.createColor)
router.get("/", color.getColor)


export default router;