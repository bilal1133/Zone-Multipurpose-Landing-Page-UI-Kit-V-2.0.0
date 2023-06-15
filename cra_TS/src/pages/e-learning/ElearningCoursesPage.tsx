import { Helmet } from 'react-helmet-async';
// sections
import { ElearningCoursesView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

export default function ElearningCoursesPage() {
  return (
    <>
      <Helmet>
        <title>Courses | ZONE UI</title>
      </Helmet>

      <ElearningCoursesView />
    </>
  );
}
