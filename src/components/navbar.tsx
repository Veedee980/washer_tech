"use client";
import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Service = {
  name: string;
  description: string;
};
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔍 Added search logic
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Service[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
 if (value.trim().length > 1) {
      const res = await fetch(`/api/search?query=${value}`);
      const data = await res.json();
      setResults(data.results);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-4 shadow-sm border-b border-orange-100 bg-white relative">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Link href="/"><Image
          width={150}
          height={150}
          src="/logo.png"
          alt="Logo"
          className="w-20 h-20"
        /></Link>
        <h3 className="text-sm font-semibold text-gray-800 tracking-wide">
          WASHER TECH
        </h3>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-orange-500 font-medium">
        <li><Link href="/" className="hover:text-orange-600 transition">Home</Link></li>
        <li><Link href="/about" className="hover:text-orange-600 transition">About Us</Link></li>
        <li><Link href="/services" className="hover:text-orange-600 transition">Services</Link></li>
        <li><Link href="/contact" className="hover:text-orange-600 transition">Contact Us</Link></li>
      </ul>

      {/* Search Box */}
      <div className="hidden sm:flex relative items-center w-52 md:w-64 border border-orange-300 rounded-md px-3 py-2 bg-white">
        <Search className="w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search here ........"
          className="ml-2 w-full text-sm outline-none placeholder-gray-400"
          value={query}
          onChange={handleSearch}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
        />

        {/* 🔽 Search Results Dropdown */}
        {showResults && results.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-md mt-1 z-50">
            {results.map((r, i) => (
              <div
                key={i}
                className="px-3 py-2 hover:bg-orange-50 cursor-pointer text-gray-700 text-sm"
              >
                <strong>{r.name}</strong>
                <p className="text-xs text-gray-500">{r.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex items-center justify-center text-orange-500 hover:text-orange-600 transition"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-orange-100 shadow-md md:hidden z-50">
          <ul className="flex flex-col text-orange-500 font-medium p-4 space-y-3">
            <li><Link href="/" className="hover:text-orange-600 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-600 transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-orange-600 transition">Services</Link></li>
            <li><Link href="/contact" className="hover:text-orange-600 transition">Contact Us</Link></li>

            {/* Mobile Search Box */}
            <li>
              <div className="flex items-center border border-orange-300 rounded-md px-3 py-2 mt-3">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search here ........"
                  className="ml-2 w-full text-sm outline-none placeholder-gray-400"
                  value={query}
                  onChange={handleSearch}
                />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
