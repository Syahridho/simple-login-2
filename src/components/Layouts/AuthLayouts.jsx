import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, subTitle, type } = props;
  return (
    <div className="px-8 flex justify-center pt-20 min-h-screen sm:px-0">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-slate-800 mb-2">{title}</h1>
        <p className="text-base text-slate-600 mb-8">{subTitle}</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = (props) => {
  const { type } = props;
  if (type === "login") {
    return (
      <p className="text-center text-slate-700">
        Dont have account?{" "}
        <Link to={"/regis"} className="text-slate-800 hover:underline">
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-center text-slate-700">
        Already have account?{" "}
        <Link to={"/Login"} className="text-slate-800 hover:underline">
          Sign In
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
