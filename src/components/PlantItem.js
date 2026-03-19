import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName, plantDescr) {
	alert(`${plantName}: \n\n${plantDescr}`)
}

function PlantItem({ cover, name, water, light, descr, price }) {
	return (
		<li className='plant-item' onClick={() => handleClick(name, descr, price)}>
			<img className='plant-item-cover' src={cover} alt={`${name} cover`} />
      <div className='plant-name-price'>
        <span className='plant-name'>{name}</span>
        {price} €
      </div>
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
