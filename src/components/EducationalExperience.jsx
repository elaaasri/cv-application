import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
// get educational experience infos from input fields :
const EducationalExperience = ({
  handleChange,
  handleSubmitting,
  handleEditting,
  isFormVisible,
}) => {
  return (
    <div className="education-exp-container">
      <CustomButton
        name="Education Experience"
        id="educationEditButton"
        editIconSrc="/public/images/education-icon.png"
        editIconID="educationIcon"
        dropDownIconSrc="/public/images/drop-down-icon.png"
        dropDownIconID="drop-down-icon"
        onClick={handleEditting}
      />
      <form
        id="educationExpForm"
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
    </div>
  );
};
export default EducationalExperience;
