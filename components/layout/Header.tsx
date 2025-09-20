import React from 'react';

export default function Header() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#app' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact Us', href: '#offers' },
  ];

  return (
    <header className="bg-black text-white px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold tracking-wide">
            BUR<span className="text-yellow-400">GER</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Shop Online Button */}
        <div className="flex items-center">
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200">
            Shop online
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation (hidden by default) */}
      <div className="md:hidden mt-4 hidden">
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-yellow-400 transition-colors duration-200 py-2 px-4"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}