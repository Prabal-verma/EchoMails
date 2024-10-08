import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/logo.png" // Replace with your logo URL
          alt="Newsletter SaaS logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
          Transform the Way You Send <span className="bg-gradient-to-r from-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent">Newsletters</span> 
        </h1>
        <p className="text-lg sm:text-xl text-center sm:text-left text-gray-600">
          Create, customize, and automate stunning newsletters for your audience in minutes.
        </p>
        
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/pricing"
          >
            Start Free Trial
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#features"
          >
            Explore Features
          </a>
        </div>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] mt-8">
          <li className="mb-2">
            Personalize every newsletter with smart templates.
          </li>
          <li>
            Automate delivery to keep your audience engaged.
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
        >
          <Image
            aria-hidden
            src="/learn-icon.svg" // Replace with an appropriate icon
            alt="Learn icon"
            width={16}
            height={16}
          />
          Learn More
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
        >
          <Image
            aria-hidden
            src="/examples-icon.svg" // Replace with an appropriate icon
            alt="Examples icon"
            width={16}
            height={16}
          />
          View Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
        >
          <Image
            aria-hidden
            src="/globe-icon.svg" // Replace with an appropriate icon
            alt="Globe icon"
            width={16}
            height={16}
          />
          Visit Us →
        </a>
      </footer>
    </div>
  );
}
