import React from 'react'
import ContactCTA from '../sections/ContactCTA'
import { Helmet } from "react-helmet-async";

function ContactUs() {
  return (

    <>
      <Helmet>
        <title>Contact Us | Xlent IT Services</title>
        <meta name="description" content="Get in touch with Xlent IT Services for all your IT staffing, recruiting, and technology consulting needs." />
        <link rel="canonical" href="https://www.xlent-itservice.com/contact" />
      </Helmet>

      <ContactCTA />
    </>
  )
}

export default ContactUs