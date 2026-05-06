/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Menu, ShoppingBag } from "lucide-react";

export function TopAppBar() {
  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 px-6 py-4 flex justify-between items-center w-full">
      <button className="hover:opacity-70 transition-opacity active:scale-95 duration-150">
        <Menu size={20} className="text-primary" strokeWidth={1.5} />
      </button>
      <h1 className="font-headline text-2xl tracking-[0.2em] text-on-surface">PURE</h1>
      <button className="hover:opacity-70 transition-opacity active:scale-95 duration-150 relative">
        <ShoppingBag size={20} className="text-primary" strokeWidth={1.5} />
        <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[8px] w-3 h-3 rounded-full flex items-center justify-center font-sans font-bold">
          0
        </span>
      </button>
    </header>
  );
}
