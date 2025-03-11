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
    <>
      <form
        id="generalInfosForm"
        style={{ display: isFormVisible ? "flex" : "none" }}
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
