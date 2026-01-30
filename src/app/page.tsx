import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-8">
      <div className="max-w-4xl w-full space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-green-400 to-red-400 bg-clip-text text-transparent">
            PROJECT 455
          </h1>
          <p className="text-gray-400 text-lg">
            Select a brand to explore our services and products.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Shaft Dominicana */}
          <Link
            href="/shaft"
            className="group relative p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
          >
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🪖
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                Shaft Dominicana
              </h2>
              <p className="text-gray-400 text-sm">
                Official representative. Protection and style for motorcyclists.
              </p>
              <div className="flex items-center text-blue-400 text-sm font-medium pt-2">
                Visit Site <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Auto Servicios 455 */}
          <Link
            href="/auto-services"
            className="group relative p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/20"
          >
            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🔧
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                Auto Servicios 455
              </h2>
              <p className="text-gray-400 text-sm">
                Top-tier maintenance and repair for your vehicle.
              </p>
              <div className="flex items-center text-green-400 text-sm font-medium pt-2">
                Visit Site <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Nexx Helmets */}
          <Link
            href="/nexx"
            className="group relative p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-red-500 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/20"
          >
            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🏍️
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                Nexx Helmets
              </h2>
              <p className="text-gray-400 text-sm">
                Premium European helmets. Safety, innovation and style.
              </p>
              <div className="flex items-center text-red-400 text-sm font-medium pt-2">
                Visit Site <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
