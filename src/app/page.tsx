import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-8">
      <div className="max-w-4xl w-full space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 bg-clip-text text-transparent">
            <img
              src="/images/proyecto455Logo.png"
              alt="Proyecto 455"
              className="h-32 mx-auto object-contain"
            />
          </h1>
          <p className="text-gray-400 text-lg">
            Selecciona una marca para explorar nuestros productos y servicios.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/shaft"
            className="group relative p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-[#e6ef5a] transition-all duration-300 hover:shadow-2xl hover:shadow-[#e6ef5a]/20 flex flex-col"
          >
            <div className="absolute inset-0 bg-[#e6ef5a]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative flex flex-col h-full space-y-4">
              <div className="h-12 w-fit justify-start rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <img src={"/images/ShaftLogo.png"} className="h-24 mx-auto object-contain" />
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-[#e6ef5a] transition-colors">
                Shaft Dominicana
              </h2>
              <p className="text-gray-400 text-sm">
                Representante oficial en República Dominicana. Protección y estilo para motociclistas.
              </p>
              <div className="flex items-center text-[#e6ef5a] text-sm font-medium pt-2 mt-auto">
                Visitar Sitio <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link
            href="/auto-services"
            className="group relative p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-[#4E759C] transition-all duration-300 hover:shadow-2xl hover:shadow-[#4E759C]/20 flex flex-col"
          >
            <div className="absolute inset-0 bg-[#4E759C]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative flex flex-col h-full space-y-4">
              <div className="h-12 w-fit justify-start rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <img src={"/images/455AutoServiceLogo.png"} className="h-24 mx-auto object-contain" />
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-[#4E759C] transition-colors">
                Auto Servicios 455
              </h2>
              <p className="text-gray-400 text-sm">
                Mantenimiento y reparación de primer nivel para su vehículo.
              </p>
              <div className="flex items-center text-[#4E759C] text-sm font-medium pt-2 mt-auto">
                Visitar Sitio <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link
            href="/nexx"
            className="group relative p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-[#e52313] transition-all duration-300 hover:shadow-2xl hover:shadow-[#e52313]/20 flex flex-col"
          >
            <div className="absolute inset-0 bg-[#e52313]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative flex flex-col h-full space-y-4">
              <div className="h-12 w-fit justify-start rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <img src={"/images/nexxLogo.png"} className="h-24 mx-auto object-contain" />
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-[#e52313] transition-colors">
                Nexx Helmets
              </h2>
              <p className="text-gray-400 text-sm">
                Cascos europeos premium. Seguridad, innovación y estilo.
              </p>
              <div className="flex items-center text-[#e52313] text-sm font-medium pt-2 mt-auto">
                Visitar Sitio <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
