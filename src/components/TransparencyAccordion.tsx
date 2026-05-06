/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { TransparencyItem } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface TransparencyAccordionProps {
  items: TransparencyItem[];
}

export function TransparencyAccordion({ items }: TransparencyAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="px-6 py-stack-lg bg-surface-container-low/50">
      <h4 className="font-headline text-2xl text-on-surface mb-8">Radical Transparency</h4>
      <div className="flex flex-col border-t border-outline-variant/30">
        {items.map((item) => (
          <div key={item.id} className="border-b border-outline-variant/30">
            <button
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full py-6 flex justify-between items-center group cursor-pointer text-left"
            >
              <span className="font-label text-xs uppercase tracking-[0.2em]">{item.title}</span>
              {openId === item.id ? (
                <Minus size={18} className="text-secondary" strokeWidth={1} />
              ) : (
                <Plus size={18} className="text-secondary" strokeWidth={1} />
              )}
            </button>
            <AnimatePresence>
              {openId === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 font-serif text-on-surface-variant leading-relaxed max-w-xl">
                    {item.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
