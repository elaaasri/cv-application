const DisplayContainer = ({ generalData, educationalExpData }) => {
  console.log("Genera lData", generalData);
  const { fullName, email, phoneNumber } = generalData;
  const { schoolName, TitleOfStudy, dateOfStudy } = educationalExpData;

  // const {
  //   fullName,
  //   email,
  //   phoneNumber,
  //   schoolName,
  //   TitleOfStudy,
  //   dateOfStudy,
  // } = allData;
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
    </div>
  );
};
export default DisplayContainer;
