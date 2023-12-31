import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts title="Sign In" subTitle="Sign in bro" type={"login"}>
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
