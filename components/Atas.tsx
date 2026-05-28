import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/lain";
import Datagambar from "@/public/data";

const Enterelektrik = () => {
  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
      )}
    >
      {/* Background Image dengan Blur Effect */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={Datagambar.Proyek2}
            alt="Background Enterelektrik "
            fill
            className="object-cover animate-scale-in"
            sizes="100vw"
            priority
            quality={75}
          />
        </div>

        {/* Blur overlay untuk efek blur */}
        <div className="absolute inset-0 backdrop-blur-sm animate-fade-in"></div>

        {/* Gradient overlay - Hitam konsisten untuk transisi ke section berikutnya */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black animate-fade-in"></div>

        {/* Overlay tambahan untuk kontras dan transisi halus */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Text Content - Teks Putih Cerah */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black leading-tight text-white animate-fade-in-up animate-delay-200">
              Enterelektrik
              <span className="block mt-2 md:mt-3 text-[#009966] drop-shadow-lg animate-fade-in-up animate-delay-300">
                Distributor Pulsa All Operator
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 animate-fade-in-up animate-delay-400">
              JAWA TIMUR
            </p>

            {/* <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animate-delay-500">
              <button><Link href="/daftar">Login / Daftar</Link></button>
            </p> */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 md:pt-4 animate-fade-in-up animate-delay-600">
              <Link
                href="daftar"
                className={cn(
                  "px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-2xl",
                  "bg-[#009966] text-white",
                  "hover:bg-[#006644] transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,153,102,0.6)]",
                  "border-2 border-[#009966] animate-pulse-glow",
                )}
              >
                Daftar Sekarang 
              </Link>
            </div>
          </div>

          {/* Image Card - Modern Design dengan Foto Asli */}
          <div className="relative animate-fade-in-right animate-delay-300 flex items-center justify-center">
            <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#009966]/30 hover:border-[#009966] transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,153,102,0.5)] animate-float group">
              {/* Foto Enterelektrik */}
              <Image
                src={Datagambar.Proyek1}
                alt="Foto Enterelektrik Darut Taqwa IV Modopuro Mojokerto"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                quality={75}
              />

              {/* Overlay gradient untuk kontras */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500"></div>

              {/* Border glow effect */}
              <div className="absolute inset-0 border-4 border-[#009966]/0 group-hover:border-[#009966]/50 transition-all duration-500 rounded-3xl"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-[#009966] rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-black rounded-full opacity-20 blur-xl animate-pulse animate-delay-500"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="animate-float">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Enterelektrik;
