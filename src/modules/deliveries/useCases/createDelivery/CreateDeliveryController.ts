import { Response } from "express";
import { Request } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCases";
export class CreateDeliveryController {
  async handle(req: Request, res: Response) {
    const { item_name } = req.body;
    const { id_client } = req;
    const createDeliveryUseCases = new CreateDeliveryUseCase();

    const delivery = await createDeliveryUseCases.execute({
      id_client,
      item_name,
    });

    return res.json(delivery);
  }
}
