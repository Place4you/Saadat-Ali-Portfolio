"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { toast } from 'react-toastify';

const ContactSection = () => {
  // Using the ngrok forwarding URL from image_b1ee79.png 
  // and the webhook path from image_b1eef6.jpg
  const WEBHOOK_URL = 'https://refueling-reshape-bonus.ngrok-free.dev/webhook/1ff4200a-a0ac-45d9-91d0-1fcf38d02b0b';

  const sendToWorkflow = async (e) => {
    e.preventDefault();
    
    // Create an object from the form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Lead submitted to workflow!', { autoClose: 3000 });
        e.target.reset();
      } else {
        throw new Error('Failed to trigger workflow');
      }
    } catch (error) {
      console.error('Workflow trigger failed:', error);
      toast.error('Submission failed. Check if ngrok is running.', { autoClose: 3000 });
    }
  };

  return (
    <section id="contact" className="my-5 sm:mb-12">
      <div className="grid md:grid-cols-2 gap-8 text-white">
        <div>
          <h1 className="lg:text-2xl text-lg font-semibold pb-3">Get in Touch</h1>
          <p className="text-[#ADB7BE]">
            Fill out the form to start our automated lead evaluation process.
          </p>
        </div>

        <form className="flex flex-col gap-4 lg:w-10/12 w-full" onSubmit={sendToWorkflow}>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="name" className="text-xs">Name</label>
              <input name="name" id="name" required className="w-full py-2 bg-[#19191E] border border-[#33353F] rounded-md px-3" placeholder="John Wick" />
            </div>
            <div>
              <label htmlFor="email" className="text-xs">Email</label>
              <input name="email" id="email" type="email" required className="w-full py-2 bg-[#19191E] border border-[#33353F] rounded-md px-3" placeholder="john@company.com" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="companyName" className="text-xs">Company Name</label>
              <input name="companyName" id="companyName" required className="w-full py-2 bg-[#19191E] border border-[#33353F] rounded-md px-3" placeholder="Continental Inc." />
            </div>
            <div>
              <label htmlFor="website" className="text-xs">Website</label>
              <input name="website" id="website" type="url" required className="w-full py-2 bg-[#19191E] border border-[#33353F] rounded-md px-3" placeholder="https://example.com" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="jobTitle" className="text-xs">Job Title</label>
              <input name="jobTitle" id="jobTitle" required className="w-full py-2 bg-[#19191E] border border-[#33353F] rounded-md px-3" placeholder="Operations Manager" />
            </div>
            <div>
              <label htmlFor="interestArea" className="text-xs">Interest Area</label>
              <select name="interestArea" id="interestArea" required className="w-full py-2 bg-[#19191E] border border-[#33353F] rounded-md px-3 text-sm">
                <option value="">Select an option</option>
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
                <option value="Partnerships">Partnerships</option>
              </select>
            </div>
          </div>

          <button type="submit" className="mt-4 p-3 bg-orange-500 hover:bg-orange-600 transition-colors rounded-md font-bold text-white">
            Execute Workflow
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
