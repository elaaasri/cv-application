// custom func for inputs :
const CustomInput = ({ inputID, type, id, name, onChange }) => {
  return (
    <div id={inputID}>
      <label htmlFor={id}>{name} :</label>
      <input type={type} id={id} name={name} onChange={onChange} />
    </div>
  );
};
export default CustomInput;
