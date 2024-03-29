import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export function Input(props: InputProps){
    return(
        <input {...props} className="bg-[#121214] text-3xl py-4 px-5 rounded text-sm placeholder:text-zinc-500"/>
    )
}