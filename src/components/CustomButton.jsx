// custom func for buttons :
const CustomButton = ({
  type,
  id,
  name,
  editIconSrc,
  editIconID,
  dropDownIconSrc,
  dropDownIconID,
  onClick,
}) => {
  return (
    <button type={type} id={id} onClick={onClick}>
      <img src={editIconSrc} id={editIconID} />
      {name}
      <img src={dropDownIconSrc} id={dropDownIconID} />
    </button>
  );
};
export default CustomButton;
