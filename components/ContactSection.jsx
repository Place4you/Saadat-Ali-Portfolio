"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ContactSection = () => {
  // Replace with your own EmailJS User ID, Template ID, and Service ID
  const USER_ID = '2hts2V2UFNLzEwGzc';
  const TEMPLATE_ID = 'template_e3jhifa';
  const SERVICE_ID = 'service_3t8rn1c';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log('Email sent successfully:', result.text);

        // Show a success toast notification
        toast.success('Email sent successfully', { autoClose: 3000 });

        // Clear the form or perform any other necessary actions
        e.target.reset();
      })
      .catch((error) => {
        console.error('Email send failed:', error.text);

        // Show an error toast notification
        toast.error('Email send failed', { autoClose: 3000 });
      });
  };
  return (
    <>
      <section id="contact" className="my-5 sm:mb-12">
        <div className="grid md:grid-cols-2 md:grid-flow-col sm:grid-cols-1 gap-8   md:overflow-y-auto xl:gap-16  text-white ">
          <div>
            <h1 className="lg:text-2xl text-lg font-semibold pb-3">Let's Connect</h1>
            <p className="text-[#ADB7BE]">
              Currently, I am looking for new opportunities to apply my skills and experience in different domains. My inbox is always open for any inquiries, feedback, or collaboration requests. You can reach me at my email address or follow me on my social media accounts. I would love to hear from you and explore new possibilities together.
            </p>
            <div className="flex items-center mt-2">
              <a href="https://github.com/Place4you/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/github-icon.svg"
                  alt="github icon"
                  width={40}
                  height={40}
                />
              </a>
              <a href="https://www.linkedin.com/in/saadatali786/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/linkedin-icon.svg"
                  alt="LinkedIn icon"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>

          <div>
            <form
              className="flex flex-col gap-2 lg:w-10/12 w-full"
              onSubmit={sendEmail}
            >
             <label htmlFor="name" className="text-white">
                Name
              </label>
              <input
                className="py-2 bg-[#19191E] border border-[#33353F] text-sm rounded-md px-3"
                type="text"
                id="name"
                name="name" // Ensure the input has the "name" attribute
                required
                placeholder="John Wick"
              />
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                className="py-2 bg-[#19191E] border border-[#33353F] text-sm rounded-md px-3"
                type="email"
                id="email"
                name="email" // Ensure the input has the "name" attribute
                required
                placeholder="yourname@email.com"
              />

              <label htmlFor="subject" className="text-white">
                Subject
              </label>
              <input
                className="py-2 bg-[#19191E] border border-[#33353F] text-sm rounded-md px-3"
                type="text"
                id="subject"
                name="subject" // Ensure the input has the "name" attribute
                required
                placeholder="Query or Topic"
              />

              <label htmlFor="message" className="text-white">
                Message
              </label>
              <textarea
                className="py-2 bg-[#19191E] border border-[#33353F] text-sm rounded-md px-3"
                id="message"
                name="message" // Ensure the textarea has the "name" attribute
                required
                placeholder="Let's talk about"
              />

              <button type="submit" className="mt-2 p-2 bg-orange-500 rounded-md font-bold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
