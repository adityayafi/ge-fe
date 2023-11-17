import InputBox from "@/components/input";
import Link from "next/link";

export default function Login () {
  return (
    // <div className="container mx-auto">
      <div className="w-full h-screen flex">
        <div className="w-2/4 h-screen bg-cyan-300">
          <div className="my-auto flex flex-col justify-center items-center mx-10 place-content-center h-screen px-10">
            <h1 className="text-center text-5xl font-bold py-8 px-6">Login</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt suscipit autem corrupti, ipsum consectetur optio et culpa quis, quaerat ratione molestias quasi hic repudiandae! Error consequuntur neque libero aperiam.</p>
          </div>
        </div>
        <div className="w-2/4 h-screen bg-white">
          <div className="place-content-center h-screen flex flex-col items-center px-10">
            <div className="items-start flex flex-col">
              <h1 className="text-center text-3xl font-semibold">Selamat Datang</h1>
              <p className="text-center text-slate-500">Silakan masukkan email dan password Anda untuk mulai menggunakan aplikasi</p>
              
              <InputBox label={'Email'} placeholder={'Contoh: people@gmail.com'} type='email'/>
              <InputBox label={'Password'} placeholder={'Masukkan Password'} type='password'/>
              <button className="w-full bg-blue-400 h-14 mt-6 text-white font-bold text-lg hover:bg-blue-300">MASUK</button>
              <div className="justify-center flex w-full mt-5">
                <Link href="/pages/register" className="text-blue-400 hover:text-blue-700 hover:underline">Belum punya akun? Register disini.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  )
}

// export default Login;