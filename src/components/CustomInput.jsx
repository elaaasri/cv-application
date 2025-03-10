// custom func for inputs :
const CustomInput = ({ type, id, name, onChange }) => {
  return (
    <>
      <label htmlFor={id}>{name} :</label>
      <input type={type} id={id} name={name} onChange={onChange} />
    </>
  );
};
export default CustomInput;
