import emailjs from '@emailjs/browser'
import { useRef } from 'react'


const ContactForm = ({handleFormDislay, buttonStyles, disabledTime}) => {
    const refForm = useRef()
    const sendEmail = (e) => {
      e.preventDefault()
      emailjs.sendForm(
        'service_30sp5nj',
        'template_uplpxek',
        refForm.current,
        'Tx54hs_l7iI2HnO3l'
      ).then(() => {
        alert('Message Sent Successfully!')
        window.location.reload(false)
      }).catch(() => {
        alert("Error Sending Message. Try Again.")
      })
    }

    return(
        <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="user_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
              <button
                onClick={handleFormDislay}
                disabled={disabledTime}
                style={buttonStyles}
                className={`contact-buttons ${disabledTime ? 'disabled-button' : ''}`}
                >Hide Form</button>
            </form>
          </div>
    )
}

export default ContactForm