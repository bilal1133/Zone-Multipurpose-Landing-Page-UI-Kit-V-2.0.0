// _mock
import _mock from 'src/_mock';
// components
import Iconify from 'src/components/iconify';
import { MegaMenuItemProps } from 'src/components/mega-menu';

// MOCK DATA
// ----------------------------------------------------------------------

const PRODUCTS = [...Array(10)].map((_, index) => ({
  name: _mock.text.blogTitle(index),
  image: _mock.image.product(index),
  path: '#',
}));

const TAGS = [
  { name: 'Paper Cup', path: '#' },
  { name: 'Lotion Pump', path: '#' },
  { name: 'Brush Cutter', path: '#' },
  { name: 'Display Rack', path: '#' },
  { name: 'Glass Bottle', path: '#' },
];

export const data: MegaMenuItemProps[] = [
  {
    path: '',
    title: 'Categories',
    icon: <Iconify icon="carbon:menu" sx={{ width: 1, height: 1 }} />,
    products: PRODUCTS,
    tags: TAGS,
    children: [
      {
        subheader: 'Other Machinery & Parts',
        items: [
          { title: 'Metallic Processing Machinery', path: '#' },
          { title: 'Machinery for Food, Beverage & Cereal', path: '#' },
          { title: 'Laser Equipment', path: '#' },
          { title: 'Mould', path: '#' },
          { title: 'Textile Machinery & Parts', path: '#' },
          { title: 'Cutting & Fold-bend Machine', path: '#' },
          { title: 'Paper Machinery', path: '#' },
          { title: 'Rubber Machinery', path: '#' },
          { title: 'Chemical Equipment & Machinery', path: '#' },
          { title: 'Mixing Equipment', path: '#' },
          { title: 'Machinery for Garment, Shoes & Accessories', path: '#' },
          { title: 'Crushing & Culling Machine', path: '#' },
        ],
      },
      {
        subheader: 'Plastic & Woodworking',
        items: [
          { title: 'Plastic Machinery', path: '#' },
          { title: 'Woodworking Machinery', path: '#' },
          { title: 'Blow Molding Machine', path: '#' },
          { title: 'Plastic Recycling Machine', path: '#' },
          { title: 'Injection Molding Machine', path: '#' },
        ],
      },
      {
        subheader: 'Construction Machinery',
        items: [
          { title: 'Building Material Making Machinery', path: '#' },
          { title: 'Lifting Equipment', path: '#' },
          { title: 'Excavator', path: '#' },
          { title: 'Concrete Machinery', path: '#' },
          { title: 'Stone Processing Machinery', path: '#' },
        ],
      },
      {
        subheader: 'Agriculture Machinery',
        items: [
          { title: 'Agriculture Machinery', path: '#' },
          { title: 'Livestock MachineryFeed', path: '#' },
          { title: 'Feed Processing Machinery', path: '#' },
          { title: 'Tiller', path: '#' },
          { title: 'Harvesting Machine', path: '#' },
        ],
      },
      {
        subheader: 'Machine Tools',
        items: [
          { title: 'CNC Machine Tools', path: '#' },
          { title: 'Lathe', path: '#' },
          { title: 'Grinding Machine ', path: '#' },
          { title: 'Drilling Machine ', path: '#' },
          { title: 'Milling Machine ', path: '#' },
        ],
      },
    ],
  },
];
