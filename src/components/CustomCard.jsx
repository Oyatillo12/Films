import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { IMG_URL } from '../hooks/useEnv';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useLocation, useNavigate } from 'react-router-dom';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch } from 'react-redux';
import { ACTION } from '../redux/actions';
import { Badge, IconButton } from '@mui/material';

export default function CustomCard({ item }) {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const liked = pathname == '/' ? ACTION.nowPlaying_like : pathname == '/popular' ? ACTION.popular_like : pathname == '/toprated' ? ACTION.topRated_like : ACTION.coming_like
  
  const dispatch = useDispatch()
  return (
    <Card className='!bg-[rgb(23,35,52)] !text-white' sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => navigate(`/${item.id}`)}>
        <CardMedia
          className='!h-[350px] !w-[350px] !object-cover'
          component="img"
          height="140"
          image={`${IMG_URL}${item.poster_path}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom className='line-clamp-1' variant="h5" component="div">
            {item.title}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions className='flex items-center justify-between'>
        <Button onClick={() => navigate(`/${item.id}`)} size="small" color="primary">
          More
        </Button>
        <div className='flex items-center space-x-4'>
          <IconButton onClick={() => dispatch({ type:liked, payload: item.id })}
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge color="error">
              <FavoriteIcon  className={`scale-[1.2] ${item.isLiked ? "text-red-500" : ''}`} />
            </Badge>
          </IconButton>
          <BookmarkIcon className='scale-[1.2]' />
        </div>

      </CardActions>
    </Card>
  );
}