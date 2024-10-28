import * as React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import { useAxios } from '../hooks/useAxios';
import useDebounce from '../hooks/useDebounce';
import { useNavigate } from 'react-router-dom';

export default function CustomSearch() {
  const [searchValue, setSearchValue] = React.useState('')
  const [searchData, setSearchData] = React.useState([])
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



  return (
    <Autocomplete
      onInput={handleInput}
      onChange={(a, b) => navigate(`/movie/${b.year}`)}
      className='w-[250px] !bg-[#252525e5] !text-white'
      freeSolo
      options={searchData}
      placeholder='Searching...'
    />
  )
}
