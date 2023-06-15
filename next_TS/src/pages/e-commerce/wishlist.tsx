// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { EcommerceWishlistView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

EcommerceWishlistPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function EcommerceWishlistPage() {
  return (
    <>
      <Head>
        <title>Wishlist | ZONE UI</title>
      </Head>

      <EcommerceWishlistView />
    </>
  );
}
