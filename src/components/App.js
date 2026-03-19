import { useState, useEffect } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'


function App() {
  const savedCart = localStorage.getItem('cart') // on récupère le panier sauvegardé dans le localStorage
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []) // on initialise le state du panier avec le panier sauvegardé ou un tableau vide si aucun panier n'est sauvegardé
  useEffect((() => { // à chaque fois que le panier change, on sauvegarde le panier dans le localStorage
    localStorage.setItem('cart', JSON.stringify(cart)) // on convertit le panier en chaîne de caractères pour le sauvegarder dans le localStorage
  }))

	return (
		<div>
			<Banner />
			<div className='layout-inner'>
				<ShoppingList cart={cart} updateCart={updateCart}/>
        <Cart cart={cart} updateCart={updateCart}/>
			</div>
			<Footer />
		</div>
	)
}

export default App
