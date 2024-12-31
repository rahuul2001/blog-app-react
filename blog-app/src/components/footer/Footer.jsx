// import React from 'react'
// import {Link} from "react-router-dom"
// import Logo from "../Logo"

// function Footer() {
//   return (
//     <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
//             <div className="relative z-10 mx-auto max-w-7xl px-4">
//                 <div className="-m-6 flex flex-wrap">
//                     <div className="w-full p-6 md:w-1/2 lg:w-5/12">
//                         <div className="flex h-full flex-col justify-between">
//                             <div className="mb-4 inline-flex items-center">
//                                 <Logo width="100px" />
//                             </div>
//                             <div>
//                                 <p className="text-sm text-gray-600">
//                                     &copy; Copyright 2023. All Rights Reserved by DevUI.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//                         <div className="h-full">
//                             <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                                 Company
//                             </h3>
//                             <ul>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Features
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Pricing
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Affiliate Program
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Press Kit
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//                         <div className="h-full">
//                             <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                                 Support
//                             </h3>
//                             <ul>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Account
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Help
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Contact Us
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Customer Support
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="w-full p-6 md:w-1/2 lg:w-3/12">
//                         <div className="h-full">
//                             <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                                 Legals
//                             </h3>
//                             <ul>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Terms &amp; Conditions
//                                     </Link>
//                                 </li>
//                                 <li className="mb-4">
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Privacy Policy
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                                         to="/"
//                                     >
//                                         Licensing
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//   )
// }

// export default Footer

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white pt-16 pb-10">
      {/* Decorative background wave (optional) */}
      <div className="absolute inset-x-0 top-0 -z-10 overflow-hidden">
        <svg
          className="w-full h-32 text-white/20"
          fill="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,144C384,139,480,85,576,96C672,107,768,181,864,192C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap md:justify-between">
          {/* Left Column */}
          <div className="w-full md:w-1/3 mb-12 md:mb-0">
            <div className="mb-4">
              <Logo width="120px" />
            </div>
            <p className="text-sm text-white/90">
              DevUI makes building modern websites a breeze. Join thousands of
              happy developers who trust DevUI to make their work faster and
              easier!
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-100/80 transition-colors"
              >
                {/* Heroicon: Facebook */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.676 0H1.325C.594 0 0 .592 0 1.324v21.352C0 23.406.594 24 1.325 24H12.82v-9.294H9.691V11.09h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.098 2.791.142v3.236l-1.917.001c-1.504 0-1.795.715-1.795 1.762v2.315h3.587l-.467 3.616h-3.12V24h6.116C23.406 24 24 23.406 24 22.676V1.324C24 .592 23.406 0 22.676 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-100/80 transition-colors"
              >
                {/* Heroicon: Twitter */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.611 1.798-1.577 2.165-2.724-.951.568-2.005.98-3.127 1.202C19.603 2.725 18.3 2 16.92 2c-2.688 0-4.868 2.19-4.868 4.887 0 .382.044.76.128 1.12-4.05-.203-7.64-2.14-10.046-5.08-.42.72-.66 1.561-.66 2.465 0 1.701.86 3.2 2.172 4.08-.801-.026-1.555-.246-2.21-.616v.063c0 2.374 1.674 4.354 3.897 4.801-.408.111-.84.171-1.284.171-.314 0-.616-.03-.916-.086.616 1.927 2.406 3.332 4.526 3.374-1.66 1.307-3.76 2.087-6.04 2.087-.39 0-.78-.024-1.17-.07 2.151 1.381 4.71 2.187 7.455 2.187 8.946 0 13.84-7.412 13.84-13.84 0-.21-.005-.42-.015-.63.954-.689 1.78-1.55 2.437-2.533z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-gray-100/80 transition-colors"
              >
                {/* Heroicon: GitHub */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.599.113.82-.26.82-.577 0-.286-.012-1.243-.017-2.26-3.338.73-4.042-1.424-4.042-1.424-.547-1.388-1.334-1.759-1.334-1.759-1.086-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.776.418-1.305.76-1.604-2.665-.303-5.466-1.336-5.466-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.398 3.003-.404 1.02.006 2.046.138 3.004.404 2.292-1.552 3.299-1.23 3.299-1.23.654 1.653.242 2.873.118 3.176.77.84 1.236 1.912 1.236 3.222 0 4.607-2.805 5.624-5.476 5.92.43.369.81 1.096.81 2.21 0 1.596-.015 2.882-.015 3.271 0 .318.22.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Columns */}
          <div className="w-full md:w-2/3 flex flex-wrap">
            {/* Column 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 px-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="hover:underline" to="/">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 px-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Support
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="hover:underline" to="/">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/">
                    Knowledge Base
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/">
                    System Status
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 px-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Legals
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="hover:underline" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/">
                    Licensing
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/">
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Optional newsletter/CTA */}
        <div className="mt-12 bg-white/10 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center md:justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h4 className="text-lg font-medium">Subscribe to our Newsletter</h4>
            <p className="text-sm text-white/90">Get the latest news and updates!</p>
          </div>
          <form className="w-full md:w-auto flex space-x-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full md:w-64 px-3 py-2 rounded focus:outline-none text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-black/70 hover:bg-black px-4 py-2 rounded text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-sm text-white/80">
            &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
