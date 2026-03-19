import '../styles/Categories.css'
import { plantList } from '../datas/plantList'

function Categories({ selectedValue, setSelectedValue }) {
  const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return <div className='categories'>
          <h2 className="sub-title">Botanik : Le bonheur est dans le pot <em className='sub-italic'>(de fleurs)</em>. 🌺</h2>
          <div className='text-categories' >
            <p>Achetez en ligne la plante dont vous rêvez</p>
            <div>
              Catégorie:
              <select
                name="cat-select"
                id="cat-select"
                className="categories-select"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                >
                <option value="">-- Toutes catégories --</option>
                {categories.map((cat) => ( // pour chaque catégorie, on affiche une option dans le select
                  <option value={cat} key={cat + 1}>{cat}</option>
              ))}
              </select>
            </div>
          </div>

          </div>
}

export default Categories
