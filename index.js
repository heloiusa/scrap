require('dotenv').config();
const axios = require('axios');
const cheerio = require('cheerio');
const nodemailer = require('nodemailer');

// 1. Fazer o scraping do MyAnimeList
async function pegarNoticiasAnime() {
  const url = 'https://myanimelist.net/news';
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const noticias = [];

  $('.news-unit .title').each((i, el) => {
    const titulo = $(el).text().trim();
    const link = $(el).attr('href');
    noticias.push({ titulo, link });
  });

  return noticias.slice(0, 5); // Pega só as 5 primeiras
}

// 2. Enviar o e-mail
async function mandarEmail(noticias) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlNoticias = noticias.map(n => `<li><a href="${n.link}" target="_blank">${n.titulo}</a></li>`).join('');

  const html = `
    <h2>📰 Notícias de Anime (MyAnimeList)</h2>
    <ul>${htmlNoticias}</ul>
    <p>Enviado automaticamente por seu scraper 😎</p>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'Notícias de Anime - MyAnimeList',
    html: html,
  });

  console.log('✅ Email enviado com sucesso!');
}

// 3. Executar tudo
(async () => {
  try {
    const noticias = await pegarNoticiasAnime();
    await mandarEmail(noticias);
  } catch (err) {
    console.error('❌ Erro:', err.message);
  }
})();
