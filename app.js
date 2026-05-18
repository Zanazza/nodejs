const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Biar bisa akses file HTML
app.use(express.static(__dirname));

// Halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Injector CarX Street jalan di port ${PORT}`);
    console.log(`🌐 Buka: https://nodejs-production-a227.up.railway.app`);
});
