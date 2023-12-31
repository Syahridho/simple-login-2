const Label = (props) => {
  const { htmlFor, children = "Label" } = props;
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
