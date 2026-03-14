export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  dosage: string;
  purity: string;
  image: string;
  description: string;
  compliance: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'mots-c-10',
    name: 'MOTS-C',
    slug: 'mots-c-10mg',
    category: 'Metabolic',
    price: 89.99,
    dosage: '10 mg',
    purity: 'Tested 99%+',
    image: 'https://placehold.co/600x800/050505/39FF14?text=MOTS-C+10mg',
    description: 'MOTS-c is a mitochondrial-derived peptide that regulates metabolic functions. Sold strictly for laboratory research use.',
    compliance: 'For laboratory research only. Not for human use.',
  },
  {
    id: 'bpc-157-5',
    name: 'BPC-157',
    slug: 'bpc-157-5mg',
    category: 'Recovery',
    price: 64.99,
    dosage: '5 mg',
    purity: 'Tested 99.8%+',
    image: 'https://placehold.co/600x800/050505/39FF14?text=BPC-157+5mg',
    description: 'Body Protective Compound 157 is a pentadecapeptide with systemic regenerative effects. Sold strictly for laboratory research use.',
    compliance: 'For laboratory research only. Not for human use.',
  },
  {
    id: 'tb-500-5',
    name: 'TB-500',
    slug: 'tb-500-5mg',
    category: 'Recovery',
    price: 74.99,
    dosage: '5 mg',
    purity: 'Tested 99.5%+',
    image: 'https://placehold.co/600x800/050505/39FF14?text=TB-500+5mg',
    description: 'Thymosin Beta-4 (TB-500) is a synthetic version of the naturally occurring peptide present in almost all human and animal cells.',
    compliance: 'For laboratory research only. Not for human use.',
  },
  {
    id: 'ghk-cu-50',
    name: 'GHK-Cu',
    slug: 'ghk-cu-50mg',
    category: 'Skin/Regen',
    price: 49.99,
    dosage: '50 mg',
    purity: 'Tested 99%+',
    image: 'https://placehold.co/600x800/050505/39FF14?text=GHK-Cu+50mg',
    description: 'Copper Peptide GHK-Cu is widely used in wound healing and skin regeneration research.',
    compliance: 'For laboratory research only. Not for human use.',
  }
];
