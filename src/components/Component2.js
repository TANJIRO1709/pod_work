import React from 'react'
import EastIcon from '@mui/icons-material/East';
function Component2() {
    return (
        <div className='flex justify-center h-96' style={{ backgroundColor: '#f4eee0' }}>

            <div className='flex-col justify-center py-10 px-28 basis-1/2'>
                <div className='text-5xl font-bold py-2'>Choose how you want to work</div>
                <div className='text-xl py-2'>In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live.</div>
                <div className='hover:underline text-sky-600'><a href='https://slack.com/engage-users?geocode=en-in'>Leran more about flexible communication<EastIcon /></a></div>
            </div>
            <div style={{ backgroundColor: '#f4eee0' }} className='basis-1/2'>
                <video className='px-24 py-3 ' style={{ backgroundColor: '#f4eee0' }}>
                    <source src='https://a.slack-edge.com/ec3a92a/marketing/img/homepage/true-prospects/animations/webm/ia4-flexibility.IN.webm' type='video/webm' />m
                    <source type='video/webm' src='https://a.slack-edge.com/ec3a92a/marketing/img/homepage/true-prospects/animations/mp4/ia4-flexibility.IN.mp4' />
                </video>

            </div>
        </div>
    )
}

export default Component2
