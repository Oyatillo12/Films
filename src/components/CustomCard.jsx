import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { IMG_URL } from '../hooks/useEnv';
import { useNavigate } from 'react-router-dom';

export default function CustomCard({ item }) {
   const navigate = useNavigate()
  return (
    <Card  className='!bg-[rgb(23,35,52)] !text-white' sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => navigate(`${item.id}`)}>
        <CardMedia
          className='!h-[350px] !w-[350px] !object-cover'
          component="img"
          height="140"
          image={`${IMG_URL}${item.poster_path}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => navigate(`${item.id}`)} size="small" color="primary">
          More
        </Button>
      </CardActions>
    </Card>
  );
}