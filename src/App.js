import { useState } from 'react';
import './App.css';
import { moviesData } from './moviesData';
import MoviesList from './components/listMovies/MoviesList';
import AddMovie from './components/addMovie/AddMovie';
import FilterTitle from './components/filterTitle/FilterTitle';
import FilterByRating from './components/filterRate/FilterRate'
function App() {
  //console.log(moviesData)
  //1- Declaration state avec 2 element [le state et la fonction]) qui va hebergé mon tableau
  //2- importation de mon tableau dans useState, puis en le met dans mon state
  const [movies, setMovies]=useState(moviesData)

  //use state du filter par titre
  const [researchTitle, setResearchTitle] = useState("")

  //fonction add elle rajout un nouveau film a la fin du tableau
  const add = (newMovie) => {
    setMovies([...movies, newMovie])
  }
  
  //console.log("movies:", movies);
  //23.31
  return (
    <div className="App">
      {/** titre de la page */}
    <h1>Movie App</h1>

    <FilterTitle researchTitle={researchTitle} setResearchTitle={setResearchTitle}/>

    {/*******Filter Rate************/}
    <FilterByRating/>


   {/*lappel du composant qui va add Movie*/} 
   <AddMovie add={add}/>


   {/*lappel du composant moviesList: mapping (parcourir le tableau un  a un*/} 
    <MoviesList movies={movies} researchTitle={researchTitle}/>
  </div>

  );
    
  
}

export default App;
