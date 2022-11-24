import { useState, useRef, useEffect } from "react";
import ContactImg from "../../assets/contactImg.png";
import ContactModal from "../modal/ContactModal";
import LightSpeed from "react-reveal/LightSpeed";
import Rotate from "react-reveal/Rotate";
import "./Contact.css";

const Contact = () => {
  const [opencontact, setOpencontact] = useState(false);
  const [loader, SetLoader] = useState(false);

  const contactInput1 = useRef();
  const contactInput2 = useRef();
  const contactInput3 = useRef();
  const message = useRef();

  const sendContentForm = (e) => {
    e.preventDefault();
  };

  const sendContent = () => {
    SetLoader(true);
    setTimeout(() => {
      if (
        !contactInput1.current.value.trim().length ||
        !contactInput1.current.value
          .trim()
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) ||
        !contactInput2.current.value.trim().length ||
        !contactInput3.current.value.trim().length ||
        !message.current.value.trim().length
      ) {
        return;
      }

      setOpencontact(true);
    }, 1000);

    setTimeout(() => {
      setOpencontact(false);
      // SetLoader(false);
      if (
        contactInput1.current.value.trim().length &&
        contactInput1.current.value
          .trim()
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) &&
        contactInput2.current.value.trim().length &&
        contactInput3.current.value.trim().length &&
        message.current.value.trim().length
      ) {
        contactInput1.current.value = "";
        contactInput2.current.value = "";
        contactInput3.current.value = "";
        message.current.value = "";
      }
    }, 5000);

    setTimeout(() => {
      SetLoader(false);
    }, 1000);
  };

  useEffect(() => {
    const body = document.body;
    if (opencontact) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }
  }, [opencontact]);

  return (
    <div className="contact" id="contact">
      <LightSpeed left>
        <div className="rubberFlex">
          <div className="rubberBand">C</div>
          <div className="rubberBand">o</div>
          <div className="rubberBand">n</div>
          <div className="rubberBand">t</div>
          <div className="rubberBand">a</div>
          <div className="rubberBand">c</div>
          <div className="rubberBand" style={{ marginRight: "1.2vw" }}>
            t
          </div>
          <div className="rubberBand">m</div>
          <div className="rubberBand">e</div>
        </div>
      </LightSpeed>
      <div className="contact__wrapper">
        <div className="contact__form">
          <form onSubmit={sendContentForm}>
            <div className="emailName">
              <input
                ref={contactInput3}
                type="text"
                placeholder="Name"
                name="name"
                required={true}
              />

              <input
                ref={contactInput1}
                type="email"
                placeholder="Email"
                name="email"
                required={true}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              ref={contactInput2}
              name="name"
              required={true}
            />

            <textarea
              ref={message}
              placeholder="Message"
              cols="30"
              rows="8"
              name="name"
              required={true}
            />

            <Rotate bottom left>
              <button className="button2" onClick={sendContent}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {loader ? "loader..." : "Send message!"}
              </button>
            </Rotate>
          </form>
        </div>
        <div className="contact__img">
          <img src={ContactImg} alt="" />
        </div>
      </div>
      {opencontact ? <ContactModal /> : null}
    </div>
  );
};

export default Contact;
