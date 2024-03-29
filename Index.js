const express = require('express')
const app = express()
const port = 3000

const authRoutes = require("./routes/auth");
const spotifyRoutes = require("./routes/spotify");
const groupsRoutes = require("./routes/groups");
const docRoutes = require("./routes/doc");

app.use(express.json());
app.use(authRoutes);
app.use(spotifyRoutes);
app.use(groupsRoutes);
app.use(docRoutes);

app.listen(port, () => {
    console.log(`API running : localhost:${port}`)
})

