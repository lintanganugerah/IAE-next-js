import Link from "next/link";

export default function NavbarLogin() {
  return (
    <>
      <div className="shadow-lg bg-gray-900">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center">
              <Link className="inline-flex items-center mr-8" href="#">
                <span className="text-2xl text-white">
                  <div style={{fontSize: 'inherit', color: 'inherit', padding: '2px' }}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 640 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"></path>
                    </svg>
                  </div>
                </span>
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                  chai.
                </span>
              </Link>
              <ul className="items-center hidden space-x-8 lg:flex">
                <li>
                  <Link
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    href="#">
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    href="#">
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                    href="#">
                    About us
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="items-center hidden space-x-8 lg:flex">
              <li className="bg-transparent"></li>
              <li>
                <Link
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md focus:shadow-outline focus:outline-none bg-primary-500 rounded-global"
                  href="#">
                  My Order
                </Link>
              </li>
            </ul>
            <div className="lg:hidden">
              <button className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline">
                <span className="w-fit">
                  <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                    
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
