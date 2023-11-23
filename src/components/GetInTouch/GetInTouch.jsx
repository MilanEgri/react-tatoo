import React, { useState } from "react";
import "./GetInTouch.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function viewPage(URL) {
    window.open(URL, "_blank");
  }
  function clearInputs(){
    setName('');
    setMessage('');
    setEmail('');
  }
  function handleSumbmit(e){
    e.preventDefault();
    clearInputs();
  }
  return (
    <div className="get-in-touch">
      <h1>Get in touch with me:</h1>
      <div className="get-in-touch-main">
        <div className="get-in-touch-offices">
          <div className="get-in-touch-office">
            <h3>La Office</h3>
            <p className="get-in-touch-office-text">
              In velit arcu posuere integer sit amet, consectetur nun adipiscing
              elit. Duis porttitor massa tellus
            </p>
            <p className="get-in-touch-office-data">
              <span>
                <FaLocationDot />
              </span>
              <span> 784 Norman Street, Los Angeles</span>
            </p>
            <p className="get-in-touch-office-data">
              <span>
                {" "}
                <FaPhone />{" "}
              </span>
              <span> +49 93 30493943 </span>
            </p>
            <p className="get-in-touch-office-data">
              <span>
                {" "}
                <TfiEmail />
              </span>
              <span> contact@thevoidtatoo.com</span>
            </p>
            <p
              onClick={(e) =>
                viewPage(
                  "https://www.google.com/maps/place/784+N+Norman+Pl,+Los+Angeles,+CA+90049,+Egyesült+Államok/@34.0742882,-118.4790977,16z/data=!4m5!3m4!1s0x80c2bcc940a3d067:0x633ad94f818d2747!8m2!3d34.0742882!4d-118.4790977?hl=hu-hu&source=lnms"
                )
              }
              className="get-in-touch-office-get-location"
            >
              Get location
            </p>
          </div>
          <div className="get-in-touch-office">
            <h3>Nyc Office</h3>
            <p className="get-in-touch-office-text">
              Sit amet, consectetur nun in velit arcu posuere integer.
              Adipiscing elit duis porttitor massa tellus{" "}
            </p>
            <p className="get-in-touch-office-data">
              <span>
                <FaLocationDot />
              </span>
              <span>1630 Elm Drive, New York City</span>
            </p>
            <p className="get-in-touch-office-data">
              <span>
                {" "}
                <FaPhone />{" "}
              </span>
              <span> +49 34 36573355 </span>
            </p>
            <p className="get-in-touch-office-data">
              <span>
                {" "}
                <TfiEmail />
              </span>
              <span> contact@thevoidtatoo.com</span>
            </p>
            <p
              onClick={(e) =>
                viewPage(
                  "https://www.google.com/maps/place/1630+Elm+Dr,+Bronx,+NY+10462,+Egyesült+Államok/@40.8417706,-73.856405,15z/data=!4m5!3m4!1s0x89c2f4ba363c8abb:0x924c7a7119741bf7!8m2!3d40.8417706!4d-73.856405?hl=hu-hu&source=lnms"
                )
              }
              className="get-in-touch-office-get-location"
            >
              Get location
            </p>
          </div>
        </div>
        <form className="get-in-touch-offices-form" onSubmit={e => handleSumbmit(e)}>
          <input
            type="text"
            name="name"
            placeholder="Write your name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Write your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="message"
            placeholder="Write your messages here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>
            Send it
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
