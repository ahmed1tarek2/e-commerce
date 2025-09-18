import NavBar from "@/components/header/NavBar";
// import Footer from "@/components/Footer"

export default function WithNavbarLayout({children}) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">{children}</main>
      {/* <Footer/> */}
    </div>
  );
}
