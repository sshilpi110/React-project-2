import React from 'react'
import Button from "./Button"
import styles from "./ContactForm.module.css"
import {useState} from "react"

import { MdMessage } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { HiMail } from "react-icons/hi"


const ContactForm = () => {
  const [name, setName] = useState("Shilpi");
const [email, setEmail] = useState("shilpi.bbs@gmail.com");
const [text, setText] = useState("subscribe my channel")


  const onSubmit = (event) => {
    event.preventDefault()
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)

    console.log(event)
  }




  return (
    <section className={styles.container}>

      <div className={styles.contact_form}>
        <div className={styles.top_btn}>

          <Button text="VIA SUPPORT CHAT" icon={<MdMessage font-size="24px" />} />

          <Button
            // onclick={onViaCallSubmit}
            text="VIA CALL" icon={<FaPhoneAlt font-size="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM" icon={<HiMail font-size="24px" />} />

        <form onSubmit={onSubmit}>
          <div className={styles.form_controle}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" /></div>

          <div className={styles.form_controle}>
            <label htmlFor="name">EMAIL</label>
            <input type="text" name="EMAIL" />
          </div>



          <div className={styles.form_controle}>
            <label htmlFor="text">TEXT</label>
            <textarea name="text" rows="8" />
          </div>

          <div

            style={{
              display: "flex",
              marginLeft: "480px",
              // justifyContent:"end"

            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>{name + " " + email + " " + text}</div>

        </form>
      </div>

      <div className={styles.container_image}>
        <img src="/Images/download.png" alt="service lady" width="700px" />
      </div>
    </section>
  )
}

export default ContactForm
