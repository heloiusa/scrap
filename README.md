# 📰 AnimeNews Scraper + Email Sender

Este projeto é um scraper que coleta as últimas **notícias de anime** do site [MyAnimeList](https://myanimelist.net/news) e envia as 5 primeiras manchetes por **e-mail**, automaticamente.

## 🚀 Funcionalidades

- Faz scraping das últimas notícias de anime do MyAnimeList.
- Gera uma lista com título e link das 5 primeiras notícias.
- Envia essa lista por e-mail usando Nodemailer.
- Configuração segura com variáveis de ambiente.

---

## 🛠️ Tecnologias usadas

- [Node.js](https://nodejs.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Cheerio](https://www.npmjs.com/package/cheerio)
- [Nodemailer](https://www.npmjs.com/package/nodemailer)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📦 Instalação

1. Clone este repositório:
```bash
git clone https://github.com/heloiusa/scrap.git
cd scrap
```
---
2. Instale as dependências:
```bash
npm install
```
---
3. Crie um arquivo .env com as seguintes variáveis:
```.enc
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=seuemail@gmail.com
EMAIL_PASS=sua_senha_de_aplicativo
EMAIL_TO=destinatario@gmail.com
```
---
## Como rodar
```bash
node index.js
```
   
 
