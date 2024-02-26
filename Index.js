const express = require('express')
const app = express()
const port = 3000

const authRoutes = require("./routes/auth");
const docRoutes = require("./routes/doc");

app.use(express.json());
app.use(authRoutes);
app.use(docRoutes);

app.listen(port, () => {
    console.log(`API running : localhost:${port}`)
})

