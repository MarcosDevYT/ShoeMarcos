import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/store/navbar/Navbar";

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </>
  );
};

export default IndexLayout;
