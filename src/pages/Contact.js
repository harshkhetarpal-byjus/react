import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Inputs from "../components/Inputs";
import Button from "../components/Button";

const Contact = () => {
  return (
    <>
      <div className="container-full">
        <Header />

        <div className="row p-0 m-0 mt-5 mb-5">
          <div className="col-lg-5 offset-lg-1">
            <div className="row">

              <div className="col-lg-10 offset-lg-1 m-2">
                <label htmlFor="name">Name</label>
                <Inputs type={"text"} inputName={"name"} id={"name"} placeholder={"Your Name."} />
              </div>
              
              <div className="col-lg-10 offset-lg-1 m-2">
                <label htmlFor="email">Email</label>
                <Inputs type={"email"} inputName={"email"} id={"email"} placeholder={"Your Email Address."} />
              </div>


              <div className="col-lg-10 offset-lg-1 m-2">
                <label htmlFor="mobile">Mobile</label>
                <Inputs type={"number"} inputName={"mobile"} id={"mobile"} placeholder={"Your Mobile Number"} />
              </div>
              <div className="col-lg-10 offset-lg-1 m-2">
                <Button title={"Contact Us"} styleType={"btn-primary"} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Heading title={ "Contact Us" } type={2} />
            <Paragraph text={"Feel Free To contact us anytime."} />
          </div>
        </div>

        <div className="row p-0">
          <div className="col-lg-12">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
