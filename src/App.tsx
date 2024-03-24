import { useEffect, useState } from 'react'
import axios from 'axios'
import { OrderBanners } from './components/OrderBanners';
import * as Dialog from '@radix-ui/react-dialog';
import { ModalBanner } from './components/ModalBanner';
import { ButtonAdd } from './components/ButtonAdd';

interface Order{
  id: string,
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

function App() {

  const [orders, setOrder] = useState<Order[]>([]);

  useEffect(()=>{
    axios(import.meta.env.VITE_URL_GET_ODERS).then(response => {
      const reversedOrders = response.data.order.reverse();
      setOrder(reversedOrders);
    })
  }, [])
  
   return (
    <div className="w-full h-screen">
      <header className="w-full flex items-center justify-between p-5 fixed top-0 left-0">
        <div>
          <h1 className="text-2xl text-white font-extrabold">TECH FIX</h1>
        </div>
        <Dialog.Root> 
          <ButtonAdd />
          <ModalBanner />
        </Dialog.Root>
      </header>

      <div className="px-5 w-full h-full mt-20 overflow-hidden fixed top-0 left-0">
        <div className="contentCard relative w-full overflow-auto grid-cols-3 grid gap-2" style={{ maxHeight: "calc(100vh - 7rem)" }}>
          {orders.map(order => {
            return (
              <OrderBanners
                key={order.id}
                name={order.name}
                address={order.address}
                number={order.number}
                cpf={order.cpf}
                email={order.email}
                devicedescription={order.devicedescription}
                defectdescription={order.defectdescription}
                status={order.status}
                category={order.category}
                createdAt={order.createdAt}
              />
            )
          })}
        </div>
        <div className='text-right w-full h-full p-2'>
          <h1 className='text-sm text-zinc-600 font-medium'>Feito por <a href="">@Jonathas</a> para: Tech Fix FR </h1>
        </div>
      </div>


    </div>
  )
}

export default App
