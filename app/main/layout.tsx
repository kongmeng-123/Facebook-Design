// app/your-sub-folder/layout.tsx
import Navbar from "./component/Navbar";
import { Sidebar } from "./component/Sidebar";
import { Advertisement } from "./component/Advertisement";

export default function SubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 
    <div className="sub-layout-container">
      {/* --- Navbar --- */}
      <header className="fixed top-0 w-full z-10">
        <Navbar />
      </header>

      {/* --- Main Content Layout --- */}
      <div className="w-full flex md:justify-start lg:justify-center mt-27 md:mt-15 relative">
        
        {/* Sidebar */}
        <aside className="w-[25%] h-[92vh] overflow-y-scroll hidden lg:block fixed left-0 no-scrollbar">
          <Sidebar />
        </aside>

        {/* Main Content Area */}
        <main className="w-full md:w-[70%] min-w-32 lg:w-[50%] h-auto  flex justify-center">
          {children}
        </main>

        {/* Advertisement */}
        <section className="hidden md:block md:w-[30%]  lg:w-[25%] h-[92vh] overflow-auto fixed right-0 no-scrollbar">
          <Advertisement />
        </section>

      </div>
    </div>
  );
}