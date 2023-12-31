import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, type, name, placeholder, className } = props;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default InputForm;
