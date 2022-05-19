import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

import './advice.style.scss'

import icon_dice from '../../images/icon-dice.svg'

const Advice = () => {
  const [current_advice, setCurrentAdvice] = useState()
  const button_generate_advice = useRef()

  useEffect(() => {
    genAdvice()
  }, [])

  const genAdvice = async () => {
    button_generate_advice.current.disabled = true
    button_generate_advice.current.classList.add('wait')

    while(true) {
      const new_advice = await axios.get('https://api.adviceslip.com/advice')

      if(!current_advice || new_advice.data.slip.id != current_advice.id) {
        setCurrentAdvice(new_advice.data.slip)
        break;
      }
    }

    button_generate_advice.current.disabled = false
    button_generate_advice.current.classList.remove('wait')
  }

  // * return
  return (
    <div className='advice'>
      <p>{ `ADVICE #${ current_advice?.id }` }</p>
      <h1>{ current_advice?.advice }</h1>
      <div className='divider'>
        <div className="pattern"></div>
      </div>
      <button ref={ button_generate_advice } onClick={() => genAdvice()}>
        <img src={ icon_dice } alt='dice'/>
      </button>
    </div>
  )
}

export default Advice
