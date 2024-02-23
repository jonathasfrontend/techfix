import { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {

}

export function Textarea(props: TextareaProps) {
    return (
        <textarea {...props} className="bg-zinc-900 text-3xl py-4 px-5 rounded text-sm placeholder:text-zinc-500 resize-none h-32" />
    );
}
