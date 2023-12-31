import FormLogin from "../components/Fragments/FormLogin";
import FormRegis from "../components/Fragments/FormRegis";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Sign Up" subTitle="Join with we" type={"regis"}>
      <FormRegis />
    </AuthLayouts>
  );
};

export default RegisterPage;
