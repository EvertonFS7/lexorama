import Link from 'next/link'

export function Sidebar() {
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-blue-950">
        <ul className="space-y-2 font-medium">
          <li className="flex justify-center mb-8">
            <Link href="/app" className="uppercase text-lg text-white">
              Lexorama
            </Link>
          </li>
          <li>
            <Link
              href="/app"
              className="flex items-center py-3 px-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="#fff"
                viewBox="0 0 256 256"
              >
                <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
              </svg>
              <span className="ml-3">Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/app/patientregistration"
              className="flex items-center py-3 px-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="#fff"
                viewBox="0 0 256 256"
              >
                <path d="M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z"></path>
              </svg>
              <span className="ml-3">Cadastrar Paciente</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
