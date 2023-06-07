import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid1">
            <div className="box">
                <img src="./assets/logo1.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,   dicta quasi aspernatur minima  provident adipisci inventore libero.</p>
                <div className="socialIcon">
                <i className='fab fa-facebook-f '></i>
              <i className='fab fa-instagram '></i>
              <i className='fab fa-twitter '></i>
              <i className='fab fa-youtube'></i>
              <i className='fab fa-pinterest '></i>
              <i className='fab fa-dribbble '></i>
                </div>
            </div>

            <div className="box">
                <h2>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Protfolio</li>
                    <li>News</li>
                    <li>Contact</li>
                    <li>FAQ'S</li>
                </ul>
            </div>
            <div className="box">
                <h2>Recent Post</h2>
                <div className="text">
                    <p> 3 WooCommerce Plugins to Boost Sales</p>
                    <span>28 Feb 2022</span>
                </div>
                <div className="text">
                    <p> 3 WooCommerce Plugins to Boost Sales</p>
                    <span>28 Feb 2022</span>
                </div>
                <div className="text">
                    <p> 3 WooCommerce Plugins to Boost Sales</p>
                    <span>28 Feb 2022</span>
                </div>
            </div>

            <div className='box'>
                <h2>Get in Touch</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, corrupti laboriosam</p>

                <div className="icon">
                   <i className='fas fa-map-marker-alt'></i>
                    <label htmlFor="">Loacation: 27 Division St, New York, NY 10002, USA</label>
                </div>
                <div className="icon">
                    <i className='fa fa-phone'></i>
                    <label htmlFor="">Phone: +14578 5262 4789</label>
                </div>
                <div className="icon">
                    <i className='fa fa-envelope'></i>
                    <label htmlFor='/'>Email:Support@gmail.com</label>
                </div>
            </div>
        </div>

        <div className="legal container">
            <p>Copyright @2022. All rights reversed.</p>
            <label htmlFor=''>
                Design & Developed by <span>NGU-Guys</span>
            </label>
        </div>
      </footer>
    </>
  )
}

export default Footer
