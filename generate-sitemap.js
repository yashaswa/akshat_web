// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

// All your site routes
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.7 },
  { url: '/faq', changefreq: 'weekly', priority: 0.7 },
  { url: '/products', changefreq: 'weekly', priority: 0.7 },
  { url: '/nutrition', changefreq: 'weekly', priority: 0.7 },
];

// Create sitemap stream
const stream = new SitemapStream({ hostname: 'https://vijayrathfoods.com' });

// Write sitemap to /public/sitemap.xml
const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(stream).then(() => {
  console.log('✅ sitemap.xml generated successfully!');
});

// Add links to sitemap
links.forEach(link => stream.write(link));

// End stream
stream.end();
stream.pipe(writeStream);
