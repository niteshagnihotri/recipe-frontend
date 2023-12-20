import React from "react";
import RecipeCardComponent from "./recipe.card";

const RecipesComponent = ({ data }: any) => {
  return (
    <div>
      {data && (
        <div className="grid grid-cols-3 justify-items-stretch gap-16">
          {data &&
            data.map((recipe: any) => {
              let imageUrl = recipe?.images[0]?.data;
              return (
                <RecipeCardComponent
                  key={recipe._id}
                  id={recipe._id}
                  title={recipe?.title}
                  image={imageUrl}
                  date_created={recipe?.date_created}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default RecipesComponent;
