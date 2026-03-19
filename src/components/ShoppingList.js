import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import { useState } from 'react'

function ShoppingList({ cart, updateCart }) {
  const [selectedValue, setSelectedValue] = useState('');
  let plantListFiltered = []
  if (selectedValue === '') {
    plantListFiltered = plantList;
  } else {
    plantListFiltered = plantList.filter((plant) => plant.category === selectedValue);
  }

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='shopping-list'>
      <Categories selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
			<ul className='plant-list'>
        {plantListFiltered.map(({ id, cover, name, water, light, price, descr }) => (
          <div className='plant-item-block' key={id}>
            <PlantItem
              cover={cover  }
              name={name}
              water={water}
              light={light}
              price={price}
              descr={descr}
            />
          <button onClick={() => addToCart(name, price)}>Ajouter</button>
          </div>
        ))}
			</ul>
		</div>
	)
}

export default ShoppingList

// filtrer la liste de plante affichée grâce au selectedValue du composant Categories
