import NewVerificationForm from "../../../components/auth/new-verification-form"
import Image from "next/image"
import Link from "next/link"

const NewVerifivationPage = () => {
  return (
    <div
      className="flex h-full flex-col items-center justify-center 
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
    from-[#4942E4] to-[#0D1117] "
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
        <NewVerificationForm/>
        </div>
         
    </div>
  )
}

export default NewVerifivationPage