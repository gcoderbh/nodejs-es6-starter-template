import os from 'os';
import express from 'express';

const app = express();

const getHostname = async () =>
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(os.hostname());
    }, 2000);
  });

app.get('/', async (req, res) => {
  const hostname = await getHostname();
  res.json({
    status: true,
    hostname,
  });
});

export default app;
