import { useState } from "react";
export default function GeneralInformation({ setData }) {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitting = (event) => {
    event.preventDefault();
    setData(value);
  };

  return (
    <div className="form-container">
      <form id="generalInformationForm">
        <label htmlFor="fullName">Name :</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          onChange={handleChange}
        />
        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" onChange={handleChange} />
        <label htmlFor="phoneNumber">Phone Number :</label>
        <input
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          onChange={handleChange}
        />
        <button id="edit">Edit</button>
        <button onClick={handleSubmitting}>Submit</button>
      </form>
    </div>
  );
}
