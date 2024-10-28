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
import { useNavigate } from 'react-router-dom';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Badge, IconButton } from '@mui/material';

export default function CustomCard({ item }) {
  const navigate = useNavigate()
  const [changeImg, setChangeImg] = React.useState(false)

  return (
    <Card className='!bg-[rgb(23,35,52)] !text-white' sx={{ maxWidth: 270 }}>
      <CardActionArea onClick={() => navigate(`/movie/${item.id}`)}>
        <div className='w-[270px] !h-[270px] relative'>
          <CardMedia
            onMouseEnter={() =>  item.backdrop_path && setChangeImg(true)}
            onMouseLeave={() => item.backdrop_path && setChangeImg(false)}

            className={`!h-full !w-full absolute !object-cover duration-300 ${changeImg ? "left-[-100%]" : "left-0"}`}
            component="img"
            height="140"
            image={`${IMG_URL}${item.poster_path}`}
            alt={item.title}
          />
          <CardMedia
            onMouseEnter={() => item.backdrop_path &&  setChangeImg(true)}
            onMouseLeave={() => item.backdrop_path && setChangeImg(false)}
            className={`!h-full !w-full absolute !object-cover duration-300 ${changeImg ? "right-0" : "right-[-100%]"}`}
            component="img"
            height="140"
            image={`${IMG_URL}${item.backdrop_path}`}
            alt={item.title}
          />
        </div>
        <CardContent>
          <Typography gutterBottom className='line-clamp-1' variant="h5" component="div">
            {item.title}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions className='flex items-center justify-between'>
        <Button onClick={() => navigate(`/movie/${item.id}`)} size="small" color="primary">
          More
        </Button>
        <div className='flex items-center space-x-4'>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge color="error">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          <BookmarkIcon className='scale-[1.2]' />
        </div>

      </CardActions>
    </Card>
  );
}