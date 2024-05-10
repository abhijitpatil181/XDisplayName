import { useState } from "react";
import Form from "./Form";

const DisplayName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setFirstName(event.target.firstName.value);
    setLastName(event.target.lastName.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Full Name Display</h1>
        <Form onSubmitHandler={onSubmitHandler} />
        {firstName !== "" && lastName !== "" && (
          <p style={{ fontSize: "1.2rem" }}>
            Full Name: {`${firstName} ${lastName}`}
          </p>
        )}
      </div>
    </>
  );
};

export default DisplayName;
