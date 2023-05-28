import Result from "./Result";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";

const SEARCHAPI =
  "https://api.spoonacular.com/recipes/complexSearch?&apiKey=97f13c66cd1c4ce2bacbcba41b1483e7&query=";
function Home() {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");

  const changeTheSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearchedMovies = () => {
    console.log(SEARCHAPI + search);
    axios
      .get(SEARCHAPI + search)
      .then((response) => {
        console.log(response.data.results);
        setFoods(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setFoods([]);
    getSearchedMovies();
  }, [search]);

  return (
    <div className="container">
      <TextField
        sx={{ mb: 4 }}
        id="outlined-basic"
        label="Search"
        value={search}
        onChange={changeTheSearch}
        color="primary"
      />

      {foods.length === 0 ? <div> Loading... </div> : <Result foods={foods} />}
    </div>
  );
}

export default Home;
