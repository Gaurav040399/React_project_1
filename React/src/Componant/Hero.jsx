// import React from 'react'

function Hero() {
  return (
    <main className="hero container">
      <div className="hero-Contain">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="sec-btn"> Category</button>
        </div>
        <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icon">
                <img src="/images/amazon.png" alt="amazon-logo" />
                <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
        </div>
      </div>
      <div className="hero-img">
      <img src="/images/shoe_image.png" alt="hero-logo" />
      </div>
    </main>
  )
}

export default Hero
