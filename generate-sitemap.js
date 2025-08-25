// generate-sitemap.js
import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.7 },
  { url: '/faq', changefreq: 'weekly', priority: 0.7 },
  { url: '/products', changefreq: 'weekly', priority: 0.7 },
  { url: '/nutrition', changefreq: 'weekly', priority: 0.7 },
];

const stream = new SitemapStream({ hostname: 'https://vijayrathfoods.com' });
const writeStream = createWriteStream('./public/sitemap.xml');

// Pipe the stream to write file
stream.pipe(writeStream);

// Write all links
links.forEach(link => stream.write(link));

// End stream
stream.end();

writeStream.on('finish', () => {
  console.log('✅ sitemap.xml generated successfully!');
});
