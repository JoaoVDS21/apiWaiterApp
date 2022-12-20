import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response){
  try{
    const orders = await Order.find()
      .sort({ createdAt: -1 }) // -1 = desc, 1 = asc
      .populate('products.product'); // Dá um inner join com produto para trazer todas as informações de cada produto dentro da ordem

    res.json(orders);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
}
