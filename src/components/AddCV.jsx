import { useState } from "react";
import DisplayContainer from "./DisplayContainer";
import GeneralInfos from "./GeneralInfos";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";

// app func to manipulate the dom :
const AddCV = () => {
  const [allData, setAllData] = useState({});
  const [formData, setFormData] = useState({
    general: {},
    education: {},
    practical: {},
  });
  const [isFormVisible, setFormVisibility] = useState({
    general: false,
    education: false,
    practical: false,
  });

  // handle change :
  const handleChange = (section) => (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [id]: value },
    }));
  };
  // handle submitting :
  const handleSubmitting = (section) => (e) => {
    e.preventDefault();
    setAllData(formData);
    setFormVisibility((prev) => ({ ...prev, [section]: false }));
  };
  // handle edditing :
  const handleEditting = (section) => (e) => {
    e.preventDefault();
    setFormVisibility((prev) => ({
      ...prev,
      [section]: !prev[section], // toggles form visibility!
    }));
  };

  return (
    <>
      <div className="forms-container">
        <GeneralInfos
          handleChange={handleChange("general")}
          handleSubmitting={handleSubmitting("general")}
          handleEditting={handleEditting("general")}
          isFormVisible={isFormVisible.general}
        />
        <EducationalExperience
          handleChange={handleChange("education")}
          handleSubmitting={handleSubmitting("education")}
          handleEditting={handleEditting("education")}
          isFormVisible={isFormVisible.education}
        />
        <PracticalExperience
          handleChange={handleChange("practical")}
          handleSubmitting={handleSubmitting("practical")}
          handleEditting={handleEditting("practical")}
          isFormVisible={isFormVisible.practical}
        />
      </div>
      <DisplayContainer {...allData} />
    </>
  );
};
export default AddCV;
