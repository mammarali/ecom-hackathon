import { CartProduct } from "@/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { urlForImage } from "../../../sanity/lib/image";

export interface cartState {
  items: Array<CartProduct>;
  totalAmount: number;
  totalQuantity: number;
  isLoading: boolean;
  error: any;
}

const initialState: cartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  isLoading: false,
  error: null,
};

export const fetchData = createAsyncThunk(
  "cart/fetchdata",
  async (userId: string) => {
    const res = await fetch(`/api/cart/${userId}`);

    if (!res.ok) {
      console.log("Failed to fetch data");
    }

    const data = await res.json();

    return data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state: cartState,
      actions: PayloadAction<{ product: CartProduct; quantity: number }>
    ) => {
      console.log(actions.payload.product.totalPrice);
      const newItem = actions.payload.product;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      state.totalQuantity = state.totalQuantity + actions.payload.quantity;
      state.totalAmount =
        state.totalAmount +
        actions.payload.quantity * actions.payload.product.price;

      if (!existingItem) {
        const totalPrice = newItem.price * actions.payload.quantity;
        state.items.push({
          ...newItem,
          //@ts-ignore
          image: urlForImage(newItem.image[0]).url(),
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

  // ---------------- extraReducers Func End ----------------------------
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchData.fulfilled, (state, action) => {
      const { cartItems, totalQuantity, totalAmount } = action.payload;
      state.items = cartItems;
      state.totalAmount = totalAmount;
      state.totalQuantity = totalQuantity;
      state.isLoading = false;
    });

    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
  // ---------------- extraReducers Func End ----------------------------
});

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
