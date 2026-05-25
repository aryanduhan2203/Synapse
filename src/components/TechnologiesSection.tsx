"use client";

import { useState } from "react";

interface TechnologiesSectionProps {
  dict: {
    title: string;
  };
}

type TabType =
  | "cross-platform"
  | "ios"
  | "android"
  | "frontend"
  | "backend"
  | "cloud"
  | "database"
  | "payments";

interface TechItem {
  name: string;
  logo: React.ReactNode;
  label?: string;
  labelColor?: string;
  borderColor?: string;
}

export default function TechnologiesSection({ dict }: TechnologiesSectionProps) {
  const [activeTab, setActiveTab] = useState<TabType>("cross-platform");

  // Custom SVG Logos
  const ReactIcon = (
    <svg className="w-16 h-16 text-[#61dafb] animate-[spin_20s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(0 12 12)" />
      <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(60 12 12)" />
      <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );

  const FlutterIcon = (
    <svg className="w-16 h-16 text-[#02569B]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.314 0L2.3 12l3.6 3.6 12.015-12.015h-3.601zM21.7 12l-6-6H12.1l6 6-6 6h3.6l6-6z" />
    </svg>
  );

  const SwiftIcon = (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="swift-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9F43" />
          <stop offset="100%" stopColor="#FF5252" />
        </linearGradient>
      </defs>
      <path
        d="M21.848 13.918c-.015-.034-.144-.337-.306-.605a9.055 9.055 0 00-1.89-2.228 11.233 11.233 0 00-3.327-1.996c-.464-.176-.94-.316-1.423-.42a12.871 12.871 0 01-1.012.302c.983-.342 1.839-.778 2.545-1.282.894-.638 1.488-1.393 1.764-2.235a9.712 9.712 0 00-3.541 1.722c-1.127.842-1.921 1.897-2.368 3.125a14.28 14.28 0 00-1.57-.061c-1.284 0-2.493.18-3.593.535a8.472 8.472 0 011.758-2.616c1.196-1.14 2.802-1.844 4.778-2.091-.659-.074-1.332-.085-2.008-.027-1.954.168-3.722.955-5.176 2.307a10.237 10.237 0 00-2.85 4.595 10.976 10.976 0 00-.317 2.502c0 2.215.82 4.282 2.298 5.922 1.636 1.815 3.931 2.89 6.452 2.89 2.551 0 4.887-1.106 6.523-2.96 1.455-1.648 2.247-3.708 2.247-5.91-.001-.295-.015-.589-.044-.882z"
        fill="url(#swift-grad)"
      />
    </svg>
  );

  const SwiftUIIcon = (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="swiftui-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F5D4" />
          <stop offset="100%" stopColor="#0A84FF" />
        </linearGradient>
      </defs>
      <path
        d="M21.848 13.918c-.015-.034-.144-.337-.306-.605a9.055 9.055 0 00-1.89-2.228 11.233 11.233 0 00-3.327-1.996c-.464-.176-.94-.316-1.423-.42a12.871 12.871 0 01-1.012.302c.983-.342 1.839-.778 2.545-1.282.894-.638 1.488-1.393 1.764-2.235a9.712 9.712 0 00-3.541 1.722c-1.127.842-1.921 1.897-2.368 3.125a14.28 14.28 0 00-1.57-.061c-1.284 0-2.493.18-3.593.535a8.472 8.472 0 011.758-2.616c1.196-1.14 2.802-1.844 4.778-2.091-.659-.074-1.332-.085-2.008-.027-1.954.168-3.722.955-5.176 2.307a10.237 10.237 0 00-2.85 4.595 10.976 10.976 0 00-.317 2.502c0 2.215.82 4.282 2.298 5.922 1.636 1.815 3.931 2.89 6.452 2.89 2.551 0 4.887-1.106 6.523-2.96 1.455-1.648 2.247-3.708 2.247-5.91-.001-.295-.015-.589-.044-.882z"
        fill="url(#swiftui-grad)"
      />
    </svg>
  );

  // Colorful Webpack 3D Cube matching image 4
  const WebpackIcon = (
    <svg className="w-16 h-16" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top Face (Green) */}
      <path d="M60 20 L95 40 L60 60 L25 40 Z" fill="#10B981" />
      {/* Left Face (Dark Blue) */}
      <path d="M25 40 L60 60 L60 100 L25 80 Z" fill="#1E293B" />
      {/* Right Face (Blue) */}
      <path d="M60 60 L95 40 L95 80 L60 100 Z" fill="#3B82F6" />
      {/* Inner Top Face (Light Green) */}
      <path d="M60 40 L77.5 50 L60 60 L42.5 50 Z" fill="#A7F3D0" opacity="0.85" />
      {/* Inner Left Face (Deep Blue) */}
      <path d="M42.5 50 L60 60 L60 80 L42.5 70 Z" fill="#0F172A" opacity="0.85" />
      {/* Inner Right Face (Light Blue) */}
      <path d="M60 60 L77.5 50 L77.5 70 L60 80 Z" fill="#93C5FD" opacity="0.85" />
    </svg>
  );

  const KotlinIcon = (
    <svg className="w-16 h-16 text-[#7F52FF]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.3 22h21.4L12 11.3 1.3 22zM22.7 2H1.3v20l10.7-10.7L22.7 2z" />
    </svg>
  );

  const AndroidIcon = (
    <svg className="w-16 h-16 text-[#3DDC84]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.3414c-.5511 0-.9982-.4471-.9982-.9982 0-.5511.4471-.9982.9982-.9982.5511 0 .9982.4471.9982.9982 0 .5511-.4471.9982-.9982.9982m-11.046 0c-.5511 0-.9982-.4471-.9982-.9982 0-.5511.4471-.9982.9982-.9982.5511 0 .9982.4471.9982.9982 0 .5511-.4471.9982-.9982.9982M17.9625 10.144l1.986-3.44a.4228.4228 0 00-.1546-.5768.423.423 0 00-.5768.1546l-2.012 3.486A11.3932 11.3932 0 0012 9.0838c-2.1818 0-4.218.6186-5.9525 1.684l-2.012-3.486A.4218.4218 0 003.4586 6.705a.423.423 0 00-.1546.5768l1.986 3.44A11.7588 11.7588 0 001.0772 16.5h21.8456a11.7588 11.7588 0 00-4.9603-6.356" />
    </svg>
  );

  const NodeIcon = (
    <svg className="w-16 h-16 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2.5 7.5v11L12 24l9.5-5.5v-11L12 2zm1.25 19.34l-7-4.04v-7.8l7 4.04v7.8zm0-9.52l-7-4.04L12 4.66l7 4.04-7 4.04-7-4.04zm1.25 9.52v-7.8l7-4.04v7.8l-7 4.04z" />
    </svg>
  );

  const ExpressIcon = (
    <svg className="w-16 h-16 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="9" y1="9" x2="15" y2="15" />
      <line x1="15" y1="9" x2="9" y2="15" />
    </svg>
  );

  const GoIcon = (
    <svg className="w-16 h-16 text-[#00ADD8]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.156 8.359c-.482-.375-1.07-.562-1.764-.562-1.34 0-2.316.91-2.928 2.73a6.837 6.837 0 00-.334 2.164c0 1.25.306 2.193.918 2.827.612.634 1.396.951 2.352.951.782 0 1.458-.201 2.029-.603V13.84H12.35v-1.79h3.766v4.996c-.848.742-1.956 1.113-3.324 1.113-1.634 0-2.964-.515-3.992-1.545C7.772 15.584 7.258 14.103 7.258 12c0-2.022.528-3.528 1.584-4.52 1.056-.99 2.37-1.485 3.942-1.485.992 0 1.933.25 2.822.75v1.614zm4.12 1.14v5c0 1.634-.515 2.964-1.545 3.992-1.03 1.028-2.51 1.542-4.442 1.542V19c1.25 0 2.193-.306 2.827-.918.634-.612.951-1.396.951-2.352v-6.23h2.21z" />
    </svg>
  );

  const DjangoIcon = (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#092E20"/>
      <text x="4" y="17" fontFamily="Georgia, serif" fontSize="11" fontWeight="bold" fill="#44B78B">django</text>
    </svg>
  );

  const LaravelIcon = (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027.29.29 0 01-.066.016.285.285 0 01-.065 0 .29.29 0 01-.066-.013L.534 18.786a.378.378 0 01-.189-.326V3.603c0-.05.01-.1.027-.147l.033-.066.015-.022a.368.368 0 01.08-.079L4.944.289A.378.378 0 015.133 0c.066 0 .13.018.189.052l4.478 2.544a.38.38 0 01.188.327v4.887l3.948-2.27a.378.378 0 01.188-.053c.066 0 .131.018.19.052l4.477 2.544a.37.37 0 01.19.326v4.887l3.947-2.27a.377.377 0 01.378 0l4.478 2.544a.38.38 0 01.14.156z" fill="#FF2D20"/>
    </svg>
  );

  const DotNetIcon = (
    <svg className="w-16 h-16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#5C2D91"/>
      <text x="50%" y="44%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="900" fill="white">.NET</text>
      <text x="50%" y="68%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5" fontWeight="700" fill="#c9a7f5">Core</text>
    </svg>
  );

  const PhpIcon = (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="12" rx="12" ry="7.5" fill="#8892BE" opacity="0.2" stroke="#8892BE" strokeWidth="1"/>
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="900" fill="#8892BE" letterSpacing="1">php</text>
    </svg>
  );

  const AWSIcon = (
    <svg className="w-20 h-10" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="4" y="24" fontFamily="Amazon Ember, Arial, sans-serif" fontSize="26" fontWeight="900" fill="#232F3E" letterSpacing="-1">aws</text>
      <path d="M4 32 Q40 44 76 32" stroke="#FF9900" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <polygon points="72,28 80,32 72,36" fill="#FF9900"/>
    </svg>
  );

  const GoogleCloudIcon = (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6.5a5.5 5.5 0 015.5 5.5H19a7 7 0 00-7-7v1.5z" fill="#4285F4"/>
      <path d="M6.5 12A5.5 5.5 0 0112 6.5V5a7 7 0 00-7 7h1.5z" fill="#EA4335"/>
      <path d="M12 17.5A5.5 5.5 0 016.5 12H5a7 7 0 007 7v-1.5z" fill="#34A853"/>
      <path d="M17.5 12A5.5 5.5 0 0112 17.5V19a7 7 0 007-7h-1.5z" fill="#FBBC05"/>
      <circle cx="12" cy="12" r="3" fill="white"/>
      <circle cx="12" cy="12" r="1.8" fill="#4285F4"/>
      <circle cx="19" cy="12" r="1.5" fill="#4285F4"/>
      <circle cx="5" cy="12" r="1.5" fill="#EA4335"/>
      <circle cx="12" cy="19" r="1.5" fill="#34A853"/>
      <circle cx="12" cy="5" r="1.5" fill="#4285F4"/>
    </svg>
  );

  const FirebaseIcon = (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 18.5L8.5 4.5L13 10L10 13.5L5.5 18.5Z" fill="#FFA000"/>
      <path d="M10 13.5L13 10L18.5 18.5L10 13.5Z" fill="#F57C00"/>
      <path d="M5.5 18.5L10 13.5L18.5 18.5L5.5 18.5Z" fill="#FFCA28"/>
      <path d="M14.5 7.5L13 10L10 13.5L14.5 7.5Z" fill="#FFA000"/>
      <path d="M14.5 7.5L18.5 18.5L13 10L14.5 7.5Z" fill="#F57C00"/>
    </svg>
  );


  const PostgresIcon = (
    <svg className="w-16 h-16" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 10C16 10 14 12 14 14v4h8v-4c0-2-2-4-4-4zM16 12c1 0 2 1 2 2h-4c0-1 1-2 2-2z" fill="#336791"/>
      <path d="M12 16h12v4h-12z" fill="#336791"/>
      <text x="20" y="28" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" fill="#336791">PostgreSQL</text>
    </svg>
  );

  const MongoIcon = (
    <svg className="w-16 h-16" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6c0 0-4 4-4 10s2 8 4 12c2-4 4-6 4-12s-4-10-4-10z" fill="#47A248"/>
      <path d="M20 6c0 0-2 4-2 10s1 8 2 12V6z" fill="#3E863D"/>
      <text x="20" y="32" dominantBaseline="middle" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fontWeight="bold" fill="#47A248">mongoDB</text>
    </svg>
  );

  const SQLIcon = (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="5" rx="10" ry="3" fill="#00758F"/>
      <path d="M2 5v14c0 1.66 4.48 3 10 3s10-1.34 10-3V5H2z" fill="#005C84"/>
      <ellipse cx="12" cy="5" rx="8" ry="2" fill="#00A2ED"/>
      <text x="12" y="15" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold" fill="white">SQL</text>
    </svg>
  );

  const MySQLIcon = (
    <svg className="w-16 h-16" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 12c-2-2-5-1-6 2 0 1 1 2 2 2 2 0 4-1 4-4zm-8 4c-3-2-8 1-5 5 1 1 3 0 3-1 0-1-1-2-1-2 1 0 2-1 3-2zM32 20c-1-3-4-5-7-3-1 1-1 2 0 3 2 1 5 1 7 0z" fill="#00758F"/>
      <text x="20" y="28" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#00758F">My<tspan fill="#F29111">SQL</tspan></text>
    </svg>
  );

  const StripeIcon = (
    <svg className="w-20 h-10" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="30" y="20" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#6772E5" letterSpacing="-1">stripe</text>
    </svg>
  );

  const RazorpayIcon = (
    <svg className="w-32 h-10" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10l-4 10h4l4-10h-4z" fill="#3395FF"/>
      <path d="M16 10l-4 10h12l4-10H16z" fill="#0A2540"/>
      <text x="32" y="20" dominantBaseline="middle" textAnchor="start" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#0A2540" fontStyle="italic">Razorpay</text>
    </svg>
  );

  const GPayIcon = (
    <svg className="w-20 h-10" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 3)">
        <path d="M23.55 12.268c0-.851-.077-1.67-.218-2.46H12v4.654h6.472a5.534 5.534 0 0 1-2.404 3.633v3.02h3.89c2.276-2.096 3.592-5.185 3.592-8.847z" fill="#4285F4"/>
        <path d="M12 24c3.25 0 5.978-1.076 7.969-2.915l-3.89-3.02c-1.08.723-2.457 1.15-4.079 1.15-3.136 0-5.792-2.118-6.738-4.965H1.24v3.125C3.218 21.294 7.275 24 12 24z" fill="#34A853"/>
        <path d="M5.262 14.25A7.146 7.146 0 0 1 4.888 12c0-.776.136-1.528.374-2.25V6.625H1.24A11.968 11.968 0 0 0 0 12c0 1.942.464 3.784 1.24 5.375l4.022-3.125z" fill="#FBBC05"/>
        <path d="M12 4.784c1.766 0 3.353.608 4.602 1.8l3.456-3.456C17.973 1.182 15.247 0 12 0 7.275 0 3.218 2.706 1.24 6.625l4.022 3.125C6.208 6.902 8.864 4.784 12 4.784z" fill="#EA4335"/>
      </g>
      <text x="26" y="19" dominantBaseline="middle" textAnchor="start" fontFamily="Arial, sans-serif" fontSize="17" fill="#5F6368">Pay</text>
    </svg>
  );

  const ApplePayIcon = (
    <svg className="w-20 h-10" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 15c0-2 2-3 2-3-1-2-3-2-4-2-2 0-3 1-4 1-1 0-2-1-4-1-2 0-3 1-4 3-2 3-1 8 1 11 1 1 2 2 3 2s2-1 3-1 2 1 3 1 2-1 3-2c1-2 2-3 2-3s-2-1-2-3zM13 8c1-1 2-2 2-3-1 0-2 0-3 1-1 1-2 2-2 3 1 0 2-1 3-1z" fill="black"/>
      <text x="22" y="20" dominantBaseline="middle" textAnchor="start" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="black">Pay</text>
    </svg>
  );

  // Tab configurations
  const tabConfig: { id: TabType; label: string }[] = [
    { id: "cross-platform", label: "Cross-platform" },
    { id: "ios", label: "iOS App" },
    { id: "android", label: "Android App" },
    { id: "frontend", label: "Front-end" },
    { id: "backend", label: "Back-end" },
    { id: "cloud", label: "Cloud" },
    { id: "database", label: "Data Base" },
    { id: "payments", label: "Payment Getways" },
  ];

  // Grid item mapping per tab with border and label properties to match mockups exactly
  const getTechItems = (tab: TabType): TechItem[] => {
    switch (tab) {
      case "cross-platform":
        return [
          {
            name: "React Native",
            logo: ReactIcon,
            label: "React Native",
            labelColor: "text-[#00c2cb]",
          },
          {
            name: "Flutter",
            logo: FlutterIcon,
            label: "React Native", // matches image 0 mockup layout
            labelColor: "text-[#00c2cb]",
          },
        ];
      case "ios":
        return [
          {
            name: "Swift",
            logo: SwiftIcon,
            borderColor: "border-[#F05138]", // orange border, no label
          },
          {
            name: "SwiftUI",
            logo: SwiftUIIcon,
            label: "SwiftUI",
            labelColor: "text-[#00c2cb]",
            borderColor: "border-[#0A84FF]/50", // blue border
          },
        ];
      case "android":
        return [
          {
            name: "Kotlin",
            logo: KotlinIcon,
            borderColor: "border-[#7F52FF]/50",
          },
          {
            name: "Android",
            logo: AndroidIcon,
            label: "Android",
            labelColor: "text-[#3DDC84]",
            borderColor: "border-[#3DDC84]/50",
          },
        ];
      case "frontend":
        return [
          {
            name: "React Native",
            logo: ReactIcon,
            label: "React Native",
            labelColor: "text-[#00c2cb]",
          },
          {
            name: "Webpack",
            logo: WebpackIcon,
            borderColor: "border-[#10B981]/30", // green/blue border, no label
          },
          {
            name: "SwiftUI",
            logo: SwiftUIIcon,
            label: "SwiftUI",
            labelColor: "text-[#00c2cb]",
            borderColor: "border-[#0A84FF]/50",
          },
          {
            name: "Flutter",
            logo: FlutterIcon,
            label: "React Native", // matches image 4 mockup layout
            labelColor: "text-[#00c2cb]",
          },
        ];
      case "backend":
        return [
          {
            name: "Node.js",
            logo: NodeIcon,
            label: "Node.js",
            labelColor: "text-[#339933]",
            borderColor: "border-[#339933]/30",
          },
          {
            name: "Django",
            logo: DjangoIcon,
            label: "Django",
            labelColor: "text-[#44B78B]",
            borderColor: "border-[#44B78B]/30",
          },
          {
            name: "Laravel",
            logo: LaravelIcon,
            label: "Laravel",
            labelColor: "text-[#FF2D20]",
            borderColor: "border-[#FF2D20]/30",
          },
          {
            name: ".NET Core",
            logo: DotNetIcon,
            label: ".NET Core",
            labelColor: "text-[#5C2D91]",
            borderColor: "border-[#5C2D91]/30",
          },
          {
            name: "PHP",
            logo: PhpIcon,
            label: "PHP",
            labelColor: "text-[#8892BE]",
            borderColor: "border-[#8892BE]/30",
          },
        ];
      case "cloud":
        return [
          {
            name: "AWS",
            logo: AWSIcon,
            label: "AWS",
            labelColor: "text-[#FF9900]",
            borderColor: "border-[#FF9900]/30",
          },
          {
            name: "Google Cloud",
            logo: GoogleCloudIcon,
            label: "Google Cloud",
            labelColor: "text-[#4285F4]",
            borderColor: "border-[#4285F4]/30",
          },
          {
            name: "Firebase",
            logo: FirebaseIcon,
            label: "Firebase",
            labelColor: "text-[#FFA000]",
            borderColor: "border-[#FFA000]/30",
          },
        ];
      case "database":
        return [
          {
            name: "SQL",
            logo: SQLIcon,
            borderColor: "border-[#005C84]/30",
          },
          {
            name: "MongoDB",
            logo: MongoIcon,
            borderColor: "border-[#47A248]/30",
          },
          {
            name: "MySQL",
            logo: MySQLIcon,
            borderColor: "border-[#00758F]/30",
          },
          {
            name: "PostgreSQL",
            logo: PostgresIcon,
            borderColor: "border-[#336791]/30",
          },
        ];
      case "payments":
        return [
          {
            name: "Stripe",
            logo: StripeIcon,
            borderColor: "border-[#6772E5]/30",
          },
          {
            name: "Razorpay",
            logo: RazorpayIcon,
            borderColor: "border-[#0A2540]/30",
          },
          {
            name: "G Pay",
            logo: GPayIcon,
            borderColor: "border-slate-300",
          },
          {
            name: "Apple Pay",
            logo: ApplePayIcon,
            borderColor: "border-slate-800",
          },
        ];
    }
  };

  const activeItems = getTechItems(activeTab);

  return (
    <section className="w-full bg-[#0c0d14] py-20 border-b border-white/5 relative">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-10 tracking-tight leading-tight">
          {dict.title}
        </h2>

        {/* Tab Badges */}
        <div className="flex flex-nowrap justify-center gap-3.5 mb-14 overflow-x-auto pb-1 mx-auto">
          {tabConfig.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-extrabold transition-all duration-300 ${
                  isActive
                    ? "bg-[#00ebd0] text-slate-950 shadow-lg shadow-[#00ebd0]/20 scale-105"
                    : "border border-[#00ebd0]/45 hover:border-[#00ebd0] text-white bg-transparent"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {activeItems.map((item, idx) => {
            const borderStyle = item.borderColor
              ? `border ${item.borderColor}`
              : "border-none shadow-[0_10px_35px_rgba(0,0,0,0.05)]";
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 flex flex-col items-center justify-center w-[180px] aspect-square transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl group select-none ${borderStyle}`}
              >
                {/* Logo Wrapper */}
                <div className="flex items-center justify-center flex-grow transition-transform duration-500 group-hover:scale-110">
                  {item.logo}
                </div>
                {/* Optional Label */}
                {item.label && (
                  <div className={`mt-5 text-sm font-black tracking-tight ${item.labelColor || "text-slate-900"} opacity-90 group-hover:opacity-100 transition-opacity`}>
                    {item.label}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
