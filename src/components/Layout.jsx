// "use client"
import AppHeader from "./AppHeader"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  return(
    <div className="min-h-scree flex flex-col bg-white">
      <AppHeader />
      <div className="min-h-screen flex flex-row justify-start">
        <Sidebar/>
        <div className="bg-slate-100 flex-1 p-4">
          {children}
        </div>

      </div>
    </div>

  )
}

export default Layout