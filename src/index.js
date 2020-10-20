import os from "os";
import express from 'express'

const app = express()
const port = process.env.PORT || 3000

const getHostname = async () => await new Promise(resolve => {
    setTimeout(() => {
        resolve(os.hostname())
    }, 2000);
}) 

app.get('/', async(req, res) => {
    const hostname = await getHostname()
    res.json({
        status: true,
        hostname
    })
})

app.listen(port, () => {
    console.log(`Server start at port ${port}`)
})