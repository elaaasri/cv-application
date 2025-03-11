// display content :
const DisplayContainer = ({
  generalData,
  educationalExpData,
  practicalExpData,
}) => {
  const { fullName, email, phoneNumber } = generalData;
  const { schoolName, TitleOfStudy, dateOfStudy } = educationalExpData;
  const {
    companyName,
    positionTitle,
    mainResponsibilities,
    workExperienceTimeline,
  } = practicalExpData;

  return (
    <div id="displayContainer">
      <h1>CV</h1>
      <h2>{fullName}</h2>
      <h2>{email}</h2>
      <h2>{phoneNumber}</h2>
      <hr />
      <h2>{schoolName}</h2>
      <h2>{TitleOfStudy}</h2>
      <h2>{dateOfStudy}</h2>
      <hr />
      <h2>{companyName}</h2>
      <h2>{positionTitle}</h2>
      <h2>{mainResponsibilities}</h2>
      <h2>{workExperienceTimeline}</h2>
    </div>
  );
};
export default DisplayContainer;
