import { execSync } from 'child_process';
import express from 'express';

const app = express();

function redirect()
{
  app.get('/redirect-url', (req, res) =>
  {
    const output = execSync('ps aux | grep -v grep | grep -c open-url.py', { encoding: 'utf-8' });
    if (output > 0)
    {
      res.redirect("https://ok-coder1.github.io/Personal-Site/actual_page.html");
    }
    else
    {
      res.status(404).send('Not found');
    }
  });
}

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

setInterval(redirect, 60000)