"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [working, setIsWorking] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm("service_4z5qxtb", "template_qzzoxjp", form.current, {
        publicKey: "Ud-g74AQlc68mj-BW",
      })
      .then(
        () => {
          setIsWorking("message sent successflly!");
          setMessage("");
          setName("");
          setEmail("");
          setPhone("");
        },
        (error) => {
          setIsWorking("something went wrong ! please try again later.");
        }
      );
    e.preventDefault();
  };
  useEffect(() => {
    if (working) {
      const time = setTimeout(() => {
        setIsWorking("");
      }, 4000);
      return () => clearTimeout(time);
    }
  }, [working]);

  return (
    <div>
      <div className="hero min-h-[700px] ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left order-2">
            <h1 className="text-5xl font-bold">contact us now!</h1>
            <p className=" p-1 lg:py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full  max-w-sm shadow-sm">
            <form ref={form} className="card-body" onSubmit={sendEmail}>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="user_email"
                  className="input input-bordered  text-black bg-slate-300"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                  name="user_name"
                  className="input input-bordered text-black bg-slate-300"
                  required
                />
              </div> */}

              <div className="form-control">
                {working && (
                  <h1 className="text-2xl text-green-800">{working}</h1>
                )}
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <textarea
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=" bg-slate-400 resize-none"
                  name="message"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">email</span>
                </label>
                <textarea
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" bg-slate-400 resize-none"
                  name="message"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">phone</span>
                </label>
                <textarea
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className=" bg-slate-400 resize-none"
                  name="message"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">message</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className=" bg-slate-400 "
                  name="message"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary">
                  contact us now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
