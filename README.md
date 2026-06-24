# SKDLA Engineering Projects

Engineering project management module for Spectrum Killian Dental Lab Alliance.

## Local Development

This app requires Supabase credentials that are not stored in the repository.

To develop locally:

1. Clone the repo
2. Contact the repo owner ([@huongle1030](https://github.com/huongle1030)) to request the `.env.local` file with the required keys
3. Place the `.env.local` file in the project root
4. Run the build script to inject the keys:
   ```bash
   node build.js
   ```
5. Open `dist/index.html` in your browser or serve it with a local server

## Deployment (Vercel)

Set the following environment variables in the Vercel dashboard under **Settings → Environment Variables**:

| Variable | Description |
|----------|-------------|
| `SB_URL` | Supabase project URL |
| `SB_KEY` | Supabase anon (public) key |

Vercel will run `node build.js` automatically on each deploy.