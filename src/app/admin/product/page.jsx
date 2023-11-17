'use client'
import Layout from "@/components/Layout";
// import ConfirmButton from "@/app/components/confirmButton";
import { Rupiah } from "@/utils";
import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import getProduct from "./product";

const Product = async () => {

  const [data, setData] = useState();
  // console.log(data)

  // const getData = getProduct();
  // setData(getData)
  // console.log(getData)

  const getData = async () => {
    try {
      const resp = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product`);
      setData(resp.data.data.product);
      console.log("resp", resp.data.data.product)
    } catch (err) {
      console.log(err)
    }
  }

  const col = [
    {
      title: 'Gambar',
      key: 'pict',
      // render: (record) => <img src={`${process.envenv.EXT_PUBLIC_BACKEND_URL}/public/${record.imageUrl}`} className="w-32 h-32 mx-auto"/>,
    },
    {
      title: 'Nama',
      key: 'name',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: 'Price',
      key: 'price',
      render: (record) => <span>{Rupiah(record.price)}</span>,
      align: 'center',
    },
    // {
    //   title: 'Actions',
    //   key: 'actions',
    //   render:(record)=> (
    //       <div>
    //           <ConfirmButton 
    //               title='Update Product'
    //               desc='Are you sure want to update this data'
    //               onCancel={() => message.error('Update data cancelled')}
    //               onConfirm={() => handleUpdateProduct(record._id)}
    //               buttonClass='mx-2'
    //               buttonTitle='Update'                        
    //           />
    //           <ConfirmButton 
    //               title='Delete Product'
    //               description='Are you sure want to delete this data?'
    //               onCancel={() => message.error('Delete data cancelled')}
    //               onConfirm={() => handleDeleteProduct(record._id)}
    //               buttonClass='mx-2'
    //               buttonTitle='Delete'
    //               danger={true}
    //           />
    //       </div>
    //   ),
    //   align: 'center',
    // }
  ]

  useEffect(() => {
    getData();
  },[])
  return(
    <Layout>
      <div className="px-4 py-3 w-full">
        <div className="flex justify-between pb-2">
          <h1 className="text-xl font-bold ">Manajemen Produk</h1>
          <button className="bg-blue-400 text-white font-bold py-2 px-4 hover:bg-blue-300">TAMBAH DATA</button>
        </div>
        <div>
          <Table
            columns={col}
            dataSource={data}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Product;