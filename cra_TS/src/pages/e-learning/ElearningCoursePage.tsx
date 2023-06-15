import { Helmet } from 'react-helmet-async';
// sections
import { ElearningCourseView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

export default function ElearningCoursePage() {
  return (
    <>
      <Helmet>
        <title>Design Masterclass Course | ZONE UI</title>
      </Helmet>

      <ElearningCourseView />
    </>
  );
}
