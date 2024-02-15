import { RegisterForm } from "../../../components/auth/register-form";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    
      <div
      className="flex flex-col items-center justify-center 
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
    from-[#4942E4] to-[#0D1117] "
    >
      <div className="space-y-6  my-6">
        <div className="flex justify-center items-center ">
          <Link href="/">
            <Image
              src="/assets/sync.png"
              alt="SyncSpace Logo"
              width={70}
              height={70}
              className="mx-auto bg-[#D9D9D9] p-3 rounded-full"
            />
          </Link>
        </div>
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-semibold text-white drop-shadow-md">
            Sign Up
          </h1>
          <p className="text-white text-lg">Get Started with SyncSpace</p>
        </div>

        <RegisterForm />
      </div>
      <div className=" gap-5 flex w-full mb-3 p-3 items-center justify-center text-center">
        <Link href="" className="text-white">
          Terms and Conditions
        </Link>
        <Link href="" className="text-white">
          Team
        </Link>
        <Link href="" className="text-white">
          Contact and Support
        </Link>
        <p className="text-white">@Final Year Project 2024</p>
      </div>
    </div>
      
   
    
  );
};

export default SignUp;
