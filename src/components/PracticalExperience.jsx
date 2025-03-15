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
    <div className="practical-exp-container">
      <CustomButton
        name="Practical Experience"
        id="practicalEditButton"
        editIconSrc="/public/images/practical-exp-icon.png"
        editIconID="practicalExpIcon"
        dropDownIconSrc="/public/images/drop-down-icon.png"
        dropDownIconID="drop-down-icon"
        onClick={handleEditting}
      />
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
    </div>
  );
};
export default PracticalExperience;
