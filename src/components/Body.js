import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import HttpsIcon from '@mui/icons-material/Https';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import HolidayVillage from '@mui/icons-material/HolidayVillage';
function Body() {
    return (
        <div>
            <div className='flex '>
                <div className='absolute left-56'><ApartmentIcon />11</div>
                <div className='absolute right-56'><HolidayVillage />12</div>
            </div>
            <div className='flex justify-center text-4xl font-bold py-4'>Teams large and small rely on Slack</div>
            <div className='flex '>
                <div className='absolute left-36'><ShowChartIcon />5</div>
                <div className='text-center absolute left-96 text-xl'>Slack securely scales up to support collaboration at the world's biggest companies.</div>
                <div className='absolute right-36'><HandshakeIcon />9</div>
            </div>
            <div className='h-14'></div>
            <div className='flex '>
                <div className='absolute left-56'><HttpsIcon />27</div>
                <div className='rounded-lg'><button className='rounded-lg font-bold text-white absolute left-1/3 h-10 w-72 hover:bg-black-800' style={{ backgroundColor: '#4A154B' }}>MEET SLACK FOR ENTERPRISE</button></div>

                <div className='rounded-lg'><button className='rounded-lg font-bold bg-white-500 hover:border-4 absolute right-1/3 h-10 border-2 border-black' style={{ color: '#4A154B' }}>TALK TO SALES</button></div>
                <div className='absolute right-56'><HolidayVillageIcon />8</div>
            </div>
            <div className='h-24'></div>

            <div className='flex'>
                <div className='flex basis-1/3 justify-center'><span className='text-7xl font-bold' style={{ color: '#4A154B' }}>85%</span></div>
                <div className='flex basis-1/3 justify-center'><span className='text-7xl font-bold' style={{ color: '#4A154B' }}>86%</span></div>
                <div className='flex basis-1/3 justify-center'><span className='text-7xl font-bold' style={{ color: '#4A154B' }}>88%</span></div>
            </div>
            <div className='flex'>
                <div className='flex basis-1/3 justify-center'><span className='text-xl font-bold px-20' >of users say that Slack has improved communication*</span></div>
                <div className='flex basis-1/3 justify-center'><span className='text-xl font-bold px-20'>feel that their ability to work remotely has improved*</span></div>
                <div className='flex basis-1/3 justify-center'><span className='text-xl font-bold px-20'>feel more connected to their teams*</span></div>
            </div>
            <div className='h-36'></div>
        </div>
    )
}

export default Body
