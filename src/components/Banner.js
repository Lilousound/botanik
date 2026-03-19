import '../styles/Banner.css'
import Logo from "../assets/logo.png"
import PlantL from "../assets/plant.png"
import PlantR from "../assets/plant_logo.png"

function Banner() {
	return <div className='banner'>
      <img src={PlantL} alt='plant img' className='plant-img' />
      <div className='brand'>
        <img src={Logo} alt='Botanik' className='logo' />
        <h1 className='banner-title'>Botanik</h1>
        <img src={Logo} alt='Botanik' className='logo' />
      </div>
      <img src={PlantR} alt='plant img' className='plant-img' />
  </div>
}

export default Banner
