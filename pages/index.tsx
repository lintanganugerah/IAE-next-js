import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import KontenJualan from "../components/KontenJualan";
import Galeri from "../components/Galeri";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>
      <main>
        <Header />
        <div className="pb-6 sm:pb-8 lg:pb-12">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className="mt-[60px] relative px-4 mx-auto pt-16 sm:max-w-xl md:px-8 md:max-w-full lg:py-32 lg:pt-[25px] xl:px-20">
              <div className="max-w-xl mx-auto lg:max-w-screen-xl">
                <div className="mb-16 lg:max-w-lg lg:mb-0">
                  <div className="max-w-xl mb-6">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                      Nexto Apparell
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                      Aasdasdasdad
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
                <img
                  className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
                  src="https://kitwind.io/assets/kometa/full-browser.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="text-center pt-5">
            <h1 className="mx-auto font-black tracking-normal text-3xl dark:text-slate-100 sm:text-4xl sm:text-slate-900">
              Produk
            </h1>
          </div>
          <KontenJualan />
          <div className="text-center p-6 mx-auto my-auto">
            <Link
              className="font-heading text-center align-baseline xl:"
              href="/content">
              Lihat Selengkapnya
            </Link>
          </div>
        </div>
        <div className="py-10 text-center">
          <Galeri />
        </div>
        <Footer />
      </main>
    </>
  );
}
