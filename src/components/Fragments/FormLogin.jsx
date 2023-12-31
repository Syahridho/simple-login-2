import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
  const navigate = useNavigate();
  const handleLogin = (event) => {
    const email = event.target.email.value;
    const password = event.target.email.value;
    console.log(email, password);
    navigate("/");
  };
  return (
    <div className="flex flex-col gap-4">
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="Syahridho@gmail.com"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="******"
      />
      <Button type="submit" onCLick={(e) => handleLogin(e)}>
        Sign In
      </Button>
    </div>
  );
};

export default FormLogin;
