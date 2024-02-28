import {RotateLoader} from "react-spinners"

const loading = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <RotateLoader/>
    </div>
  )
}

export default loading