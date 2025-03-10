import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

// get general infos from input fields :
const EducationalExperience = ({
  handleChange,
  handleSubmitting,
  handleEditting,
  isEducationalFormVisible,
}) => {
  return (
    <>
      <form
        id="educationalExpForm"
        style={{ display: isEducationalFormVisible ? "flex" : "none" }}
      >
        <CustomInput
          type="text"
          id="schoolName"
          name="School Name"
          onChange={handleChange}
        />
        <CustomInput
          type="text"
          id="TitleOfStudy"
          name="Title of Study"
          onChange={handleChange}
        />
        <CustomInput
          type="date"
          id="dateOfStudy"
          name="Date of Study"
          onChange={handleChange}
        />
        <CustomButton
          type="submit"
          name="Submit"
          id="educationExpSubmitButton"
          onClick={handleSubmitting}
        />
      </form>
      <CustomButton name="Edit" id="editButton" onClick={handleEditting} />
    </>
  );
};
export default EducationalExperience;
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
