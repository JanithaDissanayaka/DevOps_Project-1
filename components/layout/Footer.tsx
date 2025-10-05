import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold tracking-wide mb-4">
              BUR<span className="text-yellow-400">GER</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Burgers that make your taste buds dance&apos;
              <br />
              Serving up happiness, one burger at a time –<br />
              sensory and emotional play.
            </p>
          </div>

          {/* Support Section */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  privacy policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  Terms and conditions
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            {/* Phone */}
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-2 text-lg">Phone</h3>
              <p className="text-gray-300 text-sm">011 - 2345678</p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-white font-semibold mb-2 text-lg">Email</h3>
              <p className="text-gray-300 text-sm">abcburger@gmail.com</p>
            </div>
          </div>

          {/* Address and Social Media */}
          <div className="md:col-span-1">
            {/* Address */}
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-2 text-lg">Address</h3>
              <p className="text-gray-300 text-sm">A/16 Main Road,Colombo</p>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {/* WhatsApp */}
                <a
                  href="#"
                  className="bg-yellow-400 text-black p-2 rounded hover:bg-yellow-300 transition-colors duration-200"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="bg-yellow-400 text-black p-2 rounded hover:bg-yellow-300 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:abcburger@gmail.com"
                  className="bg-yellow-400 text-black p-2 rounded hover:bg-yellow-300 transition-colors duration-200"
                  aria-label="Email"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="bg-yellow-400 text-black p-2 rounded hover:bg-yellow-300 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C3.85 14.81 3.016 13.163 3.016 11.362c0-1.297.49-2.448 1.297-3.323C5.196 6.763 6.843 5.929 8.644 5.929c1.297 0 2.448.49 3.323 1.297c.875.807 1.709 2.454 1.709 4.255c0 1.297-.49 2.448-1.297 3.323c-.875.875-2.522 1.709-4.323 1.709h-.607zm7.775-1.5c-.612 0-1.107-.495-1.107-1.107s.495-1.107 1.107-1.107s1.107.495 1.107 1.107s-.495 1.107-1.107 1.107z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
