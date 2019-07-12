import React from 'react'


const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome Home!</h1>
            </header>
            <section className='section-about'>
                <h1>About me</h1>
                <p>Hi! I love to build and design for the web. I am enthusiastic about design that engages an audience 
                    through seemless and intentional design. </p>
            </section>
            <section className='section-timeline'>
                <h1>Timeline</h1>
                <div>
                    <h3>James Madison University</h3>
                    <p>I studied psychology with an emphesis on Industrial Organizational and Sleep Psychology.</p>
                </div>
                <div>
                    <h3>University Innovation Fellows</h3>
                    <p>Text</p>
                </div>
                <div>
                    <h3>City Year Denver || Peer-to-Peer Mentor</h3>
                    <p>Text</p>
                </div>
                <div>
                    <h3>Galvanize, Denver || Web Development Immersive</h3>
                    <p>Text</p>
                </div>

            </section>
        </div>
    )

}

export default Home