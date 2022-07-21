import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, isLoading } = useGlobalContext();

  if (isLoading === true) {
    return <Loading />;
  }
  if (cocktails === null) {
    return(
      <h2 className="section-title">no cocktails matched your search criteria</h2>
    )
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail, index) => {
          return <Cocktail key={index} cocktail={cocktail}/>;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
