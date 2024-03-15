import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
function Header() {
    return (
        <div>
            <div className='text-6xl flex justify-center pt-4 font-bold'>Made for people.</div>
            <div className='text-7xl flex justify-center pt-1 font-bold' style={{ color: '#4A154B' }}>Built for productivity.</div>
            <div className='flex justify-center'>
                <div className='py-4 font-bold '> <button className='rounded-lg text-white border-2 border-white h-16  hover:border-4 px-3 py-3' style={{ backgroundColor: '#4A154B' }}><a href='https://slack.com/intl/en-in/get-started#/createnew'>SIGN UP WITH EMAIL ADDRESS</a></button></div>
                <div className='py-4 px-2 font-bold'>
                    <button className='rounded-lg text-white border-2 h-16  hover:border-4 px-3 py-3 ' style={{ backgroundColor: '	#4285F4' }}><a href='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D606092904014-s1u3idjanlbhr4ns5b1hcjgfn63cr9nh.apps.googleusercontent.com%26ux_mode%3Dpopup%26ui_mode%3Dcard%26context%3Dsignup%26as%3DpfcAZD%2FH5%2F2AdqYf%252BMCp5Q%26channel_id%3D21c7d47389dddc73ca9fd87050b7788dcdc9931f3823c447f95fc049a70ca477%26origin%3Dhttps%3A%2F%2Fslack.com&faa=1&ifkv=ATuJsjyuI8X0wP1TALKHj_O3LkSg91Fj3M-kiZsjgD_s21Nm2Sq29ItFBuTO_pLDlTRDfrE1fIKUng&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S2080888536%3A1710005481534415&theme=mn'><GoogleIcon style={{ color: '#DB4437' }} /> SIGN UP WITH GOOGLE</a></button>
                </div>

            </div>
            <div className='flex justify-center'>
                <div className=' font-bold text-black text-xl'>Slack is free to try</div>
                <div className='text-black text-xl px-1'>for as long as you like</div>
            </div>
            <div className='flex justify-center px-48 rounded-lg py-3'>
                <video className='rounded-lg' poster="https://a.slack-edge.com/49b2831/marketing/img/homepage/true-prospects/revamp-exp/static/hero@2x.jpg">
                    <source src='https://a.slack-edge.com/49b2831/marketing/img/homepage/true-prospects/revamp-exp/animation/hero@2x.webm' type='video/webm' />
                    <source src='https://a.slack-edge.com/49b2831/marketing/img/homepage/true-prospects/revamp-exp/animation/hero@2x.mp4'
                        type='video/webm' />
                </video>
            </div>
        </div>
    )
}

export default Header
