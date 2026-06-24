const fs = require('fs');

// Load .env.local if present (local dev), otherwise fall back to process.env (Vercel)
let env = {};
if (fs.existsSync('.env.local')) {
  fs.readFileSync('.env.local', 'utf8').split('\n').forEach(line => {
    const eq = line.indexOf('=');
    if (eq > 0) env[line.slice(0, eq).trim()] = line.slice(eq + 1).trim();
  });
}

const SB_URL = env.SB_URL || process.env.SB_URL || '';
const SB_KEY = env.SB_KEY || process.env.SB_KEY || '';

if (!SB_URL || !SB_KEY) {
  console.error('Missing SB_URL or SB_KEY — set them in .env.local or Vercel environment variables.');
  process.exit(1);
}

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace("'__SB_URL__'", `'${SB_URL}'`);
html = html.replace("'__SB_KEY__'", `'${SB_KEY}'`);

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);
console.log('Built → dist/index.html');
