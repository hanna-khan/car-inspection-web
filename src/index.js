import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';
import Layout from './components/Layout';
import SampleReport from './pages/SampleReport.jsx';
import WindowSticker from './pages/WindowSticker.jsx';
import LearnMore from './pages/LearnMore.jsx';
import ContactUs from './pages/ContactUs.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsCondition from './pages/TermsCondition.jsx';
import FAQ from './pages/FAQ.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <About />,
      },
      {
        path: "samplereport",
        element: <SampleReport />,
      },
      {
        path: "windowsticker",
        element: <WindowSticker />,
      },
      {
        path: "learnmore",
        element: <LearnMore />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "terms&conditions",
        element: <TermsCondition />,
      },
      {
        path: "*",
        element: <NoPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Measure performance in your app
reportWebVitals();
