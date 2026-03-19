import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
  const validateCart = () => {
    alert('Merci pour votre achat! 🌿')
  }
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
  useEffect(() => {
      document.title = `Botanik: ${total}€ d'achats`
  }, [total])

	return isOpen ? (
		<div className='cart'>
			<button
				className='cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer ✘
			</button>
			{cart.length > 0 ? (
				<div>
					<h2 className='cart-title'>Panier</h2>
					<ul className='cart-ul'>
						{cart.map(({ name, price, amount }, index) => (
							<div className='item-list' key={`${name}-${index}`}>
								<span className='item-name'>{name}:</span> <span className='item-price'>{price} €</span> <span className='item-amount'>x {amount}</span>
							</div>
						))}
					</ul>
          <div className='bottom-cart'>
            <h3>Total: {total} €</h3>
            <button className='button-cart validate' onClick={() => validateCart([])}>Valider le panier</button>
            <button className='button-cart empty' onClick={() => updateCart([])}>Vider le panier</button>
          </div>
				</div>
			) : (
				<div className='cart-title'>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='cart-closed'>
			<button
				className='cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
