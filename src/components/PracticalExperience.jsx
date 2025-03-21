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
    <div className="practical-exp-form-container">
      <CustomButton
        name="Practical Experience"
        id="practicalEditButton"
        editIconSrc="/images/practical-exp-icon.png"
        editIconID="practicalExpIcon"
        dropDownIconSrc="/images/drop-down-icon.png"
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
          id="mainResponsibility"
          name="Main Responsibility"
          onChange={handleChange}
        />
        <CustomInput
          type="date"
          id="practicalStartDate"
          name="Start Date"
          onChange={handleChange}
        />
        <CustomInput
          type="date"
          id="practicalEndDate"
          name="End Date"
          onChange={handleChange}
        />
        <CustomInput
          type="textarea"
          id="practicalDesc"
          name="Description"
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
