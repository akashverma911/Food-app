import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Dish() {
  let URL = "https://api.spoonacular.com/recipes/";
  let params = useParams();
  URL +=
    params.id +
    "/information?apiKey=97f13c66cd1c4ce2bacbcba41b1483e7&includeNutrition=true";
  console.log(URL);
  const [summary, setSummary] = useState("");
  const [ing, setIng] = useState([]);
  const [ins, setIns] = useState("");
  const [nut, setNut] = useState([]);
  const [img, setImg] = useState("");

  const listIng = ing.map((item) => <li key={item.id}>{item.name}</li>);
  const listNut = nut.map((item) => (
    <li key={item.key}>
      {item.name} - {item.amount}
      {item.unit}
    </li>
  ));

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setSummary(response.data.summary);
        setIng(response.data.extendedIngredients);
        setIns(response.data.instructions);
        setNut(response.data.nutrition.nutrients);
        setImg(response.data.image);
        console.log(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Grid container sx={{ p: 3 }} spacing={2}>
        <Grid item md={12}>
          <img src={img} alt="new" width="300" />
        </Grid>
        <Grid item md={8} xs={12}>
          <Typography variant="h6" gutterBottom>
            Recipe details
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <div dangerouslySetInnerHTML={{ __html: summary }}></div>
          </Typography>
        </Grid>

        <Grid item md={4} xs={12}>
          <Typography variant="h6" gutterBottom>
            Ingredients
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {listIng}
          </Typography>
        </Grid>

        <Grid item md={8} xs={12}>
          <Typography variant="h6" gutterBottom>
            Instructions
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {ins}
          </Typography>
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography variant="h6" gutterBottom>
            Nutrients
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {listNut}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
