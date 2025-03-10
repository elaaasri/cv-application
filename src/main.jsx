import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import DisplayContainer from "./components/DisplayContainer";
import GeneralInfos from "./components/FormContainer";
import EducationalExperience from "./components/EducationalExperience";

const App = () => {
  const [formData, setFormData] = useState({});
  const [generalData, setGeneralData] = useState({});

  const [educationalExpData, setEducationalExpData] = useState({});

  const [generalInfosObj, setGeneralInfosObj] = useState({
    generalData: {},
    isGeneralFormVisible: true,
  });

  const [educationInfosObj, setEducationInfosObj] = useState({
    educationalExpData: {},
    isEducationalFormVisible: true,
  });

  // const [isFormVisible, setFormVisibility] = useState(true);
  // const [isGeneralFormVisible, setGeneralFormVisibility] = useState(true);
  // const [isEducationalFormVisible, setEducationalFormVisibility] =
  //   useState(true);

  // const generalInfosObj = {
  //   generalData: {},
  //   isGeneralFormVisible: true,
  // };

  // const educationalExpObj = {
  //   educationalExpData: {},
  //   isEducationalFormVisible: true,
  // };

  // handle change state :
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmitting = (e) => {
    e.preventDefault();
    setGeneralInfosObj((prev) => ({ ...prev, isGeneralFormVisible: false }));
    setEducationInfosObj((prev) => ({
      ...prev,
      isEducationalFormVisible: false,
    }));
  };

  const handleEditting = (e) => {
    e.preventDefault();
    setGeneralInfosObj((prev) => ({ ...prev, isGeneralFormVisible: true }));
    setEducationInfosObj((prev) => ({
      ...prev,
      isEducationalFormVisible: true,
    }));

    // setGeneralFormVisibility(true);
    // setEducationalFormVisibility(true);
  };

  // GENERAAAAAAAAAAAAL :
  // const handleGeneralInfosSubmitting = (e) => {
  //   e.preventDefault();
  //   setGeneralData(formData);
  //   setGeneralDataZbe((prev) => ({ ...prev, isGeneralFormVisible: false }));

  //   console.log();

  //   // generalInfosObj.isGeneralFormVisible = false;
  //   // setGeneralFormVisibility(false);
  // };

  // const handleEducationExpSubmitting = (e) => {
  //   e.preventDefault();
  //   setEducationalExpData(formData);
  //   educationalExpObj.isEducationalFormVisible = false;
  //   console.log(
  //     "zaaaaaaaaaaaaaaaaaa",
  //     educationalExpObj.isEducationalFormVisible
  //   );
  //   // setEducationalFormVisibility(false);
  // };

  // // handle editting :
  // const handleEditting = (e) => {
  //   e.preventDefault();
  //   // setGeneralFormVisibility(true);
  //   // setEducationalFormVisibility(true);
  // };

  return (
    <>
      <div className="form-container">
        <GeneralInfos
          handleChange={handleChange}
          handleSubmitting={handleSubmitting}
          handleEditting={handleEditting}
          isGeneralFormVisible={generalInfosObj.isGeneralFormVisible}
        />
        {/*  */}
        <EducationalExperience
          handleChange={handleChange}
          handleSubmitting={handleSubmitting}
          handleEditting={handleEditting}
          isEducationalFormVisible={educationInfosObj.isEducationalFormVisible}
        />
      </div>
      <DisplayContainer
        // allData={allData}
        generalData={generalData}
        educationalExpData={educationalExpData}
      />
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

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

// working to fix submit button to take the data to the display container component instead of showing it directly!
