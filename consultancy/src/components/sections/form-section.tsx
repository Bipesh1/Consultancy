import formimage from "@/assets/images/formimage.png"
import Inquiryform from '../inquiry-form'

export default function Formsection() {
  return (
    <div className='py-10 grid grid-cols-1 lg:grid-cols-2 space-y-10'>
        <img src={formimage} alt="" width={600} height={900} className='mx-auto' />
        <Inquiryform/>
    </div>
  )
}
