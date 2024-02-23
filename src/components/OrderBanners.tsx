import { useEffect, useState } from 'react';
import { At, CalendarBlank, CheckCircle, FileText, MapPin, Phone, Tag, UserCircle, Wrench, WarningCircle } from "@phosphor-icons/react";

interface OrderBannerProps {
  name: string;
  address: string;
  number: string;
  cpf: string;
  email: string;
  devicedescription: string;
  defectdescription: string;
  category: string;
  status: string;
  createdAt: string;
}

export function OrderBanners(props: OrderBannerProps) {
  const [statusColor, setStatusColor] = useState('');
  const [statusText, setStatusText] = useState<JSX.Element | null>(null);
  const [statusBgColor, setStatusBgColor] = useState('');

  useEffect(() => {
    if (props.status === 'Manutenção') {
      setStatusColor('border-sky-600');
      setStatusBgColor('bg-sky-600');
      setStatusText(<><Wrench size={20} className='mr-1' />Manutenção</>);
    } else if (props.status === 'Aberto') {
      setStatusColor('border-green-500');
      setStatusBgColor('bg-green-500');
      setStatusText(<><CheckCircle size={20} className='mr-1' />Aberto</>);
    } else if (props.status === 'Fechado') {
      setStatusColor('border-red-600');
      setStatusBgColor('bg-red-600');
      setStatusText(<><WarningCircle size={20} className='mr-1' />Fechado</>);
    }
  }, [props.status]);

  return (
    <div className={`w-full h-full rounded-md border-solid border-2 text-white bg-[#121214a3] ${statusColor} px-5 py-2 mb-3 overflow-hidden`}>
      <h1 className='flex items-center text-2xl font-semibold'><UserCircle size={25} className='mr-1' />{props.name}</h1>
      <div className='w-full flex flex-col justify-between mt-2'>
        <a href={`https://api.whatsapp.com/send?phone=${props.number}`} className='flex items-center'><Phone size={20} className='mr-1' />{props.number}</a>
        <h1 className='flex items-center'><FileText size={20} className='mr-1' />{props.cpf}</h1>
        <h1 className='flex items-center'><At size={20} className='mr-1' />{props.email}</h1>
        <span className='flex items-center'><MapPin size={20} className='mr-1' />{props.address}</span>
      </div>
      <div className='flex flex-col gap-2'>
        <div>
          <span className='text-base text-zinc-600 font-medium mr-1'>Modelo</span>
          <div className="bg-[#343434] p-2 rounded-md">
            {props.devicedescription}
          </div>
        </div>
        <div>
          <span className='text-base text-zinc-600 font-medium mr-1'>Descrição do defeito</span>
          <div className="bg-[#343434] p-2 rounded-md">
            {props.defectdescription}
          </div>
        </div>
      </div>
      <div className='w-full mt-2 flex items-center justify-between'>
        <div className='flex items-center gap-5'>
          <h1 className='flex items-center'><Tag size={20} className='mr-1' />{props.category}</h1>
          <h1 className='flex items-center'><CalendarBlank size={20} className='mr-1' />{props.createdAt}</h1>
        </div>
        <h1 className={`flex items-center px-5 h-10 rounded-md font-semiBold ${statusColor} ${statusBgColor}`}>{statusText}</h1>
      </div>
    </div>
  );
}
