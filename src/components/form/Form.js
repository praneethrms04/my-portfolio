import { useNavigate } from "react-router-dom";
import "./FormStyles.css";

const Form = () => {
  const navigate = useNavigate()
  const submitHandler =()=>{
    
    alert("You have successfully submitted...Go to Home")
    navigate('/')
  }
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <label>Full Name</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          required
          placeholder="ENTER YOUR FULLNAME"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="ENTER YOUR EMAIL"
        />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          placeholder="ENTER YOUR SUBJECT"
        />
        <label>Message</label>
        <textarea
          name="message"
          id="message"
          rows="6"
          required
          placeholder="Enter your message here"
        ></textarea>
        <button type="submit"  className="btn btn-outline-warning">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;
