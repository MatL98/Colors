import { Application} from 'https://deno.land/x/oak/mod.ts';
import router from "./routes/colors.ts"
import { oakCors } from "https://deno.land/x/cors/mod.ts";



const app = new Application()



const PORT = 3001


app.use(oakCors());
app.use(router.routes())
app.use(router.allowedMethods())
console.log(`Server on port ${PORT}`);
await app.listen({port: PORT})

