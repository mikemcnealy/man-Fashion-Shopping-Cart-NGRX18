import { createAction } from "@ngrx/store";

export const addItem = createAction('add item to cart');
export const removeItem = createAction('remove item from cart');
