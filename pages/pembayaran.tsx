import Head from "next/head";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";

export default function Pembayaran() {
  return (
    <>
      <Head>
        <title>pembayaran</title>
        <meta name="description" content="pembayaran" />
      </Head>
      <main>
        <NavbarLogin />
        <div className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto sm:max-w-md">
            <h1 className="text-3xl font-bold text-center text-primary-500">
              Checkout
            </h1>
            <p className="max-w-md mx-auto mt-4 text-center">
              Silahkan pilih pembayaran
            </p>
            <form className="bg-white p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl dark:shadow-slate-800">
              <p className="text-lg font-medium">Pilih metode pembayaran</p>
              <form className="flex flex-col gap-y-3">
                <div className="mb-5">
                  <div className="grid relative mt-1">
                    <select className="rounded-global"></select>
                  </div>
                  <p>Biaya admin : Rp. 2.500</p>
                </div>
                <div className="flex justify-center shadow-lg bg-gray-100 rounded-global">
                  <img
                    className="h-[100px]"
                    alt=""
                    src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png"
                  />
                </div>
                <div className="flex justify-center shadow-lg bg-gray-100 mb-5 rounded-global">
                  <img
                    className="h-[70px]"
                    alt=""
                    src="https://my.ipaymu.com/asset/images/logo-ipaymu/ipaymu-text-plus-blue.png"
                  />
                </div>
                <div className="grid grid-cols-2 grid-rows-1">
                  <h1 className="text-3xl font-semibold">Total</h1>
                  <h1 className="text-center grid-cols-2 text-3xl font-semibold">
                    Rp. 77.000
                  </h1>
                </div>
              </form>
              <button
                className="block w-full px-5 py-3 text-sm font-medium text-white bg-primary-500 rounded-global mt-3 hover:bg-primary-700"
                type="submit">
                Bayar
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
