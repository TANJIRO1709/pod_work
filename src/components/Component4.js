import React from 'react'
import EastIcon from '@mui/icons-material/East';
function Component4() {
    return (
        <div>
            <div className='flex justify-center rounded-lg' >
                <div className='flex basis-1/2 rounded-lg'>
                    <video className=' py-3 rounded-lg'>
                        <source src='https://a.slack-edge.com/1b4e2a3/marketing/img/homepage/true-prospects/customer-showcase/Vodafone_08.mp4' type='video/webm' />
                    </video>

                </div>
                <div className='flex-col basis-1/2 justify-center py-10 px-10'>

                    <div className='text-4xl py-2'>‘Many technology employees were gravitating naturally to Slack. So we followed our users to what has become one of our most important tools.’</div>
                    <div className='font-bold'>Matt Beal</div>
                    <div >Director of Technology Strategy and Architecture, Vodafone</div>
                    <div className='hover:underline text-sky-600 font-bold'><a href='https://slack.com/intl/en-in/integrations'>See more customer stories<EastIcon /></a></div>
                </div>

            </div>
            <div className='h-20'></div>
            <div className='flex justify-center py-5'>* Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</div>

        </div>
    )
}

export default Component4
