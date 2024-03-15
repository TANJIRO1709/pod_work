import React from 'react'
import EastIcon from '@mui/icons-material/East';
function Component3() {
    return (
        <div className='flex justify-center h-96' style={{ backgroundColor: '#f4eee0' }}>
            <div style={{ backgroundColor: '#f4eee0' }}>
                <video className='px-24 py-3' style={{ backgroundColor: '#f4eee0' }}>
                    <source src='https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.IN.webm' type='video/webm' />
                    <source type='video/webm' src='https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/mp4/connectedness.IN.mp4' />
                </video>

            </div>
            <div className='flex-col justify-center py-10 px-10'>
                <div className='text-5xl font-bold py-2'>Bring your team together</div>
                <div className='text-xl py-2'>At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.</div>
                <div className='hover:underline text-sky-600'><a href='https://slack.com/intl/en-in/features/channels'>Leran more about channels <EastIcon /></a></div>
            </div>

        </div>
    )
}

export default Component3
