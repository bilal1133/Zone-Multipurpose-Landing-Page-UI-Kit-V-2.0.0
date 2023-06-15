// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { ElearningCourseView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

ElearningCoursePage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function ElearningCoursePage() {
  return (
    <>
      <Head>
        <title>Design Masterclass Course | ZONE UI</title>
      </Head>

      <ElearningCourseView />
    </>
  );
}
