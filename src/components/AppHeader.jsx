import Link from "next/link";

const AppHeader = () => {
  return(
    <div className="mx-auto w-screen h-20 px-20 items-center justify-between flex gap-5 border-b-2">
      <h1 className="text-2xl font-bold">LOGO</h1>
      <input type="text" className="w-1/2 h-9 bg-slate-100 border rounded p-2" placeholder="Cari parfum kesukaanmu.."/>
      <div className="gap-5 flex">
        <button 
        className="text-blue-400 border-2 py-2 px-4 border-blue-400 font-bold hover:text-blue-300 hover:border-blue-300"
        >
          <Link href="/login">MASUK</Link>
        </button>
        <button 
        className="text-white bg-blue-400 border-2 py-2 px-4 border-blue-400 font-bold hover:bg-blue-300 hover:border-blue-300"
        >
          <Link href="/register">DAFTAR</Link>
        </button>
      </div>
    </div>
  )
}

export default AppHeader;