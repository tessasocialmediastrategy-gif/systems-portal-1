import { useEffect } from 'react';

/**
 * Per-route SEO + Open Graph + Twitter card injection.
 * Restores previous values on unmount so SPA route changes don't leak meta.
 */
const upsertMeta = (selector, attr, attrValue, content) => {
  let tag = document.head.querySelector(selector);
  const created = !tag;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, attrValue);
    document.head.appendChild(tag);
  }
  const prev = tag.getAttribute('content');
  tag.setAttribute('content', content);
  return () => {
    if (created) tag.remove();
    else if (prev !== null) tag.setAttribute('content', prev);
  };
};

const upsertLink = (rel, href) => {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  const created = !tag;
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  const prev = tag.getAttribute('href');
  tag.setAttribute('href', href);
  return () => {
    if (created) tag.remove();
    else if (prev !== null) tag.setAttribute('href', prev);
  };
};

export const useSEO = ({ title, description, ogImage, canonical }) => {
  useEffect(() => {
    const restorers = [];

    if (title) {
      const prevTitle = document.title;
      document.title = title;
      restorers.push(() => {
        document.title = prevTitle;
      });
      restorers.push(upsertMeta('meta[property="og:title"]', 'property', 'og:title', title));
      restorers.push(upsertMeta('meta[property="twitter:title"]', 'property', 'twitter:title', title));
    }

    if (description) {
      restorers.push(upsertMeta('meta[name="description"]', 'name', 'description', description));
      restorers.push(
        upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
      );
      restorers.push(
        upsertMeta('meta[property="twitter:description"]', 'property', 'twitter:description', description)
      );
    }

    if (ogImage) {
      restorers.push(upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage));
      restorers.push(
        upsertMeta('meta[property="twitter:image"]', 'property', 'twitter:image', ogImage)
      );
    }

    if (canonical) {
      restorers.push(upsertLink('canonical', canonical));
      restorers.push(upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical));
      restorers.push(
        upsertMeta('meta[property="twitter:url"]', 'property', 'twitter:url', canonical)
      );
    }

    return () => {
      restorers.forEach((fn) => fn && fn());
    };
  }, [title, description, ogImage, canonical]);
};
