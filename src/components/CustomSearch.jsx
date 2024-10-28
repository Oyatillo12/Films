import * as React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import { useAxios } from '../hooks/useAxios';
import useDebounce from '../hooks/useDebounce';
import { useNavigate } from 'react-router-dom';
import { Snackbar } from '@mui/material';

export default function CustomSearch() {
  const [searchValue, setSearchValue] = React.useState('')
  const [searchData, setSearchData] = React.useState([])
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  const seerchWaiting = useDebounce(searchValue, 1000)

  function handleInput(e) {
    setSearchValue(e.target.value)
  }

  React.useEffect(() => {
    if (searchValue) {
      useAxios().get("/search/movie", { params: { query: seerchWaiting, } }).then(res => {
        setSearchData(res.data.results.map(item => {
          const data = {
            label: item.title,
            year: item.id
          }
          return data;
        }))
      })
    }

  }, [seerchWaiting])
  const user = JSON.parse(localStorage.getItem('user'))

  const handleChange = (a, b) => {
    user ? navigate(`/movie/${b.year}`) : setOpen(true);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Please Log in to watch this movie"
      />
      <Autocomplete
        onInput={handleInput}
        onChange={handleChange}
        className='w-[250px] !bg-[#252525e5] !text-white'
        freeSolo
        options={searchData}
        placeholder='Searching...'
      />
    </>
  )
}
