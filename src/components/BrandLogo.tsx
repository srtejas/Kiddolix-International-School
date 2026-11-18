import React, { useState } from 'react';
import { SCHOOL_BRAND } from '../data/schoolData';

interface BrandLogoProps {
  size?: 'sm' | 'md';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md' }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <span className="font-display text-lg font-bold tracking-tight text-[#0284C7] whitespace-nowrap shrink-0">
        {SCHOOL_BRAND.name}
      </span>
    );
  }

  const boxClass = size === 'sm' ? 'w-32 h-11' : 'w-40 h-13';

  return (
    <span
      className={`inline-flex items-center justify-center overflow-hidden rounded-lg bg-white ${boxClass} shrink-0`}
    >
      <img
        src="/assets/aistudio/image_2492799f.png"
        alt={SCHOOL_BRAND.fullName}
        className="w-full h-full object-cover object-[50%_46%] scale-[1.08]"
        onError={() => setImgError(true)}
      />
    </span>
  );
};
