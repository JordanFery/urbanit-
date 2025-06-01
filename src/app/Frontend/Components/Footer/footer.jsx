import { Facebook, Linkedin, Instagram } from 'lucide-react';


export default function Footer() {
    return (
        <section className='left-0 h-16 w-full bg-[var(--color-bg1)] flex justify-center gap-4 items-center px-4 z-50 shadow'>
            <a href="https://www.facebook.com/kalelithos" className='text-[var(--color-title)] rounded-full'>
                <Facebook />
            </a>
            <a href="https://www.instagram.com/kalelithos/" className='text-[var(--color-title)] rounded-full'>
                <Instagram />
            </a>
            <a href="https://www.linkedin.com/company/kalelithos/?originalSubdomain=fr" className='text-[var(--color-title)] rounded-full'>
                <Linkedin />
            </a>

        </section>
    )
}