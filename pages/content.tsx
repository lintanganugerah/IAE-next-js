import Head from "next/head";
import Header from "../components/Header";
import KontenJualan from "../components/KontenJualan";
import Footer from "../components/Footer";

export default function Content() {
  return (
    <>
      <Head>
        <title>Content</title>
        <meta name="description" content="Content" />
      </Head>
      <main>
        <Header />
        <div>
          <h1 className="float-none text-center mt-[46px] text-3xl font-semibold xl:">
            List Produk
          </h1>
        </div>
        <KontenJualan />
        <Footer />
      </main>
    </>
  );
}
