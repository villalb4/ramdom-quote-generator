import { setQuotes, setAllQuotes } from "../slice/quote";

export const getQuotes = () => {
  return async(dispatch, getState) => {
    //random quote
    const response = await fetch('https://dummyjson.com/quotes/random')
    const data = await response.json()
    dispatch(setQuotes(data))

    //all quotes
    const allQuotes = await fetch('https://dummyjson.com/quotes?limit=100')
    const parse = await allQuotes.json()
    dispatch(setAllQuotes(parse))
  }
}
