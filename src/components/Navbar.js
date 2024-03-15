import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
function Navbar() {
    return (
        <div className='flex justify-center' style={{ backgroundColor: '#4A154B' }}>

            <div>
                <div className='flex justify-center basis-1/2'>
                    <img className='py-3 w-36 px-3 h-20' alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9tzQsHIFEaLJMdusDpYGRlaNQq9lthKyvg&usqp=CAU' />
                    <div className='px-3 py-7 text-white'>Features <ArrowDropDownIcon /></div>
                    <div className='px-3 py-7 text-white'>Solutions <ArrowDropDownIcon /></div>
                    <div className='px-3 py-7 text-white  hover:underline'><a href='https://slack.com/intl/en-in/enterprise'>Enterprise </a> </div>
                    <div className='px-3 py-7 text-white'>Resources <ArrowDropDownIcon /></div>
                    <div className='px-3 py-7 text-white  hover:underline'><a href='https://slack.com/intl/en-in/pricing'>Pricing </a></div>
                </div>
            </div>

            <div className='flex justify-center basis-1/2'>
                <div className='text-white px-3 py-7 text-2xl'><SearchIcon /></div>
                <div className='text-white px-3 py-8 hover:underline'><a href='https://slack.com/signin'>Sign In</a></div>
                <div className='text-center py-5 px-4'>   <button className='rounded-sm text-white border-2 border-white h-10 hover:border-4 mt-2'><a href='https://slack.com/intl/en-in/contact-sales'>TALK TO SALES</a></button> </div>
                <div className='text-center py-5 px-4 text-bold' style={{ color: '#4A154B' }}><button className='rounded-sm bg-white border-4 border-white h-10 hover:border-2 mt-2 text-center text-bold'><a href='https://slack.com/get-started#/createnew'>TRY FOR FREE</a></button></div>
            </div>
        </div>
    )
}

export default Navbar
