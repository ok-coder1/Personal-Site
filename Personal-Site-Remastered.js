const { execSync } = require('child_process');

function checkProcess()
{
  const output = execSync('ps aux | grep -v grep | grep -c open-url.py', { encoding: 'utf-8' }).trim();
  if (output > 0)
  {
    console.log("https://ok-coder1.github.io/Personal-Site/actual-site.html");
  }
  else
  {
    checkProcess();
  }
}

setInterval(checkProcess, 1000);