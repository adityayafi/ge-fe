// "use client"
import Layout from "@/components/Layout";

const Users = () => {
  return(
    <Layout>
      <div className="px-4 py-3 w-full">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold ">Manajemen Users</h1>
          <button className="bg-blue-400 text-white font-bold py-2 px-4 hover:bg-blue-300">TAMBAH DATA</button>
        </div>
      </div>
    </Layout>
  )
}

export default Users;