// custom func for buttons :
const CustomButton = ({ type, id, name, onClick }) => {
  return (
    <button type={type} id={id} onClick={onClick}>
      {name}
    </button>
  );
};
export default CustomButton;
