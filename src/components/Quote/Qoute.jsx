import { useEffect } from 'react'
import './Quote.css'
import { useSelector, useDispatch } from 'react-redux'
import { getQuotes } from '../../redux/thunk/quote'


function Qoute() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getQuotes())
  }, [])

  const action = useSelector(e => e.quoteSlice.quotes)

  return (
    <div className='qoute_component'>
      <div className='qoute_divContent'>
        <div className='quote_divQuote'>
          <p className='quote_text'>
            {
              action.quote === undefined
                ? null 
                : `“${action.quote}”`
            }</p>
        </div>
      </div>
    </div>
  )
}

export default Qoute