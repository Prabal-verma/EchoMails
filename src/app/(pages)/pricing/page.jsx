import Image from "next/image";

export default function Pricing() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col gap-16 items-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Choose the Plan That Fits Your Needs
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full max-w-5xl">
        {/* Starter Plan */}
        <div className="p-8 bg-white shadow-lg rounded-xl border border-gray-200 dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Starter
          </h2>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            Perfect for individuals just getting started.
          </p>
          <div className="mt-6 text-center">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-base font-medium text-gray-500"> / month</span>
          </div>
          <ul className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
            <li>✅ Basic Newsletter Templates</li>
            <li>✅ 1,000 Subscribers</li>
            <li>✅ Email Support</li>
          </ul>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="rounded-full border border-solid border-transparent transition-colors bg-blue-500 text-white hover:bg-blue-600 text-sm h-10 px-5 flex items-center justify-center"
            >
              Start Free Trial
            </a>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="p-8 bg-white shadow-lg rounded-xl border border-gray-200 dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Pro
          </h2>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            Best for small businesses and teams.
          </p>
          <div className="mt-6 text-center">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-base font-medium text-gray-500"> / month</span>
          </div>
          <ul className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
            <li>✅ Advanced Newsletter Templates</li>
            <li>✅ 10,000 Subscribers</li>
            <li>✅ Priority Email Support</li>
            <li>✅ Analytics & Insights</li>
          </ul>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="rounded-full border border-solid border-transparent transition-colors bg-purple-500 text-white hover:bg-purple-600 text-sm h-10 px-5 flex items-center justify-center"
            >
              Start Free Trial
            </a>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="p-8 bg-white shadow-lg rounded-xl border border-gray-200 dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Enterprise
          </h2>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            Ideal for large businesses with complex needs.
          </p>
          <div className="mt-6 text-center">
            <span className="text-4xl font-bold">$99</span>
            <span className="text-base font-medium text-gray-500"> / month</span>
          </div>
          <ul className="mt-6 space-y-4 text-gray-600 dark:text-gray-300">
            <li>✅ Custom Newsletter Templates</li>
            <li>✅ Unlimited Subscribers</li>
            <li>✅ 24/7 Support</li>
            <li>✅ Dedicated Account Manager</li>
            <li>✅ Custom Integrations</li>
          </ul>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="rounded-full border border-solid border-transparent transition-colors bg-pink-500 text-white hover:bg-pink-600 text-sm h-10 px-5 flex items-center justify-center"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>

      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="#">
          <Image aria-hidden src="/learn-icon.svg" alt="Learn icon" width={16} height={16} />
          Learn More
        </a>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="#">
          <Image aria-hidden src="/examples-icon.svg" alt="Examples icon" width={16} height={16} />
          View Examples
        </a>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="#">
          <Image aria-hidden src="/globe-icon.svg" alt="Globe icon" width={16} height={16} />
          Visit Us →
        </a>
      </footer>
    </div>
  );
}
