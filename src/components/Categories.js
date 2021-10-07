import { plantList } from '../data/plantList';
import '../styles/Categories.css';

function Categories({setActiveCategory,activeCategory}){
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	);
    return(
        <div className='lmj-categories'>
           <select 
           value={activeCategory} 
           onChange={(e) => setActiveCategory(e.target.value)} 
           className='lmj-categories-select'> 
                {categories.map(category=>(
                        <option key={category} value={category}>{category}</option>
                    ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>    
            
        </div>
    )
}
export default Categories;