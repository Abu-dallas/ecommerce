import "./globals.css";
import Menubar from "@/components/navigations/Menubar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "GB store",
  description: "Global ecommerce store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Menubar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
