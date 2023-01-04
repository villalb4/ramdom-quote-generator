import React, {useEffect} from 'react'
import './AllQuotesAuthor.css'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAuthorQuotes } from '../../redux/thunk/quote'

function AllQuotesAuthor() {

  const dispatch = useDispatch()
  
  let { name } = useParams()
  
  useEffect(() => {
    dispatch(getAuthorQuotes(name))
  }, [name, dispatch])
  
  const authorQuotes = useSelector(e => e.quoteSlice.authorQuotes)

  return (
    <div className='allQuotesAuthor_component'>
      <div className='allQuotesAuthor_divName'>
        <span>{authorQuotes[0]?.author}</span>
      </div>
      {authorQuotes?.map((e,i) => {
        return(
          <div className='qoute_divContent allQuotesAuthor' key={i}>
            <div className='quote_divQuote'>
              <p className='quote_text'>{`“${e.quote}”`}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AllQuotesAuthor