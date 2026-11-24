import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload
      const existingItem = state.cartItems.find((item) => item.id === product.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cartItems.push({ ...product, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.cartItems.find((product) => product.id === id)
      const nextQuantity = Number(quantity)

      if (item && Number.isFinite(nextQuantity) && nextQuantity >= 1) {
        item.quantity = Math.floor(nextQuantity)
      }
    },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions

export const selectCartItems = (state) => state.cart.cartItems

export const selectCartItemCount = (state) =>
  state.cart.cartItems.reduce((count, item) => count + item.quantity, 0)

export const selectCartTotal = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

export default cartSlice.reducer
