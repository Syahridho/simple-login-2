import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";

const FormRegis = () => {
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
      <InputForm
        label="Password Confirmation"
        name="passwordConfirmation"
        type="passwordConfirmation"
        placeholder="******"
      />
      <Button type="submit">Sign Up</Button>
    </div>
  );
};

export default FormRegis;
