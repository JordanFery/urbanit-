import { Facebook, Twitter } from 'lucide-react';


export default function Footer() {
    return (
        <section className='left-0 h-16 w-full bg-[var(--color-bg1)] flex justify-evenly items-center px-4 z-50 shadow'>
            <a href="https://www.facebook.com/kalelithos" className='text-[var(--color-title)] rounded-full'>
                <Facebook />
            </a>
            <a href="https://www.facebook.com/kalelithos" className='text-[var(--color-title)] rounded-full'>
                <Twitter />
            </a>

        </section>
    )
}