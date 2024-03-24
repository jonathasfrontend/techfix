import { Plus, X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { Input } from './Form/Input';
import { Textarea } from './Form/Textarea';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import api from '../services/axios';

interface OrderBannerProps{
    id: string,
    category: string,
    status: string,
}


export function ModalBanner() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [devicedescription, setDevicedescription] = useState('')
  const [defectdescription, setDefectdescription] = useState('')
  const [category, setCategory] = useState<OrderBannerProps[]>([]);
  const [status, setStatus] = useState<OrderBannerProps[]>([]);

  useEffect(()=>{
    async function getCategory(){
      const response = await api.get('/category')
      const reversedOrders = response.data.category
      setCategory(reversedOrders);
    }
    getCategory()
  }, [])

  useEffect(()=>{
    async function getStatus(){
      const response = await api.get('/status')
      const reversedOrders = response.data.status;
      setStatus(reversedOrders);
    }
    getStatus()
  }, [])

  async function handleCreateAd(event: FormEvent){
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    
    if(!data.name){
        return;
    }

    const response = await api.post('/neworders', {
      name,
      address,
      number,
      cpf: "222222222" ,
      email,
      devicedescription,
      defectdescription,
      category: data.category,
      status: data.status
    })

    setName('')
    setAddress('')
    setNumber('')
    setEmail('')
    setDevicedescription('')
    setDefectdescription('')

  }

  return(
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/40 inset-0 fixed" />

      <Dialog.Content className="bg-[#263430] fixed px-8 py-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-lg h-[98%] w-[50em] shadow-lg shadow-black/25">
      <Dialog.Title className="text-3xl text-white font-bold">Adicionar novo cliente</Dialog.Title>
      <form onSubmit={handleCreateAd} className="flex flex-col gap-4 h-auto">

        <div className="flex flex-col gap-2">
          <label htmlFor="name">Nome</label>
          <Input name="name" id="name" value={name} onChange={e => setName(e.target.value)} required placeholder="Nome do cliente " />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="address">Endereço</label>
          <Input name="address" id="address" value={address} onChange={e => setAddress(e.target.value)} required placeholder="Endereço do cliente " />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="number">Numero</label>
          <Input name="number" id="number" value={number} onChange={e => setNumber(e.target.value)} required placeholder="Numero de telefone do cliente " />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <Input name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email do cliente " />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="devicedescription">Descrição Modelo do dispositivo</label>
          <Textarea name="devicedescription" id="devicedescription" value={devicedescription} onChange={e => setDevicedescription(e.target.value)} required placeholder="Descrição Modelo do dispositivo do cliente " />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="defectdescription">Descrição do defeito do dispositivo</label>
          <Textarea name="defectdescription" id="defectdescription" value={defectdescription} onChange={e => setDefectdescription(e.target.value)} required placeholder="Descrição do defeito do dispositivo do cliente " />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="font-semibold"> Qual a categoria do dispositivo?</label>
          <select
            name="category"
            id="category"
            required
            className="bg-zinc-900 py-4 px-5 rounded text-sm placeholder:text-zinc-500 appearance-none"
            defaultValue=""
          >
            <option disabled value="">Selecione a categoria do dispositivo</option>

          {category.map(cat =>{
            return <option key={cat.id} value={cat.category}>{cat.category}</option>
          })}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="status" className="font-semibold"> Qual o status do dispositivo?</label>
          <select
            name="status"
            id="status"
            required
            className="bg-zinc-900 py-4 px-5 rounded text-sm placeholder:text-zinc-500 appearance-none"
            defaultValue=""
          >

          {status.map(status =>{
            return <option key={status.id} value={status.status}>{status.status}</option>
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