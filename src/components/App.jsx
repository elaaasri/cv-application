import { useState } from "react";
import DisplayContainer from "./DisplayContainer";
import GeneralInfos from "./GeneralInfos";
import EducationalExperience from "./EducationalExperience";

// app func to manipulate the dom :
const App = () => {
  const [formData, setFormData] = useState({});
  const [generalData, setGeneralData] = useState({});
  const [educationalExpData, setEducationalExpData] = useState({});
  const [isGeneralFormVisible, setGeneralFormVisiblity] = useState(true);
  const [isEducationalFormVisible, setEducationalFormVisiblity] =
    useState(true);

  // handle change state :
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // handle submitting :
  const handleGeneralInfosSubmitting = (e) => {
    e.preventDefault();
    setGeneralData(formData);
    setGeneralFormVisiblity(false);
  };
  const handleEducationExpSubmitting = (e) => {
    e.preventDefault();
    setEducationalExpData(formData);
    setEducationalFormVisiblity(false);
  };
  // handle editting :
  const handleGeneralInfoEditting = (e) => {
    e.preventDefault();
    setGeneralFormVisiblity(true);
  };
  const handleEducationalExpEditting = (e) => {
    e.preventDefault();
    setEducationalFormVisiblity(true);
  };

  return (
    <>
      <div className="form-container">
        <GeneralInfos
          handleChange={handleChange}
          handleSubmitting={handleGeneralInfosSubmitting}
          handleEditting={handleGeneralInfoEditting}
          isFormVisible={isGeneralFormVisible}
        />
        <EducationalExperience
          handleChange={handleChange}
          handleSubmitting={handleEducationExpSubmitting}
          handleEditting={handleEducationalExpEditting}
          isFormVisible={isEducationalFormVisible}
        />
      </div>
      <DisplayContainer
        generalData={generalData}
        educationalExpData={educationalExpData}
      />
    </>
  );
};
export default App;

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
