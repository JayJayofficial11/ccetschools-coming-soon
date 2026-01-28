import Image from "next/image";
import { EmailForm } from "@/components/email-form";
import { GraduationCap, Zap, Globe, ShieldCheck, Sparkles, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-[#020617] text-zinc-900 dark:text-white selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] left-[10%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:p-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-xl">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter">
            CCET<span className="text-blue-600">SCHOOLS</span>
          </span>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center container mx-auto px-6 py-20 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 dark:bg-white/5 border border-blue-500/10 dark:border-white/10 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-8">
          <Sparkles className="h-3 w-3 fill-current" />
          Coming Very Soon
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 max-w-4xl">
          Empowering Schools <br />
          <span className="text-blue-600">Connecting Futures.</span>
        </h1>

        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed font-medium mb-12">
          CCETSCHOOLS is here to digitalize all school operations by providing school owners with an all-in-one digital portal and a personalized website in just one click.
        </p>

        <EmailForm />

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-50">
          <div className="flex flex-col items-center gap-2">
            <Globe className="h-6 w-6" />
            <span className="text-[10px] font-black uppercase tracking-widest">Multi-Tenant</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="h-6 w-6" />
            <span className="text-[10px] font-black uppercase tracking-widest">Secure</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Zap className="h-6 w-6" />
            <span className="text-[10px] font-black uppercase tracking-widest">Instant Setup</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-blue-600">
            <GraduationCap className="h-6 w-6" />
            <span className="text-[10px] font-black uppercase tracking-widest">Edu-First</span>
          </div>
        </div>

        {/* Logos Display */}
        <div className="mt-24 space-y-6">
          {/* <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Our Official Branding</p> */}
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="relative h-12 w-32">
              <Image src="/images/20260127_085556.png" alt="Logo PNG" fill className="object-contain" />
            </div>
            <div className="relative h-12 w-32">
              <Image src="/images/20260127_085501.png" alt="Logo White" fill className="object-contain" />
            </div>
          </div>
        </div>
      </main>

      <footer className="p-10 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
          &copy; {new Date().getFullYear()} Consortium Of Computer & Engineering Technologies.
        </p>
        <div className="flex gap-6">
          <a href="https://x.com/ccetschools?s=21" target="_blank" rel="noopener noreferrer" title="Follow us on X">
            <Twitter className="h-4 w-4 text-zinc-400 hover:text-blue-400 cursor-pointer transition-colors" />
          </a>
          <a href="https://www.instagram.com/ccetschools" target="_blank" rel="noopener noreferrer" title="Follow us on Instagram">
            <Instagram className="h-4 w-4 text-zinc-400 hover:text-pink-600 cursor-pointer transition-colors" />
          </a>
        </div>
      </footer>
    </div>
  );
}
