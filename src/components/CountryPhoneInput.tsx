"use client";

import { useState, useRef, useEffect } from "react";

const COUNTRIES = [
  { code: "AF", name: "Afghanistan", dial: "+93" },
  { code: "AL", name: "Albania", dial: "+355" },
  { code: "DZ", name: "Algeria", dial: "+213" },
  { code: "AS", name: "American Samoa", dial: "+1" },
  { code: "AD", name: "Andorra", dial: "+376" },
  { code: "AR", name: "Argentina", dial: "+54" },
  { code: "AU", name: "Australia", dial: "+61" },
  { code: "AT", name: "Austria", dial: "+43" },
  { code: "BD", name: "Bangladesh", dial: "+880" },
  { code: "BE", name: "Belgium", dial: "+32" },
  { code: "BR", name: "Brazil", dial: "+55" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "CN", name: "China", dial: "+86" },
  { code: "DK", name: "Denmark", dial: "+45" },
  { code: "EG", name: "Egypt", dial: "+20" },
  { code: "FI", name: "Finland", dial: "+358" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "ID", name: "Indonesia", dial: "+62" },
  { code: "IE", name: "Ireland", dial: "+353" },
  { code: "IL", name: "Israel", dial: "+972" },
  { code: "IT", name: "Italy", dial: "+39" },
  { code: "JP", name: "Japan", dial: "+81" },
  { code: "MY", name: "Malaysia", dial: "+60" },
  { code: "MX", name: "Mexico", dial: "+52" },
  { code: "NL", name: "Netherlands", dial: "+31" },
  { code: "NZ", name: "New Zealand", dial: "+64" },
  { code: "NO", name: "Norway", dial: "+47" },
  { code: "PK", name: "Pakistan", dial: "+92" },
  { code: "PH", name: "Philippines", dial: "+63" },
  { code: "PL", name: "Poland", dial: "+48" },
  { code: "PT", name: "Portugal", dial: "+351" },
  { code: "RU", name: "Russia", dial: "+7" },
  { code: "SA", name: "Saudi Arabia", dial: "+966" },
  { code: "SG", name: "Singapore", dial: "+65" },
  { code: "ZA", name: "South Africa", dial: "+27" },
  { code: "KR", name: "South Korea", dial: "+82" },
  { code: "ES", name: "Spain", dial: "+34" },
  { code: "SE", name: "Sweden", dial: "+46" },
  { code: "CH", name: "Switzerland", dial: "+41" },
  { code: "TW", name: "Taiwan", dial: "+886" },
  { code: "TH", name: "Thailand", dial: "+66" },
  { code: "TR", name: "Turkey", dial: "+90" },
  { code: "AE", name: "United Arab Emirates", dial: "+971" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "US", name: "United States", dial: "+1" },
  { code: "VN", name: "Vietnam", dial: "+84" }
];

interface CountryPhoneInputProps {
  placeholder: string;
}

export default function CountryPhoneInput({ placeholder }: CountryPhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES.find(c => c.code === "NL") || COUNTRIES[0]);
  
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dial.includes(search) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex border border-slate-700 rounded-xl focus-within:border-[#2ebf9b] transition-colors overflow-visible relative" ref={wrapperRef}>
      
      {/* Dropdown Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#595a63] text-white px-4 py-4 flex items-center justify-between gap-2 font-medium border-r border-slate-700 hover:bg-[#686973] transition-colors w-[110px] shrink-0 rounded-l-xl"
      >
        <div className="flex gap-1.5 items-center">
          <span className="font-bold text-sm">{selectedCountry.code}</span>
          <span>{selectedCountry.dial}</span>
        </div>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {/* Input Field */}
      <input 
        type="tel" 
        placeholder={placeholder}
        className="w-full bg-transparent text-white placeholder-slate-500 px-5 py-4 focus:outline-none rounded-r-xl"
      />

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[320px] bg-[#1f2029] border border-slate-700 rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="p-2 border-b border-slate-700">
            <input
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#16181d] border border-slate-700 text-slate-200 placeholder-slate-500 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#2ebf9b]"
              autoFocus
            />
          </div>
          <ul className="max-h-64 overflow-y-auto custom-scrollbar">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <li 
                  key={country.code}
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className={`flex items-center justify-between px-4 py-2.5 cursor-pointer hover:bg-slate-800 transition-colors ${selectedCountry.code === country.code ? 'bg-slate-800' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-400 text-xs w-5">{country.code}</span>
                    <span className="text-slate-200 text-sm font-medium">{country.name}</span>
                  </div>
                  <span className="text-slate-300 text-sm">{country.dial}</span>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-slate-500 text-sm text-center">No countries found.</li>
            )}
          </ul>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #2ebf9b;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
