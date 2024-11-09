import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'

import Fox from '../components/Contact/Fox';
import Loader from '../components/Contact/Loader';
import useAlert from '../components/Contact/useAlert';
import Alert from '../components/Contact/Alert';
import Footer from '../components/Footer/Footer';

const Contact = () => {

  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit')

    emailjs.send (
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Parth",
        from_email: form.email,
        to_email: 'parthbansal2374@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({ show: true, text: 'Message sent successfully!', type: 'success'})

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle');
        setForm({ name: '', email: '', message: ''});
      }, [3000])

    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle')
      showAlert({ show: true, text: 'Message sent successfully!', type: 'success'})
    })
  };
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  return (
    <div className='h-full w-full bg-black'>
      <section className='relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-12 !pt-[76px] px-8 min-h-[calc(100vh-80px)]'>
        {alert.show && <Alert {...alert} />}

        <div className='flex-1 min-w-[50%] flex flex-col'>
          <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins'>Get in Touch</h1>

          <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
            <label className='text-black-500 font-semibold'>
              Name
              <input 
                type='text'
                name='name'
                className='bg-white border shadow-md shadow-[#ADD8E6] border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
                placeholder='John'
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className='text-black-500 font-semibold'>
              Email
              <input 
                type='email'
                name='email'
                className='bg-white border shadow-md shadow-[#ADD8E6] border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
                placeholder='john@gmail.com'
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className='text-black-500 font-semibold'>
              Your Message
              <textarea 
                name='message'
                rows={4}
                className='block p-2.5 w-full shadow-md shadow-[#ADD8E6] text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-card'
                placeholder='Let me know how I can help you!'
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <button
              type='submit'
              className='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? 'Sending...' : 'Send Message'}

            </button>
          </form>
        </div>

        <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
          <Canvas 
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000
            }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <Fox 
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.5, -0.61, -0.1]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
			<iframe 
       className='mb-10'
			  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.316441839934!2d75.83554649359716!3d26.893450558844027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7a01a3a87c7%3A0xf7acb2dfa996cc44!2sAntra%20Hospital!5e0!3m2!1sen!2sin!4v1730521078276!5m2!1sen!2sin" 
			  width="100%" 
			  height="450" 
			  style={{ border: '0' }} 
			  allowFullScreen 
			  loading="lazy" 
			  referrerPolicy="no-referrer-when-downgrade"
			/>

      <Footer />
    </div>
  )
}

export default Contact







// import React from 'react'

// const Contact = () => {
// 	return (
// 		<div>
// 			Contact
// 		</div>
// 	)
// }

// export default Contact
