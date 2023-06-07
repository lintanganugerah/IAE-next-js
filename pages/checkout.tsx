import Head from "next/head";
import NavbarLogin from "../components/NavbarLogin";
import Footer from "../components/Footer";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Checkout" />
      </Head>
      <main>
        <NavbarLogin />
        <div className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto sm:max-w-md">
            <h1 className="text-3xl font-bold text-center text-primary-500">
              Checkout
            </h1>
            <p className="max-w-md mx-auto mt-4 text-center">
              Silahkan isi informasi
            </p>
            <form className="bg-white p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl dark:shadow-slate-800 xl:shadow-md">
              <p className="text-lg font-medium">Barang</p>
              <div className="grid-cols-2 flex">
                <img
                  className="undefined w-1/5"
                  alt=""
                  src="https://picsum.photos/300"
                />
                <div className="pl-[21px] block">
                  <h1 className="text-3xl font-semibold xl:text-2xl">
                    Baju baru laa
                  </h1>
                  <p>Size M</p>
                  <p>Rp. 10.000</p>
                </div>
              </div>
            </form>
            <form className="bg-white p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl dark:shadow-slate-800">
              <p className="text-lg font-medium">Pengiriman</p>
              <form className="flex flex-col gap-y-3">
                <div>
                  <label className="text-sm font-medium">
                    <p>Provinsi*</p>
                  </label>
                  <div className="grid relative mt-1">
                    <select className="rounded-global"></select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    <p>Kota/Kabupaten*</p>
                  </label>
                  <div className="grid relative mt-1">
                    <input className="rounded-global"/>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    <p>Kecamatan*</p>
                  </label>
                  <div className="grid relative mt-1">
                    <input className="rounded-global"/>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    <p>Kode Pos*</p>
                  </label>
                  <div className="grid relative mt-1">
                    <input className="rounded-global"/>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    <p>Alamat Lengkap*</p>
                  </label>
                  <div className="grid relative mt-1">
                    <textarea
                      className="min-h-[71px] rounded-global"
                      ></textarea>
                  </div>
                </div>
                <div className="cursor-default py-[22px] rounded-global">
                  <h1 className="text-3xl font-semibold rounded-global xl:text-base">
                    Pilih pengiriman
                  </h1>
                  <div className="grid">
                    <select className="rounded-global"></select>
                  </div>
                  <span>Harga Pengiriman</span>
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
                Pilih Pembayaran
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
