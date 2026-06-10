const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON body (utile si tu veux ajouter une API plus tard)
app.use(express.json());

// Route principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check pour Render
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Je t\'aime Louna 💕' });
});

// 404 fallback
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✨ Serveur lancé sur http://localhost:${PORT}`);
});
