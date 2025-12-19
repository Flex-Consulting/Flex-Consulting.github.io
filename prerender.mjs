import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = ['/services/', '/our-work/', '/about/', '/contact/'];
const distPath = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

console.log('🚀 Starting prerendering...\n');

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

let created = 0;
routes.forEach(route => {
  const routePath = path.join(distPath, route);
  const routeIndexPath = path.join(routePath, 'index.html');
  
  // Create directory for route
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }
  
  // Copy index.html to route directory
  fs.writeFileSync(routeIndexPath, indexHtml);
  console.log(`✓ Created ${route}/index.html`);
  created++;
});

console.log(`\n✅ Prerendering complete! Created ${created} static pages.`);
