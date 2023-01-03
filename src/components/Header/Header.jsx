import './Header.css'
import autorenew from '../../assets/autorenew.svg'
import { getQuotes } from '../../redux/thunk/quote'
import { useDispatch } from 'react-redux'

function Header() {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(getQuotes())
  }

  return (
    <header>
      <div className='header_divContent'>
        <button className='header_randomButton' onClick={handleClick}>
          random
          <img className='header_autorenewIcon' src={autorenew} alt="" />
        </button>
      </div>
    </header>
  )
}

export default Header