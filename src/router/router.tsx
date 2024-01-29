import { createBrowserRouter } from 'react-router-dom';
import { OnlineCourse } from '../pages/OnlineCourse';
import { NotFoundPage } from '../pages/NotFoundPage';
import { OfflineCourse } from '../pages/OfflineCourse';

export const router = createBrowserRouter([
    {
      path: "react_currency-info/",
      element: <OnlineCourse />,
      errorElement: <NotFoundPage />
    },
    {
      path: "react_currency-info/online-course/",
      element: <OnlineCourse />,
      errorElement: <NotFoundPage />
    },
    {
      path: "react_currency-info/offline-course/",
      element: <OfflineCourse />,
      errorElement: <NotFoundPage />
    },
]);
