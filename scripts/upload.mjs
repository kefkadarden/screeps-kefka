import 'dotenv/config';
import { ScreepsAPI } from 'screeps-api';
import fs from 'node:fs';
import path from 'node:path';

const branch = process.argv[2] || 'main';

async function main() {
  const { SCREEPS_EMAIL, SCREEPS_PASSWORD, SCREEPS_TOKEN, SCREEPS_HOST } = process.env;

  let api;
  if (SCREEPS_TOKEN) {
    api = new ScreepsAPI({ token: SCREEPS_TOKEN, protocol: 'https', hostname: SCREEPS_HOST || 'screeps.com' });
  } else if (SCREEPS_EMAIL && SCREEPS_PASSWORD) {
    api = await ScreepsAPI.fromCredentials(SCREEPS_EMAIL, SCREEPS_PASSWORD, SCREEPS_HOST || 'screeps.com');
  } else {
    console.error('Missing credentials: set SCREEPS_TOKEN or SCREEPS_EMAIL/SCREEPS_PASSWORD');
    process.exit(1);
  }

  const code = fs.readFileSync(path.resolve('dist/main.js'), 'utf8');
  const modules = { main: code };

  const result = await api.code.set(branch, modules);
  console.log('Uploaded branch', branch, 'result:', result);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
