import React from 'react'
import { Cancellation, MainContainer, Statement  } from './PolicyStyles'

const Policy = () => {
  return (
    <MainContainer>
      <Cancellation>Appointment & Cancellation Policy</Cancellation>

      <Statement>
        All service are by appointment only. Everyone's time is precious. Please be considerate and on time. A
        credit card is required to reserve your appointment for any service. If you are a NO-SHOW or cancel (re-
        schedule) same day, you will be charged 50% of the srvice price or coupon will cover the appointment.
        If you are late more than 15 minutes it will be considered a no-show.<br/>
        <br/>
        If any changes to your appointment day or time need to be made please contact me no less than 36 hours 
        prior to your scheduled time.<br/>
        <br/>
        NO FEFUND or RETURNS on goods or services. Packages cannot be redeemed toward other services or refund. 
        Both our packages and gift certificates have no expiration date.<br/>
        <br/>
        Please note that requesting an appointment dagte and time does not guarantee that the requested time and 
        date will be available. Will best of our ability to accommodate all requests and come as close to your desired
        requested appointment time as possible.<br/>
        <br/>
        NO GROUP APPOINTMENTS.<br/>
        <br/>
        Email is Best way to contact us - Please leave your name/ phone number/ and a detailed message.
        Thank You!<br/>
        <br/>
        <p style={{textAlign:"center", fontWeight: "bold"}}>HeidiSKIN16</p>
      </Statement>
    </MainContainer>
  )
}

export default Policy