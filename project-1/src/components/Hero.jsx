import React from 'react'

const Hero = () => {
    return (
        <main className='hero container'>
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>EXPERIENCE UNMATCHED COMFORT, BOLD STYLE, AND PERFORMANCE BUILT FOR CHAMPIONS. EVERY STEP YOU TAKE DESERVES INNOVATION, PRECISION, AND CONFIDENCE.
                </p>

                <div className="hero-btn">
                    <button>SHOP NOW</button>
                    <button className='secondary-btn'>Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>

                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="Amazon"/>
                        <img src="/images/flipkart.png" alt="Flipkart"/>
                    </div>
                </div>
            </div>

            <div className="hero-image">
                <img src="/images/hero-image.png" alt="hero-image" />
            </div>

        </main>
    )
}

export default Hero
