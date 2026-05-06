/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  tag?: 'VEGAN' | 'ORGANIC' | 'NEW';
  image: string;
}

export interface TransparencyItem {
  id: string;
  title: string;
  content: string;
}
