/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from "../types";
import { motion } from "motion/react";

interface ProductCardProps {
  product: Product;
  isLarge?: boolean;
}

export function ProductCard({ product, isLarge }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col gap-4 group ${isLarge ? 'md:col-span-2 mt-4' : ''}`}
    >
      <div className={`overflow-hidden relative bg-surface-container-low ${isLarge ? 'aspect-[16/9]' : 'aspect-[3/4]'}`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {product.tag && (
          <div className="absolute top-4 left-4">
            <span className="bg-tertiary/10 text-tertiary px-3 py-1 font-label rounded-full backdrop-blur-sm">
              {product.tag}
            </span>
          </div>
        )}
      </div>
      
      <div className={`flex flex-col gap-1 ${isLarge ? 'md:max-w-md' : ''}`}>
        <div className="flex justify-between items-start">
          <h3 className="font-serif text-lg text-on-surface">{product.name}</h3>
          <span className="font-label text-on-surface-variant">${product.price.toFixed(2)}</span>
        </div>
        <p className="font-serif text-sm text-on-surface-variant italic leading-relaxed">
          {product.description}
        </p>
        <button className="mt-2 w-full py-3 border border-on-surface text-on-surface font-label uppercase text-[10px] hover:bg-on-surface hover:text-surface transition-all duration-500 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
