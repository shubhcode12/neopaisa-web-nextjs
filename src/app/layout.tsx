import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    default : "NeoPaisa - your instant loan companion",
    template : `%s | NeoPaisa`
  },
  description: "Get fast, hassle-free loans with Neopaisa",
  metadataBase : new URL("https://neopaisa.com"),
  keywords : ["neopaisa", "instant loan", "business loan" , "neopaisa credit", "neopaisa india"],
  manifest : "./manifest.json",
  openGraph :{
    title : "NeoPaisa - your instant loan companion",
    description : 'Neopaisa is your go-to app for quick and easy loans.',
    type : "website",
    images : [''],
    url : "https://neopaisa.com",
    siteName : "NeoPaisa"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
