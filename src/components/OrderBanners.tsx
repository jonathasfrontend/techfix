import { At, CalendarBlank, CheckCircle, FileText, MapPin, Phone, SquaresFour, UserCircle } from "@phosphor-icons/react"
interface OrderBannerProps{
    name: string,
    address: string,
    number: string,
    cpf: string,
    email: string,
    devicedescription: string,
    defectdescription: string,
    category: string,
    status: string,
    createdAt: string,
  }

export function OrderBanners(props: OrderBannerProps){
    return(
      <div className="w-full h-full rounded-md border-solid border-2 text-white border-green-500 bg-[#121214b8] px-5 py-2 mb-3 overflow-hidden">
        <h1 className='flex items-center text-2xl font-semibold'><UserCircle size={25} className='mr-1' />{props.name}</h1>
        <div className='w-full flex items-center justify-between mt-2'>
          <h1 className='flex items-center'><Phone size={20} className='mr-1' />{props.number}</h1>
          <h1 className='flex items-center'><FileText size={20} className='mr-1' />{props.cpf}</h1>
          <h1 className='flex items-center'><At size={20} className='mr-1' />{props.email}</h1>
        </div>
        <span className='flex items-center my-2'><MapPin size={20} className='mr-1'/>{props.address}</span>
        <div className='flex flex-col gap-2'>
            <div>
              <span className='text-base text-zinc-600 font-medium mr-1'>Modelo</span>
              <div className="bg-[#19191d] p-2 rounded-md">
                {props.devicedescription}
              </div>
            </div>
            <div>
              <span className='text-base text-zinc-600 font-medium mr-1'>Descrição do defeito</span>
              <div className="bg-[#19191d] p-2 rounded-md">
                {props.defectdescription}
              </div>
            </div>
        </div>
        <div className='w-full mt-2 flex items-center justify-between'>
          <div className='flex items-center gap-5'>
            <h1 className='flex items-center'><SquaresFour size={20} className='mr-1'/>{props.category}</h1>
            <h1 className='flex items-center'><CalendarBlank size={20} className='mr-1'/>{props.createdAt}</h1>
          </div>
          <h1 className='flex items-center bg-green-500 p-1 rounded-md'><CheckCircle size={20} className='mr-1'/>{props.status}</h1>
          {/* <h1 className='flex items-center bg-sky-600 p-1 rounded-md'><Wrench size={20} className='mr-1'/>Mantutenção</h1>
          <h1 className='flex items-center bg-red-600 p-1 rounded-md'><WarningOctagon size={20} className='mr-1'/>Fechado</h1> */}
        </div>
      </div>
    )
}