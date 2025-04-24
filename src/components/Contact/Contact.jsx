import React, { useRef, useState } from 'react'
import './contact.css'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const variants = {
        initial:{
            y:500,
            opacity:0
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:.5,
                staggerchildren:0.1
            }
        }
    }

    const formRef = useRef();
    const [Error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    

    const sendEmail = (e) => {
        e.preventDefault();
      
        const name = formRef.current['name'].value.trim();
        const email = formRef.current['email'].value.trim();
        const message = formRef.current['message'].value.trim();
      
        if (!name || !email || !message) {
          setError(true);
          setSuccess(false);
          setTimeout(() => setError(false), 10000);
          return;
        }
      
        emailjs
          .sendForm('service_r2u0myr', 'template_4hyq67n', formRef.current, 'jEvNJMeAv2KMc9Umo')
          .then(() => {
            console.log('SUCCESS!');
            setSuccess(true);
            setError(false);
            formRef.current.reset(); // Clear the input fields
      
            setTimeout(() => setSuccess(false), 8000); // Hide success after 10s
          })
          .catch((error) => {
            console.log('FAILED...', error.text);
            setError(true);
            setSuccess(false);
            formRef.current.reset(); // Optional: Clear on failure too
      
            setTimeout(() => setError(false), 8000); // Hide error after 10s
          });
      };
      
      
      


      const goTop = () => {
            window.scrollTo({top:0,behavior:'smooth'})
        }   

  return (

    <>
        <button className='top-btn d-flex justify-content-center align-items-center' onClick={goTop}>      <FontAwesomeIcon icon={faChevronUp} className="fs-4 top-icon" /></button>
    <motion.div variants={variants} initial="initial" whileInView="animate" className='contact row d-flex align-items-center h-100 container justify-content-center' >
      
      <motion.div variants={variants} className="ps-lg-5 p-md-0 text-container col-lg-6 d-flex flex-column gap-lg-3 gap-sm-4 gap-md-0 mb-md-5" >
          <motion.h1 variants={variants} className='m-0 display-6 fw-bold title py-3 ' >CONTACT ME </motion.h1>
          <motion.p variants={variants} className='' >Need to get in touch with me? Either fill out the form with your inquiry or find the email you'd like to contact.</motion.p>
          <motion.div variants={variants} className="item" >
              <h5 className='optTitle'>Email</h5>
              <p><a href="mailto:abilashmanickam@gmail.com" className='text-white  text-decoration-none'>abilashmanickam@gmail.com</a></p>
          </motion.div>
          <motion.div variants={variants} className="item" >
              <h5 className='optTitle'>Address</h5>
              <p className=' '>Samiyar Garden, Saidapet, Chennai - 15</p>
          </motion.div>
          <motion.div variants={variants} className="item" >
              <h5 className='optTitle'>Phone number</h5>
              <p className='p-0'>
                <p className='  m-0'>+91 9080450318</p>
                {/* <p className='fw-bold  m-0'>+91 9385502703</p> */}
              </p>
          </motion.div>
      </motion.div>

      <div className="form-container  p-lg-5  col-lg-6 d-flex flex-column align-items-center jusify-content-center">
          <motion.div initial={{opacity:1}} whileInView={{opacity:0}} transition={{duration:.5,delay:1}}   className="svg mt-3">
          <svg height="300px" width="300px" 
                  viewBox="0 0 24 24" className='inboxIcon' >
              <g>
                  <g>
                      <path initial={{pathLength:0}} animate={ {pathLength:1}} transition={{duration:1}} strokeWidth={1} fill="none" d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z"/>
                  </g>
              </g>
              </svg>
          </motion.div>
          <motion.form id="form" ref={formRef} onSubmit={sendEmail} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:2}} className='d-flex flex-column align-itemc-center justify-content-center  w-100 px-md-3  gap-3' >
              <input type="text" required placeholder='Name' name='name' id='name'/>
              <input type="email" required placeholder='Email'  name='email' id='email'/>
              <textarea rows={5} placeholder='Message' name='message' id='msg'></textarea>
              <button className='btn submit fw-bold '>SEND</button>
          </motion.form>
          {success && <p className='text-center text-success'>Sent successfully</p>}
          {Error && <p className='text-center text-danger'>Something went wrong</p>}
 
      </div>
  </motion.div>
  </>
  )
}

export default Contact
