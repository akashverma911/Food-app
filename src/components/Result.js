import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const URL = "https://api.spoonacular.com/recipes/";

export default function Result(props) {
  const boxes = props.foods.map((item, index) => {
    return (
      <Grid key={item.id} xs={6} md={4}>
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia
            sx={{ height: 150 }}
            image={item.image}
            title={item.title}
          />

          <CardContent>
            <Link href={"dish/" + item.id} color="inherit">
              <Typography component="div">{item.title}</Typography>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return <Grid container>{boxes}</Grid>;
}
