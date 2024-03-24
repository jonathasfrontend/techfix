import { useEffect, useState } from 'react'
import axios from 'axios'
import { OrderBanners } from './components/OrderBanners';
import * as Dialog from '@radix-ui/react-dialog';
import { ModalBanner } from './components/ModalBanner';
import { ButtonAdd } from './components/ButtonAdd';
import api from './services/axios';

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
    async function getOders(){
      const response = await api.get('/orders')
      const reversedOrders = response.data.order.reverse();
      setOrder(reversedOrders);
    }
    getOders()
  }, [])

  const addOrder = (newOrder: Order) => {
    setOrder(prevOrders => [newOrder, ...prevOrders]);
  };
  
   return (
    <div className="w-full h-screen">
      <header className="w-full flex items-center justify-between py-2 px-5 fixed top-0 left-0">
        <div>
          <h1 className="text-2xl text-white font-extrabold">TECH FIX</h1>
        </div>
        <Dialog.Root> 
          <ButtonAdd />
          <ModalBanner />
        </Dialog.Root>
      </header>


      <div className="px-5 w-full h-full mt-14 overflow-hidden fixed top-0 left-0">

        <div className='w-full mb-3 flex gap-2'>
          <button className='px-2 py-1 rounded-md text-sm font-medium bg-white'>Tudo</button>
          <button className='px-2 py-1 rounded-md text-sm font-medium bg-green-500'>Aberto</button>
          <button className='px-2 py-1 rounded-md text-sm font-medium bg-sky-600'>Manutenção</button>
          <button className='px-2 py-1 rounded-md text-sm font-medium bg-red-600'>Fechado</button>
        </div>

        <div className="contentCard relative w-full overflow-auto grid-cols-3 grid gap-2" style={{ maxHeight: "calc(100vh - 6rem)" }}>
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
      </div>


    </div>
  )
}

export default App
