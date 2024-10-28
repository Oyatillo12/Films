import { ArrowBack } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProfilePage() {
    const navigate = useNavigate()
    return (
    <>
        <Button className='block !mt-10 !ml-10 !text-[20px]' onClick={() => navigate(-1)} variant='text' startIcon={<ArrowBack className='scale-150'/>}>Back</Button>
        <p className='text-center text-white text-[25px] mt-[80px]'>
            We are working on a new profile!
        </p>
    </>
  )
}

export default ProfilePage
