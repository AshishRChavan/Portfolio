import './About.css'
export default function About(){
  return(
    <>
      <section id="about" className="about">
        <div className="aboutcontainer">
          <div className="aboutcontent">
            <div className='aboutimg-area'>
              <img src="pexels-life-of-pix-7974.jpg" width="410px" height="350px"></img>
            </div>
            <div className='abouttext-area'>
              <h3>About me</h3>
              <h4>
                Front-end Developer
                <br></br>
                based in Pune, India 📍
              </h4>
              <p>
                Hey, my name is Ashish, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my 
                users.
                <br></br>
                <br></br>
                My main stack currently is React in combination with Redux.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}