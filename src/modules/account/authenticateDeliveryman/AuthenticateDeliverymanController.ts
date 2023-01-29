import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";
import { Request, Response } from "express";

export class AuthenticateDeliverymanController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();

    const result = await authenticateDeliverymanUseCase.execute({
      password,
      username,
    });

    return res.json(result);
  }
}
