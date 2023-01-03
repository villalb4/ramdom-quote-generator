import { setQuotes } from "../slice/quote";

export const getQuotes = () => {
  return async(dispatch, getState) => {
    const response = await fetch('https://dummyjson.com/quotes/random')
    const data = await response.json()
    dispatch(setQuotes(data))
  }
}
