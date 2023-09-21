import React from 'react'
import img from '/public/gallery-1.jpg'
import img2 from '/public/gallery-2.jpg'
import { Link } from "react-router-dom";
import {AiFillFacebook,AiOutlineInstagram,AiOutlineTwitter,AiFillYoutube,} from 'react-icons/ai'

const Homepage = () => {
  return (
    <section className='herosection coontainer'>

<nav className="d-flex justify-content-between aling-item-center container pt-3">
      <h5>The Imaginarium Gallery</h5>
      <ul className="d-flex gap-5 ">
        <li>Home</li>
        <li>Blog</li>
        <li>Portfolios</li>
        <li>Features</li>
      </ul>
<div className=" btn d-flex gap-3">
      <Link to="/signin"><button className="p-2">Login</button></Link>
      <Link to="/signup"><button className="p-2">Sign up</button></Link>
      </div>
     </nav>
     <div className='container'>
<h5 className="pt-5 pb-3 text-center">Enhance your visual journey with a captivating gallery experience that seamlessly arranges and showcases your images, creating an unparalleled artistic encounter.</h5>
<div className=" container  ">
<img src={img} alt=""  />

<img src={img2} alt="" className="ms-5 "/>
</div>
<p className="pt-4 text-center">Enable effortless image sequencing in your art gallery through an intuitive Drag-and-Drop feature, allowing you to gracefully reposition your masterpieces at will.</p>
      </div>

      {/*  footer */}
      <div className=' justify-content-between aling-item-center container '> 
     <div className='d-flex gap-4 justify-content-center align-items-center pt-5 pb-4'> 
      <AiFillFacebook size={30}/>
      <AiOutlineInstagram size={30}/>
      <AiOutlineTwitter size={30}/>
      <AiFillYoutube size={30}/>
    </div>
    <div className=''>
      <ul className='d-flex justify-content-center gap-5'style={{textDecoration:"none",listStyle:"none",fontWeight:"500"}}>
        <li>Condition of use</li>
        <li>Privacy & Policy</li>
        <li>Press Room</li>
      </ul>
    </div>
    
    </div>
    </section>
  )
}

export default Homepage
