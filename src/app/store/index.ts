import { configureStore } from '@reduxjs/toolkit'
import accountantSlice from 'modules/accountant/store'
import authSlice from 'modules/auth/store/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    accountant: accountantSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
