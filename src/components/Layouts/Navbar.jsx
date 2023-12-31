import { LuMenu } from "react-icons/lu";
import ButtonSmall from "../Elements/ButtonSmall";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full p-4 shadow sticky top-0 z-50 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Toko Saya</h1>
          <button className="md:hidden">
            <LuMenu className="w-8 h-8" />
          </button>
          <div className="gap-2 hidden md:flex">
            <ButtonSmall className="light" onClick={() => navigate("/login")}>
              Sign In
            </ButtonSmall>
            <ButtonSmall className="dark" onClick={() => navigate("/regis")}>
              Sign Up
            </ButtonSmall>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
