import dynamic from 'next/dynamic';

const SimpleLayout = dynamic(() => import('./SimpleLayout'));

export default SimpleLayout;
