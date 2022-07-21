import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { Id } = useParams();

  const [singleCocktail, setSingleCocktail] = useState(null);
  const getSingleCocktail = async () => {
    const response = await fetch(url + Id);
    const data = await response.json();
    console.log(data.drinks[0]);
    setSingleCocktail(data.drinks[0]);
  };
  useEffect(() => {
    getSingleCocktail();
  }, []);
  if (!singleCocktail) {
    return <Loading />;
  }
  const {
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strDrinkThumb,
  } = singleCocktail;

  return (
    <>
      {singleCocktail && (
        <section className="section cocktail-section">
          <Link to={"/"} className="btn btn-primary">
            back home
          </Link>
          <h2></h2>
          <div className="drink">
            <img src={strDrinkThumb} alt={strDrink} />
            <div className="drink-info">
              <p>
                <span className="drink-data">name :</span>
                {strDrink}
              </p>
              <p>
                <span className="drink-data">Category :</span>
                {strCategory}
              </p>
              <p>
                <span className="drink-data">Info :</span>
                {strAlcoholic}
              </p>
              <p>
                <span className="drink-data">Glass :</span>
                {strGlass}
              </p>
              <p>
                <span className="drink-data">Instuctions :</span>
                {strInstructions}
              </p>
              <p>
                <span className="drink-data">Ingredients :</span>
                <span> {strIngredient1}</span>
                <span> {strIngredient2}</span>
                <span> {strIngredient3}</span>
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleCocktail;
