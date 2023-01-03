import React from 'react'
import './Author.css'
import { useSelector } from 'react-redux'
import arrow from '../../assets/arrow.svg'

function Author() {

  const action = useSelector(e => e.quoteSlice.quotes)

  return (
    <div className='author_component'>
      <div className='author_divContent'>
        <div className='author_divName'>
          <span className='author_name'>{action.author}</span>
          <span className='author_historical'>historical figure</span>
        </div>
        <div className='author_divImg'>
          <img className='author_arrow' src={arrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Author