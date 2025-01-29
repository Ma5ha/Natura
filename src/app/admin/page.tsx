import { twMerge } from "tailwind-merge";
import Input from "../components/input";
import { button } from "@/ui/variants";

const LoginPage: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <form className="card w-[400px] bg-white self-start m-auto space-y-5">
        <Input label="Email" placeholder="Enter email" />
        <Input label="Password" placeholder="Enter email" />

        <button className={twMerge(button(), "ml-auto")}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
