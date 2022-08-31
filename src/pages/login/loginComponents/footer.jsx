import React from "react";
import './css/footer.css';
const Footer = () => {
    return <>      
        <div className='footerForm'>
            <div className='forgetPassword'>
                <a href="/">ForgetPassword</a>
            </div>
            <div className='register'>
                <a href="/register">Register</a>
            </div>
        </div> 
    </>
}

export default Footer