import { useEffect } from 'react';
import { SITE } from '@/config/site';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
  structuredData?: object;
}

function buildAbsoluteUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${cleanPath}`;
}

export function Seo({
  title,
  description,
  path,
  image,
  type = 'website',
  structuredData,
}: SeoProps) {
  useEffect(() => {
    const fullTitle =
      title === SITE.name ? title : `${title} — ${SITE.name}`;
    document.title = fullTitle;

    const ensureMeta = (
      selector: string,
      attr: 'name' | 'property',
      attrValue: string,
      content: string
    ) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    ensureMeta('meta[name="description"]', 'name', 'description', description);
    ensureMeta(
      'meta[property="og:title"]',
      'property',
      'og:title',
      fullTitle
    );
    ensureMeta(
      'meta[property="og:description"]',
      'property',
      'og:description',
      description
    );
    ensureMeta('meta[property="og:type"]', 'property', 'og:type', type);
    ensureMeta(
      'meta[property="og:url"]',
      'property',
      'og:url',
      buildAbsoluteUrl(path)
    );
    if (image) {
      ensureMeta('meta[property="og:image"]', 'property', 'og:image', image);
    }
    ensureMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    ensureMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    ensureMeta(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      description
    );
    if (image) {
      ensureMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image);
    }

    // Canonical link
    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', buildAbsoluteUrl(path));

    // Structured data
    const scriptId = 'structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (structuredData) {
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    } else if (script) {
      script.textContent = '';
    }
  }, [title, description, path, image, type, structuredData]);

  return null;
}
