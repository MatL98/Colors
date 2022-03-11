import { Response, Request } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std@0.129.0/uuid/mod.ts";


interface Colors {
  id: string,
  color: string;
}




const colors: Colors[] = [];

export const getColor = ({ response }: { response: Response }) => {
  response.body = {
    colors,
  };
};
export const createColor = async ({
  request,
  response,
}: {
  request: Request;
  response: Response;
}, ) => {
  const body = await request.body().value;
  console.log(body);
	if (body) {
    const newColor: Colors = body
    newColor.id = crypto.randomUUID();

		colors.push(newColor)
	}
  response.body = {
    message: "color agregado"
  };
};

