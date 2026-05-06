/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { TopAppBar } from "./components/TopAppBar";
import { ProductCard } from "./components/ProductCard";
import { TransparencyAccordion } from "./components/TransparencyAccordion";
import { BottomNav } from "./components/BottomNav";
import { PRODUCTS, TRANSPARENCY_ITEMS } from "./constants";

export default function App() {
  return (
    <div className="min-h-screen bg-surface flex flex-col font-serif">
      <TopAppBar />
      
      <main className="max-w-[1280px] mx-auto w-full">
        {/* Hero Section */}
        <section className="px-6 pt-16 pb-12 flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="font-label text-primary uppercase text-[10px] tracking-[0.3em]">Collections</span>
            <div className="h-[1px] w-12 bg-outline-variant" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-headline text-5xl md:text-7xl text-on-surface leading-tight"
          >
            Face
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-body-lg text-on-surface-variant max-w-xl leading-relaxed md:text-lg italic"
          >
            Curated essentials for a radiant complexion. We strip away the unnecessary, 
            leaving only potent botanicals that honor your skin's natural rhythm.
          </motion.p>
        </section>

        {/* Product Grid */}
        <section className="px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
            {PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            
            {PRODUCTS[4] && (
              <ProductCard product={PRODUCTS[4]} isLarge />
            )}
          </div>
        </section>

        <TransparencyAccordion items={TRANSPARENCY_ITEMS} />

        {/* Lifestyle Banner */}
        <section className="px-6 py-24 bg-surface flex flex-col md:flex-row items-center gap-12 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex-1 aspect-[4/5] w-full bg-surface-container-low overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecee?q=80&w=1200&auto=format&fit=crop" 
              alt="Botanical lifestyle"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="flex-1 flex flex-col gap-6 md:pl-12">
            <span className="font-label text-primary">Our Philosophy</span>
            <h3 className="font-headline text-4xl text-on-surface leading-tight">Grounded in Nature, Refined by Science.</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Every drop is a testament to our commitment to purity. We believe that true beauty 
              is found in the harmony between human biology and the botanical world.
            </p>
            <button className="self-start pb-1 border-b border-on-surface font-label text-[10px] hover:text-primary hover:border-primary transition-all duration-300 cursor-pointer">
              Read Our Journal
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low/80 border-t border-outline-variant/20 px-6 py-24">
        <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-12">
          <h2 className="font-headline text-3xl md:text-5xl text-on-surface tracking-widest">PURE BOTANICALS</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterLinkGroup title="Shop" links={["Face", "Body", "Tools", "Kits"]} />
            <FooterLinkGroup title="About" links={["Our Story", "Journal", "Sourcing", "Transparency"]} />
            <FooterLinkGroup title="Support" links={["Shipping", "Returns", "Contact", "FAQ"]} />
            <FooterLinkGroup title="Social" links={["Instagram", "Pinterest", "TikTok"]} />
          </div>
          
          <div className="mt-12 pt-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="font-label text-[8px] text-on-surface-variant">
              © 2024 PURE BOTANICALS. RADICAL TRANSPARENCY IN EVERY DROP.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-label text-[8px] hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="font-label text-[8px] hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <BottomNav />
    </div>
  );
}

function FooterLinkGroup({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-label text-primary">{title}</span>
      <div className="flex flex-col gap-2">
        {links.map(link => (
          <a key={link} href="#" className="font-serif text-sm text-on-surface-variant hover:text-on-surface transition-colors">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

