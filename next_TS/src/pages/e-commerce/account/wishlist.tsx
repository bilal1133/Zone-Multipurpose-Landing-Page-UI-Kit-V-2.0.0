// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { EcommerceAccountWishlistView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

EcommerceAccountWishlistPage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

// ----------------------------------------------------------------------

export default function EcommerceAccountWishlistPage() {
  return (
    <>
      <Head>
        <title>Account: Wishlist | ZONE UI</title>
      </Head>

      <EcommerceAccountWishlistView />
    </>
  );
}
