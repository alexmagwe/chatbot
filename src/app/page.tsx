import Image from "next/image";
import { Inter } from "next/font/google";
import Chat from "./components/chat";
import { Navbar } from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // Replace javascript:void(0) path with your path

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <Navbar />
      </header>
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
            Your enigmatic personal
            <span className="text-indigo-600"> Campus tutor</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            An intelligent tutor with all the knowledge you need to succeed in
            your course work and exams .
          </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          <a
            href="javascript:void(0)"
            className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto"
          >
            Get started
          </a>
          <a
            href="javascript:void(0)"
            className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto"
          >
            Try it out
          </a>
        </div>
      </section>
      <Chat />
    </main>
  );
}
