import { Request, Response } from "express";
import { CreateDeliverymanUseCases } from "./CreateDeliverymanUseCases";

export class CreateDeliverymanController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    const createDeliveryman = new CreateDeliverymanUseCases();
    const result = await createDeliveryman.execute({
      username,
      password,
    });

    return res.json(result);
  }
}
