import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import ContactForm from './ContactForm'
import { useState, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const buttonStyles = {
  background: 'black',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '12px',
  padding: '8px 10px',
  border: '1px solid white',
  borderRadius: '4px'
}

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [showContactForm, setShowContactForm] = useState(false)
    const [disabledTime, setDisabledTime] = useState(false)

    const handleFormDislay = () => {
      setShowContactForm(!showContactForm);
    }
    useEffect(() => {
      setDisabledTime(true)
      setTimeout(() => {
        setDisabledTime(false)
      }, 800)
    }, [showContactForm])
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    return (
        <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div>
            {!showContactForm &&
            <button
              onClick={handleFormDislay}
              disabled={disabledTime}
              style={buttonStyles}
              className={`contact-buttons ${disabledTime ? 'disabled-button' : ''}`}
            >CONTACT US</button>}
          </div>
          {showContactForm && 
            <ContactForm 
              handleFormDislay={handleFormDislay}
              buttonStyles={buttonStyles}
              disabledTime={disabledTime}
          />}
        </div>
        <div className="info-map">
          Akumu Joseph Owino,
          <br />
          Westlands,
          <br />
          Nairobi,
          <br />
          Kenya<br />
          <br />
          <span>josephowino7@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-1.2648448, 36.7198208]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-1.2648448, 36.7198208]}>
              <Popup>Dr Akumu J lives here :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
    )
}


export default Contact