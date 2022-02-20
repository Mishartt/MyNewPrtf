import react from 'react'


const ContactMe = ({locationImg,mailImg,phoneImg}) => {



    return(
        <div className="mxmx">
        <div className="contact__wrapper">
              <div className="contacts">

                <div className="location">
                    <div className="icon">
                        <img src={locationImg} alt=""/>
                    </div>
                    <p>Kyiv. Ukraine</p>
                </div>
                <div className="maill">
                    <div className="icon">
                        <img src={mailImg} alt=""/>
                    </div>
                    <p>artiushkin.mikhail@gmail.com</p>
                </div>
                <div className="phone">
                    <div className="icon">
                        <img src={phoneImg} alt=""/>
                    </div>
                    <p>+380-95-805-85-31</p>
                </div>


              </div>

        <div id="Contact" className="Contact__form">
        <div className='form'>
        <input type="text" className="name" placeholder="Full Name"/>
      <div className="x" tabIndex="">
          <input type="email" className="mail" placeholder="Email"/>
          <input type="number"  className="number" placeholder="Phone number"/>
      </div>
      <textarea placeholder="Enter your message" className="msg" name="msg"cols="30" rows="10"></textarea>
        </div>


<div className="m"></div>
  <div className="sbm__btn">
      <p>Submit</p>
  </div>
    </div>
 </div>
 </div>

 )   
}

export default ContactMe