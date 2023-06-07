import Head from "next/head";
import Header from "../components/Header";
import KontenJualan from "../components/KontenJualan";
import Footer from "../components/Footer";
import QuantitySelector from '../components/QuantitySelector';

export default function Detail() {
  return (
    <>
      <Head>
        <title>Content</title>
        <meta name="description" content="Content" />
      </Head>
      <main>
        <Header />
            <div className="mt-[50px] px-4 xl:max-w-7xl xl:mx-auto">
                <div className="grid grid-cols-2 gap-2 mt-7 sm:px-16 lg:grid-cols-8 lg:grid-rows-2 lg:gap-3 xl:grid-rows-1 xl:grid-cols-6">
                    <div className="col-span-2 lg:col-span-4 lg:row-span-2 xl:col-span-3">
                    <img
                        className="w-full bg-blue-50 xl:w-full"
                        src="https://picsum.photos/502"
                    />
                    </div>
                    <div className="mx-8 undefined row-span-2 lg:col-span-2 xl:col-span-3">
                    <p className="mt-4 inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 xl:bg-teal-100">
                        
                        Brand new
                    </p>
                    <h1 className="my-8 font-heading text-3xl font-semibold xl:text-[65px] xl: xl:font-extrabold">
                        Baju baru
                    </h1>
                    <div className="flex py-[7px]">
                        <div>
                        <img
                            alt=""
                            src="https://shuffle.dev/yofte-assets/elements/star-gold.svg"
                        />
                        </div>
                        <div>
                        <img
                            alt=""
                            src="https://shuffle.dev/yofte-assets/elements/star-gold.svg"
                        />
                        </div>
                        <div className="undefined">
                        <img
                            alt=""
                            src="https://shuffle.dev/yofte-assets/elements/star-gold.svg"
                        />
                        </div>
                        <div className="undefined">
                        <img
                            alt=""
                            src="https://shuffle.dev/yofte-assets/elements/star-gold.svg"
                        />
                        </div>
                        <div className="undefined">
                        <img
                            alt=""
                            src="https://shuffle.dev/yofte-assets/elements/star-gold.svg"
                        />
                        </div>
                    </div>
                    <p className="font-semibold pt-10 text-[28px]">Rp. 100.000</p>
                    <p className="py-4">
                        Maecenas commodo libero ut molestie dictum. Morbi placerat eros id
                        porttitor sagittis.
                    </p>
                    <div className="py-[19px]">
                        <hr className="undefined bg-primary-300 h-0.5 rounded-global" />
                    </div>
                    <div className="inline-block pr-[15px]">
                        <h1 className="text-3xl font-semibold xl:text-2xl">Qty</h1>
                        <QuantitySelector />
                    </div>
                    <div className="inline-block">
                        <h1 className="text-3xl font-semibold xl:text-2xl">Size</h1>
                        <select className="rounded-global">
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>
                    <div className="grid pt-[47px]">
                        <button className="bg-primary text-white px-4 py-2 rounded-global">
                        Beli
                        </button>
                    </div>
                    </div>
                </div>
                <div className="m-[60px]">
                    <h1 className="text-3xl font-semibold">Deskripsi</h1>
                    <p>
                    Maecenas commodo libero ut molestie dictum. Morbi placerat eros id
                    porttitor sagittis.
                    </p>
                </div>
            </div>
        <KontenJualan />
        <Footer />
      </main>
    </>
  );
}
