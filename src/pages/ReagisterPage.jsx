import { Button } from '@mui/material'
import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import BgLogin from '../assets/images/login-bg.png'
import Logo from '../assets/images/nav-logo.svg'
import LoadingImg from '../assets/images/loading.png';
import toast, { Toaster } from 'react-hot-toast'


function LoginPage() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [userValue, setUserValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
    localStorage.setItem('users', JSON.stringify(users))


    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            user: userValue,
            password: passwordValue
        }

        if (passwordValue && userValue) {
            if (users.some(item => item.user == userValue)) {
                toast.error("User already exists")
            }
            else {
                setUsers([...users, data])
                setIsLoading(true)
                toast.success('Successfully registered ' + data.user)
                setTimeout(() => {
                    setIsLoading(false)
                    navigate('/login')
                }, 1000)
            }
        }
        else {
            toast.error("Please enter valid credentials")
        }
    }


    return (
        <div className=' flex'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='w-full relative'>
                <img src={BgLogin} alt='Login Background' className='object-cover absolute top-0 w-[100%] h-[100vh]' />
                <img className='z-50 absolute top-10 left-10' src={Logo} alt="Logo img" width={154} height={22} />
                <h2 className='absolute bottom-10 z-50 left-10 text-[50px] font-extrabold text-white w-[400px]'>SIGN UP <span className='title-login'>TO WATCH MOVIE</span></h2>
            </div>
            <div className='login-wrapper p-10 flex flex-col justify-center h-[100vh]'>
                <h2 className=' mb-4 text-[55px] font-bold text-white '>Create Account</h2>
                <p className='text-[15px] mb-3 font-bold text-white'>Sign up with email address</p>
                <form onSubmit={handleSubmit} autoComplete='off' className='w-[550px] p-10 flex flex-col'>
                    <input value={userValue} onChange={(e) => setUserValue(e.target.value)} name='user' className='!mb-4 py-4 px-4 rounded-lg text-[18px]  text-white bg-[#261046]' placeholder='New Name' type="text" />
                    <input autoComplete='off' value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} name='password' className='!mb-4 py-4 px-4 rounded-lg text-[18px] text-white bg-[#261046]' placeholder='New Password' type="password" />
                    <Button className={`submit-btn block font-bold !py-[13px] ${userValue && passwordValue ? "cursor-pointer" : "!cursor-not-allowed opacity-70"}`} variant='contained' type='submit'>{isLoading ? <img className='mx-auto h-[24.5px] scale-[3]' src={LoadingImg} alt="loading" height={24.5} /> : "Submit"}</Button>
                    <p className='text-[20xp] text-center text-white mt-4 '>do you have an account?  <Link to={'/login'} className='!text-blue-500 '>Sign in</Link></p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
