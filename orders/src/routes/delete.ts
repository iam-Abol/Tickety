import {
  NotAuthorizedError,
  NoteFoundError,
  OrderStatus,
  requireAuth,
} from "@zayatickety/common";
import express, { Request, Response } from "express";
import { Order } from "../models/order";
import { OrderCancelledPublisher } from "../events/publishers/order-cancelled-publisher";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();

router.delete(
  "/api/orders/:orderId",
  requireAuth,
  async (req: Request, res: Response) => {
    const { orderId } = req.params;

    const order = await Order.findById(orderId).populate("ticket");

    if (!order) {
      throw new NoteFoundError();
    }
    if (order.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }
    order.status = OrderStatus.Cancelled;
    await order.save();

    new OrderCancelledPublisher(natsWrapper.client).publish({
      id: order._id.toString(),
      ticket: { id: order.ticket._id.toString() },
      version: order.version,
    });

    res.status(204).send(order);
  },
);

export { router as deleteOrderRouter };
