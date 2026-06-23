import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="top" className="flex flex-col min-h-full">
      <Navbar />
      <main className="flex-1 pt-18">{children}</main>
      <Footer />
    </div>
  );
}
