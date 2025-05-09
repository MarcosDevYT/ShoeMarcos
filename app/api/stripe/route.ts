import prisma from "@/lib/db";
import { redis } from "@/lib/redis";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const body = await req.text();

  const signature = (await headers()).get("Stripe-Signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_SECRET_WEBHOOK as string
    );
  } catch (error: unknown) {
    return new Response("Webhook Error", {
      status: 400,
      statusText: (error as Error).message,
    });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;

      await prisma.order.create({
        data: {
          amount: session.amount_total as number,
          status: session.status as string,
          userId: session.metadata?.userId as string,
        },
      });

      await redis.del(`cart-${session.metadata?.userId}`);
      break;
    }
    default: {
      console.log("Unhandled event type:", event.type);
      break;
    }
  }

  return new Response("Successful WebHook", { status: 200 });
}
