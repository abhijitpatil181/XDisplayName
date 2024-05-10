import { useState } from "react";

const Form = ({ onSubmitHandler }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div style={{ margin: "1rem 0" }}>
          <label htmlFor="firstName" style={{ fontSize: "1.2rem" }}>
            First Name:
          </label>
          <input
            type="text"
            value={firstName}
            id="firstName"
            onChange={(event) => setFirstName(event.target.value)}
            style={{ height: "1.2rem" }}
            required
          />
        </div>

        <div style={{ margin: "1rem 0" }}>
          <label htmlFor="lastName" style={{ fontSize: "1.2rem" }}>
            Last Name:
          </label>
          <input
            type="text"
            value={lastName}
            id="lastName"
            onChange={(event) => setLastName(event.target.value)}
            style={{ height: "1.2rem" }}
            required
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem 0",
          }}
        >
          <button type="submit" style={{ fontSize: "1rem" }}>
            Submit
          </button>
          {/* <input type="submit" value="Submit" style={{ fontSize: "1rem" }} /> */}
        </div>
      </form>
    </>
  );
};

export default Form;
