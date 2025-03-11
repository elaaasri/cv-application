import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
// get practical experience infos from input fields :
const PracticalExperience = ({
  handleChange,
  handleSubmitting,
  handleEditting,
  isFormVisible,
}) => {
  return (
    <>
      <form
        id="practicalExpForm"
        style={{ display: isFormVisible ? "flex" : "none" }}
      >
        <CustomInput
          type="text"
          id="companyName"
          name="Company Name"
          onChange={handleChange}
        />
        <CustomInput
          type="text"
          id="positionTitle"
          name="Position Title"
          onChange={handleChange}
        />
        <CustomInput
          type="text"
          id="mainResponsibilities"
          name="Main Responsibilities"
          onChange={handleChange}
        />
        <CustomInput
          type="range"
          id="workExperienceTimeline"
          name="Work Experience Timeline"
          onChange={handleChange}
        />
        <CustomButton
          type="submit"
          name="Submit"
          id="practicalExpSubmitButton"
          onClick={handleSubmitting}
        />
      </form>
      <CustomButton name="Edit" id="editButton" onClick={handleEditting} />
    </>
  );
};
export default PracticalExperience;
