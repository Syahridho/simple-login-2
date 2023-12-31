const Input = (props) => {
  const { id, type, name, placeholder, className } = props;
  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full px-2 py-1 border rounded"
    />
  );
};

export default Input;
