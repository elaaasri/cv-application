// import { useState } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

// get general infos from input fields :
const GeneralInfos = ({
  handleChange,
  handleSubmitting,
  handleEditting,
  isGeneralFormVisible,
}) => {
  return (
    <>
      <form
        id="generalInfosForm"
        style={{ display: isGeneralFormVisible ? "flex" : "none" }}
      >
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
          value="zbe"
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
          id="generalInfosSubmitButton"
          onClick={handleSubmitting}
        />
      </form>
      <CustomButton name="Edit" id="editButton" onClick={handleEditting} />
    </>
  );
};
export default GeneralInfos;
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
