import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuanity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(state, action.payload);
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuanity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      console.log("totalItems" + state.totalQuanity);
      console.log("state-cartitems" + JSON.stringify(state.cartItems));
      console.log("new-item" + newItem);
    },
    deleteItem:(state,action)=>{

         const id= action.payload
         const existingItem=state.cartItems.find(item=>item.id===id)
         console.log("existingItem"+ JSON.stringify(existingItem))


         if(existingItem){
          console.log(state.cartItems)
          state.cartItems=state.cartItems.filter(items=>items!==existingItem)
          console.log(state.cartItems)
          state.totalQuanity=state.totalQuanity -existingItem.quantity
         }
         state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0
        );
    },
    clearCart:(state)=>{
      state.cartItems=[]
      state.totalQuanity=0
      state.totalAmount=0
      console.log("carts",state.cartItems)
    }
  },
});

export const cartActions = cartSlice.actions;
console.log(cartActions);
export default cartSlice.reducer;
