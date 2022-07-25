import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import loadingGif from "../assets/loading.gif"
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { clearNewsList, getNews } from '../features/newsSlice';

const News = () => {
  const dispatch = useDispatch();
  const {newsList, loading} = useSelector((state) => state.news);

  useEffect(()=> {
    dispatch(getNews());
    return () => {
      dispatch(clearNewsList());
    };
  }, [dispatch]);
  return (
    <div>
      {loading && ( <Box
      display= "flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      >
        <img src={loadingGif} alt="gif" width="90%" height="800px" />
      </Box>
      )}
     
     {!loading && (
      <Box
          xs={{ d: 'flex' }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
         {newsList?.map((item,index) => (
          
          <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
          <CardMedia
            component="img"
            height="250"
            image={item?.urlToImage}
            alt="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item?.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" href={item?.url} target="_blank">
              Detail
            </Button>
          </CardActions>
        </Card>
         ))} 
      </Box> )}
      

    </div>
  )
}

export default News