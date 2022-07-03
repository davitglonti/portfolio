import React from 'react'
import '../cssfiles/footer.css'
import { DiAndroid } from "react-icons/di";
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { BsInstagram  } from 'react-icons/bs';
import { ImPhone  } from 'react-icons/im';
//ImPhone
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerfirst'>
            <span>
           <DiAndroid/>
            <h1 className='footerheader'> the hear of tech</h1>
            </span>
            <div className='footerlist'>
                <AiFillFacebook/>
                <BsInstagram/>
                <AiFillYoutube/>
                <ImPhone/>
            </div>
            </div>
        <div >
        <h2>More Tnw</h2>
       <div className='footerinfo'>
       <a href='https://larielesquarepie.com/'>
        <p>Media</p>
        </a>
        <p>Events</p>
        <p>programs</p>
        </div>
        </div>
        <div>
            <h2>more TNW</h2>
            <div className='footerinfo'>
              <a href='https://larielesquarepie.com/'>
            <p>Partners</p> 
            </a>
            <a href='/'>
            <p>jobs</p> </a>

            <p>cookie </p>
            </div>
        </div>
    </div>
  )
}

export default Footer