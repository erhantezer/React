import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid,Container } from "@mui/material";
// import { Container } from "@mui/system";
import data from "../data";

 const CardsGrid = () => {
  
  return (
    <Container>
      <Typography variant="h4" align="center" m={4} color="error">
        CARDS & GRIDS
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {data.map((item) => {
          const { id, name, text, img } = item;
          return (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={img}
                    alt={name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
  
}
export default CardsGrid;