import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateEndDateController = new UpdateEndDateUseCase();
    const delivery = await updateEndDateController.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.json(delivery);
  }
}
