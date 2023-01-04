import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  quotes : [],
  allQuotes: [],
  authorQuotes: [],
}

const quoteSlice = createSlice({
  name: 'quotes',
  initialState: initialstate,
  reducers : {
    setQuotes : function(state, action) {
      state.quotes = action.payload
    },
    setAllQuotes : function(state, action) {
      state.allQuotes = action.payload
    },
    setAuthorQuotes: function(state, action) {
      state.authorQuotes = action.payload
      // console.log(state.authorQuotes)
    },
  }
})

export const { setQuotes, setAllQuotes,setAuthorQuotes } = quoteSlice.actions
export default quoteSlice.reducer
