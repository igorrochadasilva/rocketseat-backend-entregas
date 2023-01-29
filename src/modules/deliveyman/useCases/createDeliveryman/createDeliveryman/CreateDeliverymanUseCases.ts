import { hash } from "bcrypt";
import { prisma } from "../../../../../database/prismaClient";

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCases {
  async execute({ password, username }: ICreateDeliveryman) {
    //validar se o deliveryman existe
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (deliverymanExist) {
      throw new Error("Deliveryman already exists");
    }

    //criptografar a senha
    const hashPassword = await hash(password, 10);

    //salvar o deliveryman
    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return deliveryman;
  }
}
