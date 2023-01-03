import React from 'react'
import './AllQuotesAuthor.css'
import { useSelector } from 'react-redux'

function AllQuotesAuthor() {

  const authorQuotes = useSelector(e => e.quoteSlice.allQuotes)

  return (
    <div className='allQuotesAuthor_component'>
      <div className='allQuotesAuthor_divName'>
        <span>{authorQuotes[0].author}</span>
      </div>
      {authorQuotes.map((e,i) => {
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