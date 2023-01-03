import React from 'react'
import Header from '../components/Header/Header'
import Quote from '../components/Quote/Qoute'
import Author from '../components/Author/Author'

function home() {
  return (
    <div>
      <Header />
      <Quote />
      <Author />
    </div>
  )
}

export default home