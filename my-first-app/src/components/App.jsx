import painting from '../painting.json'
import { Container } from './Container/Container';
import { GalleryList } from "./GalleryList/GalleryList";
import recipe from '../recipe.json';
import { Recipe } from './Recipe/Recipe'
 

export const App = () => {
  return (
    <>
      {recipe.map(({name, image, time, servings, calories}) => {
        return (
        <Recipe 
          key={name}
          name={name}
          image={image}
          time={time}
          servings={servings}
          calories={calories}
          />
        )
      })}
      

      
      {/* <Container title="Title">
        <GalleryList items={painting} />
      </Container> */}
  </>
  );
};