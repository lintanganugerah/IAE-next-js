import Image from 'next/image'
export default function Galeri() {
  return (
    <>
      <div className="px-4 xl:max-w-7xl xl:mx-auto">
        <h1 className="font-black tracking-normal text-3xl dark:text-slate-100 sm:text-4xl sm:text-slate-900">
          Galeri
        </h1>
        <div className="grid grid-cols-2 gap-2 mt-7 sm:px-16 lg:grid-cols-8 lg:grid-rows-2 lg:gap-3 xl:grid-cols-6 xl:grid-rows-1">
          <div className="lg:col-span-2">
            <img
              className="w-full bg-blue-50"
              src="https://picsum.photos/300" alt={''}            />
          </div>
          <div className="lg:col-span-2">
            <img
              className="w-full bg-blue-50"
              src="https://picsum.photos/303" alt={''}            />
          </div>
          <div className="lg:col-span-2">
            <img
              className="w-full bg-blue-50"
              src="https://picsum.photos/300" alt={''}            />
          </div>
          <div className="col-span-2 lg:col-span-4 lg:row-span-2">
            <img
              className="w-full bg-blue-50 xl:w-full"
              src="https://picsum.photos/502" alt={''}            />
          </div>
          <div className="lg:col-span-2">
            <img
              className="w-full bg-blue-50"
              src="https://picsum.photos/300" alt={''}            />
          </div>
          <div className="lg:col-span-2">
            <img
              className="w-full bg-blue-50"
              src="https://picsum.photos/303" alt={''}            />
          </div>
        </div>
      </div>
    </>
  );
}
