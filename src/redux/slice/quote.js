import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  quotes : []
}

const quoteSlice = createSlice({
  name: 'quotes',
  initialState: initialstate,
  reducers : {
    setQuotes : function(state, action) {
      state.quotes = action.payload
    }
  }
})

export const { setQuotes } = quoteSlice.actions
export default quoteSlice.reducer
