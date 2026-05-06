/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles, Sprout, Leaf } from "lucide-react";

export function BottomNav() {
  return (
    <>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-md border-t border-outline-variant/10 px-6 py-4 flex justify-between items-center z-50">
        <NavItem icon={<FaceIcon size={18} />} label="Face" active />
        <NavItem icon={<Sparkles size={18} />} label="Beauty Tools" />
        <NavItem icon={<Sprout size={18} />} label="Body" />
        <NavItem icon={<Leaf size={18} />} label="Ingredients" />
      </nav>
      {/* Spacer for bottom nav */}
      <div className="h-24 md:hidden" />
    </>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${active ? 'text-primary' : 'text-on-surface-variant/60 hover:text-on-surface-variant'}`}>
      <div className={active ? 'scale-110' : 'scale-100'}>
        {icon}
      </div>
      <span className="font-label text-[8px] uppercase tracking-wider">{label}</span>
      {active && <div className="w-1 h-1 bg-primary rounded-full mt-0.5" />}
    </div>
  );
}

// Simple fallback for FaceIcon if lucide-react version doesn't have it explicitly named as Face
function FaceIcon({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}
