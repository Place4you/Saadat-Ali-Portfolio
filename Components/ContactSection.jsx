"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const ContactSection = () => {

  return (
    <>
    <section id='contact' className='mt-5'>
            <div className='grid md:grid-cols-2 md:grid-flow-col gap-8 py-8 px-4 xl:gap-16 sm:gap-16 text-white'>
                <div>
                    <h1 className='lg:text-2xl text-lg font-semibold pb-3'>Let's Connect</h1>
                    <p className='text-[#ADB7BE]'>Currently, I am looking for new opportunities to apply my skills and experience in different domains. My inbox is always open for any inquiries, feedback, or collaboration requests. You can reach me at my email address or follow me on my social media accounts. I would love to hear from you and explore new possibilities together.</p>
                    <div className='flex items-center mt-2'>
                        <Link href="https://github.com/Place4you/">
                            <Image
                            src="/Images/github-icon.svg" // Path to your SVG image
                            alt="github icon"
                            width={40} // Set the width and height as per your design
                            height={40}
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/saadatali786/">
                            <Image
                            src="/Images/linkedin-icon.svg" // Path to your SVG image
                            alt="LinkedIn icon"
                            width={40} // Set the width and height as per your design
                            height={40}
                            />
                        </Link>

                    </div>

                </div>

                <div>
                    <form className='flex flex-col gap-2 lg:w-10/12 w-full'>
                        <label htmlFor='email' className='text-white  ' >Email</label>
                        <input
                        className=' py-2 bg-[#19191E] border border-[#33353F] text-sm rounded-md px-3'
                        type="email"
                        id='email'
                        required
                        placeholder='yourname@email.com' ></input>

                        <label htmlFor='subject' className='text-white  ' >Subject</label>
                        <input
                        className=' py-2 bg-[#19191E] border border-[#33353F] text-sm rounded-md px-3'
                        type="text"
                        id='subject'
                        required
                        placeholder='Query or Topic'  />

                        <label htmlFor='message' className='text-white  ' >Message</label>
                        <input
                        className=' py-2 bg-[#19191E] border border-[#33353F] text-sm rounded-md px-3'
                        type="text"
                        id='message'
                        required
                        placeholder=" Let's talk about " />

                        <button
                        type='submit'
                        className='mt-2 p-2 bg-orange-500 rounded-md font-bold'
                        >
                        Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactSection
