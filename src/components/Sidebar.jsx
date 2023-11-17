"use client"
import { Menu } from "antd";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState('/pages/admin/dashboard')

  function getItem(label, key, icon) {
    return {
      key,
      icon,
      label,
    };
  }

  const items = [
    getItem('Dashboard', '/pages/admin/dashboard', 'icon'),
    getItem('Manajemen Users', '/pages/admin/users', 'icon'),
    getItem('Manajemen Produk', '/pages/admin/product', 'icon'),
  ]

  const onclick = ({key}) => {
    console.log('ini key aktif',key, 'ini pathname',window.location.pathname);
    setSelectedKey(key)
    router.push(key);
  }

  return(
    // <div className="min-h-screen px-4 pt-8 pb-4 bg-white flex justify-between flex-col w-60">
    //   Sidebar
    // </div>
    <div>
      <Menu
      className="w-60"
      mode="vertical"
      theme="light"
      items={items}
      defaultSelectedKeys={selectedKey}
      defaultOpenKeys={selectedKey}
      // selectedKeys={window.location.pathname}
      selectedKeys={selectedKey}
      onClick={onclick}
      />
    </div>
  )
}

export default Sidebar;