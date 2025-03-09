import { useState } from "react";
// get general infos from input fields :
export default function GeneralInfos({ sendData }) {
  const [generalData, setGeneralData] = useState({});
  const [isFormVisible, setFormVisibility] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setGeneralData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmitting = (e) => {
    e.preventDefault();
    sendData(generalData);
    setFormVisibility(false);
  };

  const handleEditting = (e) => {
    e.preventDefault();
    setFormVisibility(true);
  };

  return (
    <div className="form-container">
      {isFormVisible ? (
        <form id="generalInfosForm">
          <CustomInput
            type="text"
            id="fullName"
            name="Name"
            onChange={handleChange}
          />
          <CustomInput
            type="email"
            id="email"
            name="Email"
            onChange={handleChange}
          />
          <CustomInput
            type="number"
            id="phoneNumber"
            name="Phone Number"
            onChange={handleChange}
          />
          <CustomButton
            type="submit"
            name="Submit"
            id="submitButton"
            onClick={handleSubmitting}
          />
        </form>
      ) : null}
      <CustomButton name="Edit" id="editButton" onClick={handleEditting} />
    </div>
  );
}
// custom func for buttons :
const CustomButton = ({ type, id, name, onClick }) => {
  return (
    <button type={type} id={id} onClick={onClick}>
      {name}
    </button>
  );
};
// custom func for inputs :
const CustomInput = ({ type, id, name, onChange }) => {
  return (
    <>
      <label htmlFor={id}>{name} :</label>
      <input type={type} id={id} name={name} onChange={onChange} />
    </>
  );
};

/**
 * hide the form
 * add previous infos as a values
 * able to edit inputs
 * able resubmit the content
 */

// CV app :
// 1- sections:
//  ==> general information (name, email, phone num)
//  ==> educational experience (school name, title of study and date of study)
//  ==> practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)

// 2- each section has an edit and submit button.
//  ==> submit button :
//      # should display value of input fields in html elemens.
//  ==> edit button :
//      # should display the input fields again (with previously information as values inside).
//      # able to edit and resumbit the content.
