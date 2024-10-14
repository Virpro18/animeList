import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/utilities/Navbar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const poppins = Poppins({ subsets: ["latin"], weight: "500" });
export const metadata = {
  title: "NaNanime",
  description: "Anime list project by NaN",
  authors: [{ name: "NaN", url: "URL_ADDRESS" }],
  icons: {
    icon: "https://pbs.twimg.com/media/GYaW7b-a4AA-D6a?format=png&name=small",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-color-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
