import './Contact.css'
export default function Contact(){
  function mailOpener(){
    window.open("mailto:ashish.chavan0904@gmail.com?body=Hello Ashish,","_blank","width=700,height=500,left=40,top=200");
  }
  return(
    <>
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-content">
            <p className="contact-title">Contact</p>
            <h3 className="contact-mess">Don't be shy! Hit me up! 👇</h3>
            <div className="main-box">
              <div className="box">
                <div className="circle">
                  <img src='Location.png' width="30px" height="30px"></img>
                </div>
                <div className="textbox">
                  <h3>Location</h3>
                  <p>Pune, India</p>
                </div>
              </div>
              <div className="box">
                <div className="circle">
                  <img src="Mail.png" width="30px" height="30px"></img>
                </div>
                <div className="textbox">
                  <h3>Mail</h3>
                  <p onClick={mailOpener}>ashish.chavan0904@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 