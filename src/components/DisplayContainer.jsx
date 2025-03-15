// display content :
const DisplayContainer = ({ general = {}, education = {}, practical = {} }) => {
  return (
    <div className="displayContainer">
      <h1>CV</h1>
      <h2>{general.fullName}</h2>
      <h2>{general.email}</h2>
      <h2>{general.phoneNumber}</h2>
      <hr />
      <h2>{education.schoolName}</h2>
      <h2>{education.TitleOfStudy}</h2>
      <h2>{education.dateOfStudy}</h2>
      <hr />
      <h2>{practical.companyName}</h2>
      <h2>{practical.positionTitle}</h2>
      <h2>{practical.mainResponsibilities}</h2>
      <h2>{practical.workExperienceTimeline}</h2>
    </div>
  );
};
export default DisplayContainer;
