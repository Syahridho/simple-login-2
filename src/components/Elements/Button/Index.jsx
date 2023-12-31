const Button = (props) => {
  const {
    children = "Button",
    type = "submit",
    className = "slate",
    onClick = () => {},
  } = props;
  return (
    <button
      type={type}
      className={`w-full py-2 my-4 bg-${className}-800 text-white border border-${className}-800 rounded`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
