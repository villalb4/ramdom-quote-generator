import { setQuotes, setAllQuotes, setAuthorQuotes } from "../slice/quote";

export const getQuotes = () => {
  return async(dispatch, getState) => {
    //random quote
    const response = await fetch('https://dummyjson.com/quotes/random')
    const data = await response.json()
    dispatch(setQuotes(data))
  }
}

export const getAuthorQuotes = (name) => {
  return async(dispatch, getState) => {
    //all quotes
    const allQuotes = await fetch('https://dummyjson.com/quotes?limit=100')
    const parse = await allQuotes.json()
    dispatch(setAllQuotes(parse))
    
    //buscando el autor
    const stateAllQuotes = getState().quoteSlice.allQuotes
    const quotesPerAurhor = stateAllQuotes.quotes.filter(e => e.author === name)
    dispatch(setAuthorQuotes(quotesPerAurhor))
  }
}

