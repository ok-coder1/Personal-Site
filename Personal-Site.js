import { execSync } from 'child_process';

const execSync = require('child_process').execSync;
const output = execSync('ps aux | grep -v grep | grep -c open-url.py', { encoding: 'utf-8' });
if (output == 1)
{
  window.location.replace("ok-coder1.github.io/Personal-Site/actual-site.html");
}
