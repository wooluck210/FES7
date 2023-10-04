import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const expenseSlice = createSlice({
  name: 'expenseSlice',
  initialState: {
    // 사용자의 지출 목록을 관리합니다.
    expenseList: [{name: 'coffee', price: 5000}, {name: 'icecream', price: 1500}],
    income: 1000000
  },
  reducers: {
    // addExpenseAction ==> 액션 type의 이름입니다.
    // 사용자의 지출 내역을 store에 반영합니다.
    addExpenseAction: (currentSlice, action) => {
      // console.log('addExpenseAction')
      // slice의 expenseList에 접근하여 데이터를 수정합니다. 리듀서에서 타입에 따른 처리부분이다.
      currentSlice.expenseList.push(action.payload)

    },
    // 사용자의 수입을 store에 반영합니다.
    setIncomeAction: (currentSlice, action) => {
      console.log('setIncomeAction')
      currentSlice.income = action.payload
    }
  }
})
// 등록한 action을 디스패치에서 사용할 수 있도록 밖으로 내보냅니다.
export const { addExpenseAction, setIncomeAction } = expenseSlice.actions

// slice에서 생성한 reducer들을 외부로 내보냅니다.
export default expenseSlice.reducer