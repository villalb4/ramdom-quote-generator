import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  quotes : [],
  allQuotes: []
}

const quoteSlice = createSlice({
  name: 'quotes',
  initialState: initialstate,
  reducers : {
    setQuotes : function(state, action) {
      state.quotes = action.payload
    },
    setAllQuotes : function(state, action) {
      const allApi = action.payload
      const quotesPerAurhor = allApi.quotes.filter(e => e.author === state.quotes.author)
      state.allQuotes = quotesPerAurhor
    }
  }
})

export const { setQuotes, setAllQuotes } = quoteSlice.actions
export default quoteSlice.reducer
