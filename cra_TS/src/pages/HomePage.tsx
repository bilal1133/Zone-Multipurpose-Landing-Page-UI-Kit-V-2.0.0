import { Helmet } from 'react-helmet-async';
// sections
import HomeView from 'src/sections/_home/view';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>The starting point for your next project | ZONE UI</title>
      </Helmet>

      <HomeView />
    </>
  );
}
