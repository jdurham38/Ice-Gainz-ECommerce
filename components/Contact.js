import React, { useState } from "react";
import userData from "@constants/data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    // You can send the form data to your backend or do other actions here
  };

  return (
    <section>
      <div className="">
        <h1 className="text-5xl md:text-9xl font-bold py-10 text-center md:text-left dark:text-[#FFFFFF] flex justify-center items-center">
          Contact
        </h1>
      </div>

      <div className="relative z-10 rounded-md shadow-md bg-[#54413B] p-4 md:p-10 lg:p-20 max-w-5xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-[#EFEDE7] font-semibold text-2xl">
                Get in touch, let's talk.
              </h1>
              <p className="font-light text-base text-[#EFEDE7] mt-2">
                Fill in the details and I'll get back to you as soon as I can!
              </p>
            </header>
            <form onSubmit={handleSubmit} className="my-10">
              <div className="mb-4">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={handleNameChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-[#BBA6A0] placeholder-[#BBA6A0] text-gray-50 focus:outline-none focus:ring-[#EFEDE7] focus:border-[#EFEDE7] focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-[#BBA6A0] placeholder-[#BBA6A0] text-gray-50 focus:outline-none focus:ring-[#EFEDE7] focus:border-[#EFEDE7] focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Message"
                  required
                  value={message}
                  onChange={handleMessageChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-[#BBA6A0] placeholder-[#BBA6A0] text-gray-50 focus:outline-none focus:ring-[#EFEDE7] focus:border-[#EFEDE7] focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-[#EFEDE7] text-[#54413B] px-4 py-2 rounded-md hover:bg-opacity-80 transition-all duration-200"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="md:mr-4">
            <header className="">
              <h1 className="text-[#EFEDE7] font-semibold text-2xl">
                Let's Connect
              </h1>
              <p className="font-light text-base text-[#EFEDE7] mt-2">
                You can also reach me on these social media platforms.
              </p>
            </header>
            <div className="flex mt-10">
  {userData.social.map((social, index) => (
    <a
      key={index}
      href={social.link}
      className="mr-6 text-[#BBA6A0] hover:text-[#EFEDE7] transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      {social.icon}
    </a>
  ))}
  {userData && userData.social && userData.social.map((social, index) => (
    <a
      key={index}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mr-6"
    >
      <FontAwesomeIcon icon={social.icon} size="2x" />
    </a>
  ))}
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
