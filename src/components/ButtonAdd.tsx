import * as Dialog from '@radix-ui/react-dialog';
import { Plus } from '@phosphor-icons/react';

export function ButtonAdd() {
    return(
        <Dialog.Trigger asChild className='cursor-pointer'>
            <button className="p-3 bg-green-500 rounded-xl">
                <Plus size={22} className="text-white" />
            </button>
          </Dialog.Trigger>
    )
}