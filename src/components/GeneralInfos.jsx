import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
// get general infos from input fields :
const GeneralInfos = ({
  handleChange,
  handleSubmitting,
  handleEditting,
  isFormVisible,
}) => {
  return (
    <div className="general-infos-form-container">
      <CustomButton
        name="General Details"
        id="generalEditButton"
        editIconSrc="/public/images/personal-icon.png"
        editIconID="personalIcon"
        dropDownIconSrc="/public/images/drop-down-icon.png"
        dropDownIconID="drop-down-icon"
        onClick={handleEditting}
      />
      <form
        id="generalInfosForm"
        style={{
          display: isFormVisible ? "flex" : "none",
        }}
      >
        <CustomInput
          inputID="fullNameInput"
          type="text"
          id="fullName"
          name="Full Name"
          onChange={handleChange}
        />
        <CustomInput
          inputID="emailInput"
          type="email"
          id="email"
          name="Email"
          value="zbe"
          onChange={handleChange}
        />
        <CustomInput
          inputID="phoneNumberInput"
          type="number"
          id="phoneNumber"
          name="Phone Number"
          onChange={handleChange}
        />
        <CustomInput
          inputID="cityAndProvinceInput"
          type="text"
          id="cityAndProvince"
          name="City And Province"
          onChange={handleChange}
        />
        <CustomButton
          type="submit"
          name="Submit"
          id="generalInfosSubmitButton"
          onClick={handleSubmitting}
        />
      </form>
    </div>
  );
};
export default GeneralInfos;
