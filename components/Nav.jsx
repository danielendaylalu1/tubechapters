import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="flex items-center justify-around py-4">
      <Link href="/" className="text-2xl font-bold text-[#dc2626]">
        tubechapters
      </Link>
      <div className="flex gap-x-4 sm:gap-x-8 items-center">
        <Link
          href="#about"
          className="text-primary text-sm sm:text-base font-medium"
        >
          About
        </Link>
        <Link
          href="#how"
          className="text-primary text-sm sm:text-base font-medium"
        >
          How it works
        </Link>
        <Link
          href="#faqs"
          className="text-primary text-sm sm:text-base font-medium"
        >
          FAQs
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
