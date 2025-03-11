import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
// get educational infos from input fields :
const EducationalExperience = ({
  handleChange,
  handleSubmitting,
  handleEditting,
  isFormVisible,
}) => {
  return (
    <>
      <form
        id="educationalExpForm"
        style={{ display: isFormVisible ? "flex" : "none" }}
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
