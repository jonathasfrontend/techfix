import { Plus, X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { Input } from './Form/Input';
import { Textarea } from './Form/Textarea';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Order{
    id: string,
    category: string,
    status: string,
  }

export function ModalBanner() {
    const [orders, setOrder] = useState<Order[]>([]);

  useEffect(()=>{
    axios('https://servertechfixfr.vercel.app/content/v1/orders').then(response => {
      setOrder(response.data.order);
    })
  }, [])
    return(
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/40 inset-0 fixed" />

            <Dialog.Content className="bg-[#263430] fixed px-8 py-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-lg h-[650px] w-[480px] shadow-lg shadow-black/25">
              <Dialog.Title className="text-3xl text-white font-bold">Adicionar novo cliente</Dialog.Title>
              <form className="flex flex-col gap-4 h-auto">

                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Nome</label>
                  <Input name="name" id="name" placeholder="Nome do cliente " />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="address">Endereço</label>
                  <Input name="address" id="address" placeholder="Endereço do cliente " />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="number">Numero</label>
                    <Input name="number" id="number" placeholder="Numero de telefone do cliente " />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="cpf">CPF</label>
                    <Input name="cpf" id="cpf" placeholder="CPF do cliente " />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <Input name="email" id="email" placeholder="Email do cliente " />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="devicedescription">Descrição Modelo do dispositivo</label>
                  <Textarea name="devicedescription" id="devicedescription" placeholder="Descrição Modelo do dispositivo do cliente " />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="defectdescription">Descrição do defeito do dispositivo</label>
                  <Textarea name="defectdescription" id="defectdescription" placeholder="Descrição do defeito do dispositivo do cliente " />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="category" className="font-semibold"> Qual a categoria do dispositivo?</label>
                  <select
                    name="category"
                    id="category"
                    className="bg-zinc-900 py-4 px-5 rounded text-sm placeholder:text-zinc-500 appearance-none"
                    defaultValue=""
                    >
                        <option disabled value="">Selecione a categoria do dispositivo</option>

                        {orders.map(order =>{
                            return <option key={order.id} value={order.id}>{order.category}</option>
                        })}
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="status" className="font-semibold"> Qual o status do dispositivo?</label>
                  <select
                    name="status"
                    id="status"
                    className="bg-zinc-900 py-4 px-5 rounded text-sm placeholder:text-zinc-500 appearance-none"
                    defaultValue=""
                    >
                        <option disabled value="">Selecione o status dispositivo</option>

                        {orders.map(order =>{
                            return <option key={order.id} value={order.id}>{order.status}</option>
                        })}
                    </select>
                </div>

              <footer className="mt-4 flex items-center justify-end gap-4">
                <button type='submit'
                    className="bg-green-500 px-5 h-10 rounded-md font-semiBold flex items-center hover:bg-green-600"
                >
                    <Plus size={20} className='mr-1'/>Adicionar
                </button>
                <Dialog.Close type="button" className="bg-zinc-500 px-5 h-10 rounded-md font-semiBold  hover:bg-zinc-600">Cancelar</Dialog.Close>
              </footer>

              </form>

              <Dialog.Close asChild>
                <button className="rounded-full h-6 w-6 inline-flex items-center justify-center absolute top-3 right-3" aria-label="Close">
                    <X size={32} />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
    )
}