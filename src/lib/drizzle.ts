import { integer, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/node-postgres';
export const cartTableDrizzle = pgTable("cart",{
    //@ts-ignore
    product_id:varchar("product_id").notNull(),
    quantity:integer("quantity").notNull(),
    //@ts-ignore
    user_id:varchar("user_id",{lenght:255}).notNull(),
    price:integer("price").notNull()
});

export type  typeOfCartTable = InferModel<typeof cartTableDrizzle>;

export const db =drizzle(sql);