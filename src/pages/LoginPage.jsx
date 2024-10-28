import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BgLogin from '../assets/images/login-bg.png'
import Logo from '../assets/images/nav-logo.svg'
import LoadingImg from '../assets/images/loading.png';
import toast, { Toaster } from 'react-hot-toast'


function LoginPage() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [userValue, setUserValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const users = JSON.parse(localStorage.getItem('users')) || []

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            user: userValue,
            password: passwordValue
        }
        if (userValue && passwordValue) {
            if (users.length) {
                if (users.some(u => u.user === data.user && u.password === data.password)) {
                    setIsLoading(true)
                    toast.success('Enjoy watching movies ' + data.user)
                    localStorage.setItem('user', JSON.stringify(data))
                    setTimeout(() => {
                        setIsLoading(false)
                        navigate('/')
                    }, 1500)
                }
                else {
                    toast.error("user not found - " + data.user)
                }
            }
            else {
                if (data.user == "admin" && data.password == "123") {
                    setIsLoading(true)
                    toast.success('Welcome Admin')
                    localStorage.setItem('user', JSON.stringify(data))
                    setTimeout(() => {
                        setIsLoading(false)
                        navigate('/')
                    }, 1500)
                }
                else {
                    toast.error("user not found - " + data.user)
                }
            }
        }
        else {
            toast.error("Please enter valid credentials")
        }
        setUserValue("")
        setPasswordValue("")
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
                <h2 className='absolute bottom-10 z-50 left-10 text-[50px] font-extrabold text-white w-[400px]'>SIGN IN <span className='title-login'>TO WATCH MOVIE</span></h2>
            </div>
            <div className='login-wrapper p-10 flex flex-col justify-center h-[100vh]'>
                <h2 className=' mb-4 text-[77px] font-bold text-white '>SIGN IN</h2>
                <p className='text-[15px] mb-3 font-bold text-white'>Sign in with email address</p>
                <form onSubmit={handleSubmit} autoComplete='off' className='w-[550px] p-10 flex flex-col'>
                    <input value={userValue} onChange={(e) => setUserValue(e.target.value)} className='!mb-4 py-4 px-4 rounded-lg text-[18px]  text-white bg-[#261046]' placeholder='Username' type="text" />
                    <input autoComplete='off' value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} className='!mb-4 py-4 px-4 rounded-lg text-[18px] text-white bg-[#261046]' placeholder='Password' type="password" />
                    <Button className={`submit-btn block font-bold !py-[13px] ${userValue && passwordValue ? "cursor-pointer" : "!cursor-not-allowed opacity-70"}`} variant='contained' type='submit'>{isLoading ? <img className='mx-auto h-[24.5px] scale-[3]' src={LoadingImg} alt="loading" height={24.5} /> : "Submit"}</Button>
                    <p className='text-[20xp] text-center text-white mt-4 '>don’t have an account?  <Link to={'/register'} className='!text-blue-500 '>Create account</Link></p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
