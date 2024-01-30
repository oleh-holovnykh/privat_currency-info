import { OnlineCourse } from '../pages/OnlineCourse';
import { OfflineCourse } from '../pages/OfflineCourse';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import { createHashRouter } from 'react-router-dom';

export const router = createHashRouter([
    {
      path: "/",
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
      path: "/offline",
      element: <OfflineCourse />,
    },
    {
      path: "/online",
      element: <OnlineCourse />,
    },
],{
  basename: "/react_currency-info"
});
