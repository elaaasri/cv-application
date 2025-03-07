export default function DisplayContainer({ data }) {
  const { fullName, email, phoneNumber } = data;
  return (
    <div id="displayContainer">
      <h1>CV</h1>
      <h2>{fullName}</h2>
      <h2>{email}</h2>
      <h2>{phoneNumber}</h2>
    </div>
  );
}
