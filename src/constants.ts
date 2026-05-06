/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, TransparencyItem } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Illuminating Cleansing Gel",
    price: 42.00,
    description: "Gentle sea kelp and rosehip cleanser.",
    tag: "VEGAN",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Unifying Serum Spray",
    price: 68.00,
    description: "Active niacinamide mist for balanced tone.",
    tag: "ORGANIC",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Phyto-Active Oil",
    price: 56.00,
    description: "Pure squalane for deep hydration.",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Mineral Sun Shield",
    price: 38.00,
    description: "Invisible zinc daily protection.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "Overnight Botanical Mask",
    price: 84.00,
    description: "Restorative resins and cold-pressed oils.",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1200&auto=format&fit=crop"
  }
];

export const TRANSPARENCY_ITEMS: TransparencyItem[] = [
  {
    id: "sourcing",
    title: "SOURCING INTEGRITY",
    content: "We partner with small-scale farms using regenerative practices. Every botanical is harvested at its nutritional peak to ensure the highest concentration of active compounds."
  },
  {
    id: "science",
    title: "SCIENTIFIC RIGOR",
    content: "Our lab combines traditional herbalism with modern biotechnology. We utilize CO2 extraction for pure, solvent-free plant actives that maintain their energetic blueprint."
  },
  {
    id: "packaging",
    title: "PACKAGING LIFECYCLE",
    content: "Our glass is Miron violet-tinted to protect against light degradation. Every component, from label to pump, is designed for infinite recyclability or home composting."
  }
];
