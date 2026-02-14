import "./globals.css";
import Menubar from "@/components/navigations/Menubar";
import Footer from "@/components/Footer";
import Providers from "@/redux/ReduxProvider";

export const metadata = {
  title: "GB store",
  description: "Global ecommerce store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div>
            <Menubar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
