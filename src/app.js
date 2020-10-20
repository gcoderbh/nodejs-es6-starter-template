import os from 'os';
import express from 'express';
import getVat from './getVat';

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
    vat: getVat(1000),
  });
});

export default app;
