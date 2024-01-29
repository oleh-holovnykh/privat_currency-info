import { createBrowserRouter } from 'react-router-dom';
import { OnlineCourse } from '../pages/OnlineCourse';
import { OfflineCourse } from '../pages/OfflineCourse';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
    {
      path: "react_currency-info/",
      element: <OnlineCourse />,
      errorElement: <ErrorPage />,
      // children: [
      //   {
      //     index: true,
      //     element: <OnlineCourse />,
      //   },
      //   {
      //     path: "online-course",
      //     element: <OnlineCourse />,
      //   },
      //   {
      //     path: "offline-course",
      //     element: <OfflineCourse />,
      //   },
      // ],
    },
    {
      path: "react_currency-info/offline",
      element: <OfflineCourse />,
    },
    {
      path: "react_currency-info/online",
      element: <OnlineCourse />,
    },
]);
