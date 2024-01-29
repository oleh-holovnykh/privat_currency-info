import { createBrowserRouter } from 'react-router-dom';
import { OnlineCourse } from '../pages/OnlineCourse';
import { NotFoundPage } from '../pages/NotFoundPage';
import { OfflineCourse } from '../pages/OfflineCourse';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <OnlineCourse />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/online-course",
      element: <OnlineCourse />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/offline-course",
      element: <OfflineCourse />,
      errorElement: <NotFoundPage />
    },
]);
