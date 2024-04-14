import { useEffect, useState } from 'react';
import './Contact.css';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  const navigate = useNavigate();
  const initialValue = {
    name:'',
    email:'',
    phone:'',
    message:''
  };
  const [form,setForm] = useState(initialValue);
  const [submitted, setSubmitted] = useState(false); // Track form submission
  const [loading,setLoading] = useState(false)

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      setLoading(true);
      const res = await fetch('https://newsappbackend-0ubl.onrender.com/form', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(form)
      });
      console.log("Response received");
      const body = await res.json();
      console.log("Response body:", body);
  
      if (body.status === "Success") {
        setForm(initialValue);
        setSubmitted(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/submitted");
        }, 1000);
      }
    } catch (error) {
      console.log("Error:", error.message);
      setLoading(false);
    }
  };
  

  useEffect(() => {

    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }
  
    function blurFunc() {
      let parent = this.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }
  
    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
  }, [submitted]);

  const handleOnChange = (e) => {
    setForm({...form , [e.target.name]:e.target.value});
  };

  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let&apos;s get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp;
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i> &nbsp;&nbsp;
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i>&nbsp;&nbsp;
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form autoComplete="off" onSubmit={handleOnSubmit}>
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" onChange={handleOnChange} required/>
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" onChange={handleOnChange} required/>
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="number" name="phone" className="input" onChange={handleOnChange} required/>
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" onChange={handleOnChange} required></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <button className="btn" type="submit" disabled={loading}>
              {loading ? <LoadingSpinner /> : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="text-center flex justify-center items-center py-3">
      <i className="fa-solid fa-arrows-rotate fa-spin fa-2xl"></i>
    </div>
  );
}
export default ContactForm;
