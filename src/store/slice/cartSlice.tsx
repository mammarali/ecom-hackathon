import { CartProduct } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
  items: Array<CartProduct>;
  totalAmount: number;
  totalQuantity: number;
}

const initialState: cartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      actions: PayloadAction<{ product: CartProduct; quantity: number }>
    ) => {
      const newItem = actions.payload.product;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      state.totalQuantity += actions.payload.quantity;
      state.totalAmount +=
        actions.payload.quantity * actions.payload.product.price;

      if (!existingItem) {
        const totalPrice = newItem.price * actions.payload.quantity;
        state.items.push({
          ...newItem,
          quantity: actions.payload.quantity,
          totalPrice,
        });
      } else {
        const totalPrice =
          existingItem.totalPrice +
          existingItem.price * actions.payload.quantity;
        existingItem.quantity += actions.payload.quantity;
        existingItem.totalPrice = totalPrice;
      }
    },
    removeFromCart: (state, actions: PayloadAction<string>) => {
      const productID = actions.payload;
      state.items = state.items.filter((item) => item._id !== productID);
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    decrementCartProduct(state, actions: PayloadAction<string>) {
      const Product = actions.payload;
      const existingItem = state.items.find((item) => item._id === Product);
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - existingItem?.price!;
      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== Product);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price;
      }
    },
    clearCart: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
