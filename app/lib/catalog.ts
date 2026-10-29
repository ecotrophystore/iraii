/**
 * Catalog data for IRAI.
 *
 * MVP: this is mock data so the storefront runs before the Shopify store is wired up.
 * Step 4 replaces these functions with Storefront API queries (see app/lib/storefront.server.ts).
 * Copy and imagery here are IRAI's own placeholders.
 */

export type Shape = 'panel' | 'round' | 'lamp' | 'bell';
export type Material = 'wood' | 'brass' | 'clay';
/** [name, swatch colour, finish group] */
export type Finish = [name: string, color: string, group: string];
/** [label, metric, extra price in INR, in stock] */
export type SizeOption = [label: string, metric: string, extra: number, inStock: boolean];

export type Product = {
  id: string;
  name: string;
  cols: string[];
  price: number;
  was?: number;
  badges: string[];
  shape: Shape;
  material: Material;
  finishes: Finish[];
  sizes: SizeOption[];
  bestFor: string[];
  weight: string;
  wood: string;
  origin: string;
  lead: string;
};

export type Collection = { handle: string; title: string; copy: string; c: string; o: [string, string] };

export const SHIP_FREE = 3000;
export const SHIP_FLAT = 150;

export const money = (n: number) => '₹' + n.toLocaleString('en-IN');

export const PRODUCTS: Product[] = [
  { id: 'murugan-vel-panel', name: 'Vel Wall Panel', cols: ['murugan', 'wall-art', 'festival'], price: 4800, badges: ['New'], shape: 'panel', material: 'wood',
    finishes: [['Natural Teak', '#a0713f', 'Wood'], ['Ebony Stain', '#2f2620', 'Wood'], ['Antique Gold', '#b8924a', 'Lacquer'], ['Maroon Lacquer', '#5c1a1b', 'Lacquer']],
    sizes: [['12 × 18 in', '30 × 45 cm', 0, true], ['18 × 24 in', '45 × 60 cm', 1800, true], ['24 × 36 in', '60 × 90 cm', 4200, false]],
    bestFor: ['Pooja room', 'Living room', 'Housewarming'], weight: '2.4 kg (12 × 18)', wood: 'Teak', origin: 'Tiruchengode, Tamil Nadu',
    lead: 'A spear carved in relief on a single teak board, with the grain left visible around it.' },
  { id: 'ganesha-diya', name: 'Ganesha Diya', cols: ['sacred-objects', 'gifting'], price: 1650, badges: ['Bestseller'], shape: 'lamp', material: 'brass',
    finishes: [['Polished Brass', '#c9a24f', 'Brass'], ['Oxidised Brass', '#5e4b2f', 'Brass']],
    sizes: [['Small', '9 cm', 0, true], ['Medium', '13 cm', 600, true]],
    bestFor: ['Daily lighting', 'Gifting', 'Deepavali'], weight: '320 g (Small)', wood: '—', origin: 'Kumbakonam, Tamil Nadu',
    lead: 'A small cast-brass lamp for daily or festival lighting, weighted so it sits steady on a plate.' },
  { id: 'lakshmi-lotus', name: 'Lakshmi Lotus Panel', cols: ['wall-art', 'festival'], price: 3600, was: 4200, badges: ['Sale', 'Final few'], shape: 'panel', material: 'wood',
    finishes: [['Natural Wood', '#a0713f', 'Wood'], ['Sage Wash', '#8a9a7b', 'Wash'], ['Ivory Wash', '#e8dcc2', 'Wash']],
    sizes: [['12 × 12 in', '30 × 30 cm', 0, true], ['18 × 18 in', '45 × 45 cm', 1400, true]],
    bestFor: ['Entrance', 'Festival décor'], weight: '1.6 kg (12 × 12)', wood: 'Mango wood', origin: 'Tiruchengode, Tamil Nadu',
    lead: 'Lotus petals carved in three layers and washed by hand, so each panel reads slightly differently.' },
  { id: 'nataraja-plaque', name: 'Nataraja Plaque', cols: ['wall-art'], price: 5400, badges: [], shape: 'round', material: 'wood',
    finishes: [['Mango Wood', '#8a5a30', 'Wood'], ['Ebony Stain', '#2f2620', 'Wood']],
    sizes: [['14 in', '35 cm', 0, true], ['20 in', '50 cm', 2600, true]],
    bestFor: ['Study', 'Living room'], weight: '2.9 kg (14 in)', wood: 'Mango wood', origin: 'Tiruchengode, Tamil Nadu',
    lead: 'The dancing form in deep relief on a round plaque, mounted to hang flush against the wall.' },
  { id: 'sage-kalash', name: 'Sage Kalash', cols: ['sacred-objects'], price: 2250, badges: ['New'], shape: 'round', material: 'clay',
    finishes: [['Sage Glaze', '#8a9a7b', 'Glaze'], ['Ivory Glaze', '#e8dcc2', 'Glaze'], ['Maroon Glaze', '#6e2526', 'Glaze']],
    sizes: [['Medium', '18 cm', 0, true], ['Large', '24 cm', 900, true]],
    bestFor: ['Kalash pooja', 'Flowers'], weight: '900 g (Medium)', wood: '—', origin: 'Manamadurai, Tamil Nadu',
    lead: 'A sacred vessel for water or flowers, thrown on the wheel and glazed once.' },
  { id: 'festival-bell', name: 'Festival Temple Bell', cols: ['festival', 'sacred-objects', 'gifting'], price: 2900, badges: ['Festival edit'], shape: 'bell', material: 'brass',
    finishes: [['Brass', '#c9a24f', 'Brass'], ['Brass, Maroon Cord', '#5c1a1b', 'Brass']],
    sizes: [['Standard', '16 cm', 0, true]],
    bestFor: ['Pooja room', 'Gifting'], weight: '640 g', wood: '—', origin: 'Kumbakonam, Tamil Nadu',
    lead: 'A brass bell on a maroon cord, released for one festival season and not restocked.' },
  { id: 'shiva-mandala', name: 'Shiva Mandala Box', cols: ['wall-art'], price: 4100, badges: [], shape: 'panel', material: 'wood',
    finishes: [['Walnut', '#6b4426', 'Wood'], ['Ivory', '#e8dcc2', 'Wash']],
    sizes: [['12 × 12 in', '30 × 30 cm', 0, true], ['18 × 18 in', '45 × 45 cm', 1700, false]],
    bestFor: ['Meditation corner'], weight: '1.8 kg (12 × 12)', wood: 'Walnut', origin: 'Tiruchengode, Tamil Nadu',
    lead: 'A layered mandala set in a shadow box, so light falls across each ring at a different depth.' },
  { id: 'gift-set', name: 'Devotion Gift Set', cols: ['gifting'], price: 2400, badges: ['Bestseller'], shape: 'lamp', material: 'brass',
    finishes: [['Brass and Teak', '#a0713f', 'Set']],
    sizes: [['One size', 'Boxed', 0, true]],
    bestFor: ['Housewarming', 'Weddings', 'Corporate gifting'], weight: '1.1 kg boxed', wood: 'Teak tray', origin: 'Tamil Nadu',
    lead: 'A brass diya, a small bell and a teak tray, boxed with a card on the meaning of each piece.' },
  { id: 'murugan-shrine', name: 'Murugan Desk Shrine', cols: ['murugan', 'sacred-objects'], price: 1980, badges: [], shape: 'bell', material: 'brass',
    finishes: [['Teak Base', '#a0713f', 'Base'], ['Ebony Base', '#2f2620', 'Base']],
    sizes: [['Small', '15 cm', 0, true], ['Medium', '22 cm', 500, true]],
    bestFor: ['Desk', 'Travel shrine'], weight: '450 g (Small)', wood: 'Teak', origin: 'Tiruchengode, Tamil Nadu',
    lead: 'A brass figure on a turned teak base, small enough for a desk or a shelf.' },
  { id: 'lotus-bowl', name: 'Lotus Offering Bowl', cols: ['sacred-objects', 'gifting'], price: 1450, badges: [], shape: 'lamp', material: 'clay',
    finishes: [['Ivory', '#e8dcc2', 'Glaze'], ['Sage', '#8a9a7b', 'Glaze']],
    sizes: [['Standard', '14 cm', 0, true]],
    bestFor: ['Offerings', 'Gifting'], weight: '380 g', wood: '—', origin: 'Manamadurai, Tamil Nadu',
    lead: 'A hand-pressed bowl for flowers or prasadam, glazed in a soft ivory.' },
  { id: 'torana-garland', name: 'Festival Torana', cols: ['festival'], price: 1200, badges: ['Festival edit', 'Final few'], shape: 'lamp', material: 'brass',
    finishes: [['Maroon', '#5c1a1b', 'Cloth'], ['Sage', '#8a9a7b', 'Cloth']],
    sizes: [['Door width', '90 cm', 0, true]],
    bestFor: ['Doorway', 'Deepavali', 'Pongal'], weight: '520 g', wood: '—', origin: 'Tamil Nadu',
    lead: 'A doorway hanging of woven cloth with small brass bells along the lower edge.' },
  { id: 'peacock-frame', name: 'Peacock Carved Frame', cols: ['wall-art'], price: 3200, badges: ['New'], shape: 'panel', material: 'wood',
    finishes: [['Teak', '#a0713f', 'Wood'], ['Deep Blue', '#2e4b5a', 'Lacquer']],
    sizes: [['12 × 16 in', '30 × 40 cm', 0, true], ['16 × 20 in', '40 × 50 cm', 900, true]],
    bestFor: ['Hallway', 'Living room'], weight: '1.4 kg (12 × 16)', wood: 'Teak', origin: 'Tiruchengode, Tamil Nadu',
    lead: 'A carved peacock frame that holds a print on archival cotton paper.' }
];

export const COLLECTIONS: Record<string, Collection> = {
  all: { handle: 'all', title: 'Shop All', copy: 'Carved wood, cast brass and glazed clay for the home shrine and the rooms around it.', c: '#4a3a30', o: ['#c79a5c', '#7a5230'] },
  new: { handle: 'new', title: 'New Arrivals', copy: 'Pieces added this season, as each batch leaves the workshop.', c: '#6f7f68', o: ['#e8dcc2', '#a0713f'] },
  'wall-art': { handle: 'wall-art', title: 'Wall Art', copy: 'Hand-carved panels, plaques and shadow boxes, ready to hang.', c: '#5a3f2c', o: ['#c79a5c', '#7a5230'] },
  'sacred-objects': { handle: 'sacred-objects', title: 'Sacred Objects', copy: 'Lamps, bells and vessels made for daily worship.', c: '#6f7f68', o: ['#f1d58a', '#a8874a'] },
  murugan: { handle: 'murugan', title: 'Murugan', copy: 'The Vel, the peacock and the shrine, carved and cast in Tamil Nadu.', c: '#5c1a1b', o: ['#f1d58a', '#b8924a'] },
  gifting: { handle: 'gifting', title: 'Gifting', copy: 'Boxed pieces with a card that explains what each one means.', c: '#8a5b3c', o: ['#e8dcc2', '#a8874a'] },
  festival: { handle: 'festival', title: 'Festival Edit', copy: 'Made in small numbers for one season, then retired.', c: '#2e1213', o: ['#f1d58a', '#b8924a'] }
};

export const ANNOUNCEMENTS = [
  'Free shipping across India on orders over ₹3,000',
  'Festival edit dispatches within 3 working days',
  'Every piece ships with a card explaining its meaning'
];

export const CAT_CARDS = [
  { h: 'new', title: 'New Arrivals', c: '#6f7f68', c2: '#56664f', shape: 'panel' as Shape, o: ['#e8dcc2', '#a0713f'] as [string, string], shape2: 'round' as Shape, o2: ['#f1d58a', '#8a5f34'] as [string, string], ctas: [['new', 'Shop all new'], ['wall-art', 'New wall art']] },
  { h: 'wall-art', title: 'Wall Art', c: '#4a3a30', c2: '#2f241d', shape: 'round' as Shape, o: ['#c79a5c', '#6b4426'] as [string, string], shape2: 'panel' as Shape, o2: ['#e8dcc2', '#7a5230'] as [string, string], ctas: [['wall-art', 'Shop wall art'], ['murugan', 'Shop Murugan']] },
  { h: 'sacred-objects', title: 'Sacred Objects', c: '#8c4f4a', c2: '#6e3632', shape: 'bell' as Shape, o: ['#f1d58a', '#a8874a'] as [string, string], shape2: 'lamp' as Shape, o2: ['#f1d58a', '#8a6a33'] as [string, string], ctas: [['sacred-objects', 'Shop objects'], ['gifting', 'Shop gifting']] },
  { h: 'festival', title: 'Festival Edit', c: '#8b875f', c2: '#5c1a1b', shape: 'lamp' as Shape, o: ['#f1d58a', '#a8874a'] as [string, string], shape2: 'bell' as Shape, o2: ['#f1d58a', '#b8924a'] as [string, string], ctas: [['festival', 'Shop the edit']] }
];

const OBJ_TONES: Record<Material, [string, string]> = { wood: ['#c79a5c', '#7a5230'], brass: ['#f1d58a', '#a8874a'], clay: ['#d9cdb2', '#8a9a7b'] };

/** Placeholder art colours for a product in a given finish. */
export function objColours(p: Product, finishIndex = 0): { o1: string; o2: string } {
  const f = p.finishes[finishIndex] ?? p.finishes[0];
  return { o1: OBJ_TONES[p.material][0], o2: f[1] };
}

export function productUnitPrice(p: Product, sizeIndex: number | null): number {
  const s = sizeIndex === null ? undefined : p.sizes[sizeIndex];
  return p.price + (s ? s[2] : 0);
}

export function getProduct(handle: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === handle);
}

export function getCollection(handle: string): Collection | undefined {
  return COLLECTIONS[handle];
}

export function collectionCount(handle: string): number {
  return handle === 'new'
    ? PRODUCTS.filter((p) => p.badges.includes('New')).length
    : PRODUCTS.filter((p) => p.cols.includes(handle)).length;
}

export function searchProducts(q: string): Product[] {
  const t = q.trim().toLowerCase();
  if (!t) return [];
  return PRODUCTS.filter((p) =>
    [p.name, p.material, p.cols.join(' '), p.bestFor.join(' '), p.finishes.map((f) => f[0]).join(' ')]
      .join(' ')
      .toLowerCase()
      .includes(t)
  );
}

export function bestSellers(): Product[] {
  return [...PRODUCTS].sort(
    (a, b) => Number(b.badges.includes('Bestseller')) - Number(a.badges.includes('Bestseller')) || Number(b.badges.includes('New')) - Number(a.badges.includes('New'))
  );
}

export function newArrivals(): Product[] {
  return PRODUCTS.filter((p) => p.badges.includes('New')).concat(PRODUCTS.filter((p) => !p.badges.includes('New'))).slice(0, 8);
}

export const POLICIES: Record<string, [string, string]> = {
  refund: ['Refund policy', 'Unused pieces in their original packing can be returned within 15 days of delivery for a full refund. Festival-edit pieces are final sale unless they arrive damaged.'],
  privacy: ['Privacy policy', 'We use your details only to fulfil orders and, if you sign up, to send festival alerts. You can unsubscribe at any time.'],
  terms: ['Terms of service', 'Prices are in Indian rupees and include GST. Hand-finished pieces vary slightly in grain and tone; this is not a defect.'],
  shipping: ['Shipping policy', 'Free shipping within India on orders over ₹3,000; otherwise a flat ₹150. Most pieces dispatch within 3–5 working days, wrapped in cloth and boxed.']
};
