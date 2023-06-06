import React from 'react'
import vg from "../imgs/img2.webp"
import{AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram}from "react-icons/ai";
const Home = () => {
  return (
    <>
    <div className='home'id='Home'>
    <main>
        <h1>Tech-Master</h1>
        <p>Solution to all your problems </p>
    </main>
    </div>
    
    <div className='home2'>
    <img src={vg} alt='Graphics'/>
    <div>
    <p>
        We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
    </p>
    </div>

    </div>
    <div className='home3' id='About' >
    <div>
    <h1>Who we are</h1>
    <p> We are a dedicated team of experts passionate about technology and committed to providing comprehensive solutions to your tech-related challenges.

    At Techmaster, we understand that technology plays an integral role in our lives, and encountering issues can be frustrating and time-consuming. That's why we're here to help. Our mission is to simplify complex technical problems and empower you to navigate the digital world with confidence.
    
    With years of experience in the industry, our team of skilled professionals possesses a deep understanding of various technological domains. Whether you're facing software glitches, hardware malfunctions, network connectivity issues, or any other tech troubles, we have the expertise to troubleshoot and resolve them efficiently.</p>

    </div>
         
    </div>

    <div className='home4' id='Brands' >
    <div>
        <h1>Brands</h1>
        <article>
        <div style={{
            animationDelay:"0.3s",
        }}>
        <AiFillGoogleCircle/>
        <p>Google</p>
        </div>

        <div style={{
            animationDelay:"0.5s",
        }}>
        <AiFillAmazonCircle/>
        <p>Amazon</p>
        </div>

        <div style={{
            animationDelay:"0.8s",
        }}>
        <AiFillInstagram/>
        <p>Instagram</p>
        </div>

        <div style={{
            animationDelay:"0.1s",
        }}>
        <AiFillYoutube/>
        <p>Youtube</p>
        </div>
        </article>
    </div>

    </div>
    
    </>
  )
}

export default Home;