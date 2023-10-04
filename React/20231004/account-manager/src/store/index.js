import {configureStore} from '@reduxjs/toolkit'
import expenseSlice from './expense/expense-slice'

// configure는 여러 리듀서를 통합하는 역할
const store = configureStore({
  reducer: {
    expense : expenseSlice
  }
})

export default store