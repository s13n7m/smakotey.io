"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedInIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending the data to the server.
    const options = {
      // The methods is POST because we are sending data to the server.
      method: "POST",
      // The headers tell the server what kind of data we are sending.
      headers: {
        "Content-Type": "application/json",
      },
      // The body is the data we are sending to the server.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === "200") {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      className="relative grid md:grid-cols-2 my-12 md:my-16 py-4 gap-4"
      id="contact"
    >
      <div className="relative z-5">
        <div className="absolute w-80 h-80 z-[0] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full blur-lg top-full left-2 transform -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
        <h5 className="text-2xl font-bold text-slate-200 my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-slate-100 mb-4 relative z-4">
          {" "}
          I&apos;m currently looking for new opportunities and would love to
          hear from you. If you have any questions or just want to say hi, feel
          free to send me an email. I&apos;ll get back to you as soon as I can.
        </p>

        <div className="socials flex flex-row gap-2 z-4 relative">
          <Link href="https://www.github.com">
            <Image src={GithubIcon} alt="Github Icon" width={50} height={50} />
          </Link>
          <Link href="https://www.linkedin.com">
            <Image
              src={LinkedInIcon}
              alt="LinkedIn Icon"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>

      <div className=" relative z-9">
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-white block mb-2 px-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="rounded-lg px-4 py-2 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-base block w-full p-2.5"
              placeholder="youremail@example.com"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="subject"
              className="text-white block mb-2 px-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="rounded-lg px-4 py-2 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-base block w-full p-2.5"
              placeholder=""
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="text-white block mb-2 px-2 text-sm font-medium"
            >
              Your name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              className="rounded-lg px-4 py-2 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-base block w-full p-2.5"
              placeholder="First Name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="text-white block mb-2 px-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              type="text"
              id="message"
              required
              className="rounded-lg px-4 py-2 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-base block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="hover:bg-gradient-to-br from-blue-700 to-green-800 text-white font-medium py-2.5 px-5 rounded-lg w-full mt-4 bg-[#484848]"
          >
            Send Message
          </button>
          {
            // If the email has been submitted, show a success message.
            emailSubmitted && (
              <p className="text-white mt-4">Email sent successfully!</p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
