// custom func for inputs :
const CustomInput = ({ inputID, type, id, name, onChange }) => {
  return (
    <div id={inputID}>
      <label htmlFor={id}>{name} :</label>
      {type == "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder="describe ur experience."
          rows="5"
          onChange={onChange}
        ></textarea>
      ) : (
        <input type={type} id={id} name={name} onChange={onChange} />
      )}
    </div>
  );
};
export default CustomInput;
