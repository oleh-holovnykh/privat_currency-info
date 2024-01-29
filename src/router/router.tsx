import { createBrowserRouter } from 'react-router-dom';
import { OnlineCourse } from '../pages/OnlineCourse';
import { NotFoundPage } from '../pages/NotFoundPage';
import { OfflineCourse } from '../pages/OfflineCourse';

export const router = createBrowserRouter([
    {
      path: "react_currency-info/",
      element: <OnlineCourse />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "online-course",
          element: <OnlineCourse />,
        },
        {
          path: "offline-course",
          element: <OfflineCourse />,
        },
      ],
    },
]);
