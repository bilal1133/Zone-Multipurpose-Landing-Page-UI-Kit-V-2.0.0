import dynamic from 'next/dynamic';

const MainLayout = dynamic(() => import('./MainLayout'));

export default MainLayout;
