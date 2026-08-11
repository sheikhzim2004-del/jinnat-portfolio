import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import "./globals.css";

export const metadata = {
  title: "Jinnat Islam | Portfolio",
  description: "Frontend & Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased pt-16 bg-bg-dark text-white">
        <Navbar />
        <main>{children}</main>
        <Footer></Footer>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}