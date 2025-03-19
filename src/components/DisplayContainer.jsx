// display content :
const DisplayContainer = ({ general = {}, education = {}, practical = {} }) => {
  return (
    <div className="displayContainer">
      <div className="general-container">
        <h2>{general.fullName}</h2>
        <div id="generalSecondDiv">
          <div id="generalEmailDiv">
            <i className="fa-solid fa-envelope"></i>
            <p>{general.email}</p>
          </div>
          <div id="generalPhoneDiv">
            <i className="fa-solid fa-phone"></i>
            <p>{general.phoneNumber}</p>
          </div>
          <div id="generalLocationDiv">
            <i className="fa-solid fa-location-dot"></i>
            <p>{general.cityAndProvince}</p>
          </div>
        </div>
      </div>
      <div className="education-container">
        <h3>Education</h3>
        <div>
          <div id="educationFirstDiv">
            <p>{education.educationStartDate}</p>
            <p>{education.educationEndDate}</p>
          </div>
          <div id="educationSecondDiv">
            <p>{education.schoolName}</p>
            <p>{education.TitleOfStudy}</p>
          </div>
        </div>
      </div>
      <div className="practical-container">
        <h3>Practical Experience</h3>
        <div>
          <div id="practicalFirstDiv">
            <p>{practical.practicalStartDate}</p>
            <p>{practical.practicalEndDate}</p>
          </div>
          <div id="practicalSecondDiv">
            <p>{practical.companyName}</p>
            <p>{practical.positionTitle}</p>
            <p>{practical.mainResponsibility}</p>
            <p>{practical.practicalDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DisplayContainer;
