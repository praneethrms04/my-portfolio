import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Full Name</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="ENTER YOUR FULLNAME"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ENTER YOUR EMAIL"
        />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="ENTER YOUR SUBJECT"
        />
        <label>Message</label>
        <textarea
          name="message"
          id="message"
          rows="6"
          placeholder="Enter your message here"
        ></textarea>
        <button type="button" className="btn btn-outline-warning" >SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;
