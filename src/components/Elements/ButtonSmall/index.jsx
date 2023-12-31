const ButtonSmall = (props) => {
  const {
    children = "button",
    className = "light",
    onClick = () => {},
  } = props;

  let style =
    "bg-white px-4 py-2 border border-slate-800 text-slate-800 transition duration-500 shadow rounded-sm hover:bg-slate-800 hover:text-white hover:shadow-xl";

  if (className === "dark") {
    style =
      "bg-slate-800 px-4 py-2 border border-slate-800 text-white transition duration-500 shadow rounded-sm hover:bg-slate-950 hover:text-white hover:shadow-xl";
  }
  return (
    <button className={style} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default ButtonSmall;
