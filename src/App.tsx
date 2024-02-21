import bg from '../public/bitmap.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Plus } from '@phosphor-icons/react';
import { PedidoBanners } from './components/PedidoBanners';

interface Pedido{
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

  const [pedidos, setPedido] = useState<Pedido[]>([]);

  useEffect(()=>{
    axios('https://servertechfixfr.vercel.app/content/v1/orders').then(response => {
      setPedido(response.data.order);
      // console.log(response.data.order)
    })
  }, [])

   return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="w-full h-screen">
      <header className="w-full flex items-center justify-between p-5">
        <div>
          <h1 className="text-2xl text-white font-extrabold">TECH FIX</h1>
        </div>

        <button className="p-3 bg-green-500 rounded-xl">
          <Plus size={22} className="text-white" />
        </button>
      </header>

      <div className="px-5 w-full">
      {pedidos.map(pedido => {
          return (
            <PedidoBanners
              key={pedido.id}
              name={pedido.name}
              address={pedido.address}
              number={pedido.number}
              cpf={pedido.cpf}
              email={pedido.email}
              devicedescription={pedido.devicedescription}
              defectdescription={pedido.defectdescription}
              status={pedido.status}
              createdAt={pedido.createdAt}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
