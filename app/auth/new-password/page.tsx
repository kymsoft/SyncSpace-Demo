import Image from "next/image"
import Link from "next/link"
import {NewPasswordForm} from "../../../components/auth/new-password-form"

const NewPasswordPage = () => {
  return (
    <div
      className="flex h-full flex-col items-center justify-center 
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
    from-[#9400FF] to-[#0D1117] "
    >
        <div className="space-y-6 my-16">
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
        <NewPasswordForm />
        </div>
         
    </div>
  )
}

export default NewPasswordPage