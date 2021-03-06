// pages/404.ts
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/common/footer';
import Navbar from '../components/common/navbar';

export default function Custom404() {
    return (
        <section className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-1 flex-col items-center justify-center">
                <Image src="/boredMisato.gif" alt="A poor quality gif of a bored Misato (from Neon Genesis Evangelion) pressing on a laptop randomly " width={500} height={250} priority />
                <h1 className="text-2xl sm:text-4xl lg:text-6xl pb-1 mt-5 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                    404 - Page Not Found</h1>
                <p className="text-xl lg:text-2xl pb-1 mt-5">
                    Let&apos;s go somewhere more <Link href="/">
                        <a className="underline hover:opacity-90 umami--click--404-home-link">
                            familiar
                        </a>
                    </Link>.
                </p>
            </div>
            <Footer />
        </section>)
}