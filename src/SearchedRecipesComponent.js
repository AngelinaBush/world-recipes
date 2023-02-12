
function SearchedRecipesComponent({label, image, ingredients, calories, weight, fat, protein, carbohydrates, id}) {

    return (
        <div className="recipe-container">
            <div className="recipe-header">
                <h2>{label}</h2>
            </div>

            <div className="recipe-image">
                <img src={image} alt="food" width="300px" height="300px"/> 
            </div>

            <ul className="recipe-list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <div className="recipe-info"> 
                <div className="recipe-nutrition">
                    <h3>Nutrition Facts</h3>
                </div>

                <div className="info">
                    <div className="calories-weight">
                        <p className="text">Calories: {calories.toFixed()}</p>
                        <p className="text">Weight: {weight.toFixed()} gr.</p>
                    </div>

                    <div className="nutrients">
                        <p className="text">Fat: {fat.toFixed()} gr.</p>
                        <p className="text">Protein: {protein.toFixed()} gr.</p>
                        <p className="text">Carbohydrates: {carbohydrates.toFixed()} gr.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SearchedRecipesComponent;