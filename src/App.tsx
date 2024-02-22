import bg from '../public/bitmap.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Plus } from '@phosphor-icons/react';
import { OrderBanners } from './components/OrderBanners';

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
    axios('https://servertechfixfr.vercel.app/content/v1/orders').then(response => {
      setOrder(response.data.order);
    })
  }, [])

   return (
    <div className="w-full h-screen">
      <header className="w-full flex items-center justify-between p-5">
        <div>
          <h1 className="text-2xl text-white font-extrabold">TECH FIX</h1>
        </div>

        <button className="p-3 bg-green-500 rounded-xl">
          <Plus size={22} className="text-white" />
        </button>
      </header>

      <div className="px-5 w-full">
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
  )
}

export default App
