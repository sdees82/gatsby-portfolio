import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import Arrow from "../images/blackArrow.png";
import Link from "gatsby-link";
import Navbar from "../components/navbar";
import Video from '../components/video';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then()
      .catch(error => alert(error));
      this.props.history.push('/thanks');
    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <Navbar/>
        <Video/>
           <div className="overlay"/>
     <header className="work">
       <CSSTransitionGroup
         transitionName="workTransition"
         transitionAppear={true}
         transitionAppearTimeout={500}
         transitionEnter={false}
         transitionLeave={false}
       >
      <form className="form" onSubmit={this.handleSubmit}>
        <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      </CSSTransitionGroup>
      </header>
      <Link to="/work" className="arrowBack">
        <img src={Arrow} alt="arrow icon" />
       </Link>
       <Link to="/" className="arrow">
         <img src={Arrow} alt="arrow icon" />
       </Link>
      </div>
    );
  }
}

export default Contact;
// const Contact = () => {
//   return (
//       <div>
//           <Navbar/>
//           <Video/>
//           <div className="overlay"/>
//     <header className="work">
//       <CSSTransitionGroup
//         transitionName="workTransition"
//         transitionAppear={true}
//         transitionAppearTimeout={500}
//         transitionEnter={false}
//         transitionLeave={false}
//       >
//         <form className="form" data-netlify="true" data-netlify-honeypot="bot-field" action="/thanks">
//         <input type="hidden" name="form-name" value="contact" />
//   <h1>CONTACT ME</h1>
//   <p><input  type="Name:" placeholder="John Doe" required></input></p>
//   <p ><input type="Email:" placeholder="johndoe@gmail.com" required></input></p>
//   <p ><textarea name="message" required></textarea></p>
//   <button>Send Message</button>
// </form>
//       </CSSTransitionGroup>
//     </header>
//     <Link to="/work" className="arrowBack">
//         <img src={Arrow} alt="arrow icon" />
//       </Link>
//       <Link to="/" className="arrow">
//         <img src={Arrow} alt="arrow icon" />
//       </Link>
//     </div>
//   );
// };

// export default Contact;
