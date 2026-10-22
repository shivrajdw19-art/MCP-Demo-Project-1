import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import PricingPage from '@/pages/PricingPage';
import AboutPage from '@/pages/AboutPage';
import BlogListPage from '@/pages/BlogListPage';
import BlogArticleStation from '@/pages/BlogArticleStation';
import BlogArticlePlanning from '@/pages/BlogArticlePlanning';
import BlogArticleFreshRoast from '@/pages/BlogArticleFreshRoast';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route
            path="/blog/how-to-build-a-better-office-coffee-station"
            element={<BlogArticleStation />}
          />
          <Route
            path="/blog/how-much-coffee-does-your-office-really-need"
            element={<BlogArticlePlanning />}
          />
          <Route
            path="/blog/is-small-batch-fresh-roasted-coffee-worth-it"
            element={<BlogArticleFreshRoast />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
