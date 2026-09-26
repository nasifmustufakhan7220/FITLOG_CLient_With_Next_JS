import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import ExerciseContextProvider from "@/context/exerciseContext";
import { Slide, ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FIT LOG",
  description: "A Gym website, where everybody can fit their health and make their life happy",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-scroll-behavior="smooth"
      scrollbar-gutter= "stable"
      className={`${inter.className} h-full antialiased scroll-smooth overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col">
        <ExerciseContextProvider>
          <Navbar/>
          {children}
          <Footer/>
          <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover draggable theme="light" transition={Slide} />
        </ExerciseContextProvider>
      </body>
    </html>
  );
}
