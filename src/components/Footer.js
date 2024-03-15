import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
    return (
        <div>
            <div className='flex'>
                <div className='flex mt-10 basis-2/3'>
                    <div className='font-bold mr-3 ml-7 hover:text-sky-700 text-sm'><a href='https://slack-status.com/'>Status</a></div>
                    <div className='font-bold mr-3 hover:text-sky-700 text-sm'><VerifiedUserIcon /><a href='https://slack.com/intl/en-in/trust/privacy/privacy-policy'>Privacy</a></div>
                    <div className='font-bold mr-3 hover:text-sky-700 text-sm'><a href='https://slack.com/intl/en-in/legal'>Terms</a></div>
                    <div className='font-bold mr-3 hover:text-sky-700 text-sm'><a href='https://www.salesforce.com/form/other/privacy-request/?_gl=1*182zu4s*_ga*MTUyOTA0ODMwMy4xNzEwMTQzNDMz*_ga_QTJQME5M5D*MTcxMDE0MzQzMi4xLjEuMTcxMDE0NTc1OS4yOC4wLjA.'>Your privacy choices</a></div>
                    <div className='font-bold mr-3 hover:text-sky-700 text-sm'>Cookie preferences</div>
                    <div className='font-bold mr-3 hover:text-sky-700 text-sm'><a href='https://slack.com/intl/en-in/help/requests/new'>Contact us</a></div>
                    <div className='font-bold mr-3 hover:text-sky-700 text-sm'><LanguageIcon />Change Region <ExpandMoreIcon /></div>

                </div>
                <div className='flex mt-10'>
                    <div> <CloudDownloadIcon className='text-sky-700 text-sm' /></div>
                    <div className='font-bold mr-3 ml-2 hover:text-sky-700 text-sky-700 text-sm'><a href='https://slack.com/intl/en-in/downloads/mac?geocode=en-in'>Download Slack</a></div>
                    <div className='ml-3 mr-3'><a href='https://twitter.com/slackhq'><XIcon className='hover:border-dotted border-solid border-2 border-black text-sm' /></a></div>
                    <div className='ml-3 mr-3 text-sm'><a href='https://www.facebook.com/slackhq'><FacebookIcon className='hover:border-dotted border-solid border-2 border-black text-sm' /></a></div>
                    <div className='ml-3 mr-3'><a href='https://www.youtube.com/channel/UCY3YECgeBcLCzIrFLP4gblw?themeRefresh=1'><YouTubeIcon className='hover:border-dotted border-solid border-2 border-black' /></a></div>
                    <div className='ml-3 mr-3'><a href='https://www.linkedin.com/company/tiny-spec-inc/'><LinkedInIcon className='hover:border-dotted border-solid border-2 border-black' /></a></div>

                </div>
            </div>
            <div className='h-8'></div>
            <div className='ml-6 text-sm'>©2024 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.</div>
            <div className='h-5 '></div>
        </div>
    )
}

export default Footer
