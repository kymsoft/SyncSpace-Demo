import { ErrorCard } from "../../../components/auth/error-card";

const AuthErrorPage = () => {
  return ( 
    <div className="flex h-full flex-col items-center justify-center 
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
    from-[#9400FF] to-[#0D1117]">
        <ErrorCard />
    </div>
    
  );
};
 
export default AuthErrorPage;