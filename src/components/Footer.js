import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
  const [inputValue, setInputValue] = useState('')

  function handleInput(e) {
    setInputValue(e.target.value)
  }
  function handleBlur() {
    if(!inputValue.includes('@')){
      alert("L'email doit contenir un '@' !")
    }
  }

	return (
		<footer className='footer'>
       <div className='footer-container'>
          <p className="footer-text">
              🌿🌱🌵 Botanik, votre boutique en ligne dédiée aux plantes d'intérieur et d'extérieur. Nous sélectionnons des plantes de qualité pour égayer votre quotidien. 🌿🌱🌵
          </p>
          <div className='footer-elem'>
            <p>Pour les passionnés, laissez-nous votre mail:</p>
            <input className='footer-input' type='text'
              name='my_input'
              placeholder="Tapez votre email"
              value={inputValue}
              onChange={handleInput}
              onBlur={handleBlur}
            />
            <button onClick={() => alert(inputValue)}>Valider</button>
          </div>
      </div>
      <p className='copyright'>© {new Date().getFullYear()} Botanik. Tous droits réservés.</p>

		</footer>
	)
}

export default Footer
