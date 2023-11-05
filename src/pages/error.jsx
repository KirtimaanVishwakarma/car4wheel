import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../utils/main';

const ErrorPage = () => {
  return (
    <Main>
    <div className='text-center my-20 px-4'>
        <div className='leading-8'>
        <h1 className='font-bold text-4xl'>Opps, Page Not Found</h1>
        <p className='my-4'>Something went wrong, web page that is displayed to the user when the server cannot find the requested page.</p>
        </div>
        <div className='my-10'>
            <img src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/404.svg" alt="error-img" className='m-auto' />
        </div>
        <div>
            <Link to="/" className='p-4 bg-green-g1 rounded-lg hover:bg-green-300 text-white-0 font-semibold'>Back to Home</Link>
        </div>
    </div>
    </Main>
  )
}

export default ErrorPage;