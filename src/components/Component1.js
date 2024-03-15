import React from 'react'
import EastIcon from '@mui/icons-material/East';
function Component1() {
    return (
        <div className='flex justify-center' style={{ backgroundColor: '#f4eee0' }}>
            <div style={{ backgroundColor: '#f4eee0' }}>
                <video className='px-24 py-3' style={{ backgroundColor: '#f4eee0' }}>
                    <source src='https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/webm/speed.IN.webm' type='video/webm' />
                    <source type='video/webm' src='https://a.slack-edge.com/445abcc/marketing/img/homepage/e2e-prospects/animations/mp4/speed.IN.mp4' />
                </video>

            </div>
            <div className='flex-col justify-center py-10 px-10'>
                <div className='text-5xl font-bold py-2'>Move faster with your tools in one place</div>
                <div className='text-xl py-2'>Automate away routine tasks with the power of generative AI and simplify your workflow with all your favourite apps ready to go in Slack.</div>
                <div className='hover:underline text-sky-600'><a href='https://slack.com/intl/en-in/integrations'>Leran more about the Slack platform <EastIcon /></a></div>
            </div>

        </div>
    )
}

export default Component1
