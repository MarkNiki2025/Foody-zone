# 🍔 Foody Zone

A food catalog web app with real-time search and category filtering (breakfast / lunch / dinner). React frontend, Express + TypeScript backend serving the food data as JSON.

**🔗 Live demo:** [foody-zone-eta.vercel.app](https://foody-zone-eta.vercel.app)

## 📸 About

Foody Zone is a single-page food catalog app:

- the list of dishes is fetched from the backend;
- real-time search by dish name;
- filtering by category: All / Breakfast / Lunch / Dinner;
- responsive Bootstrap layout (cards adapt to screen size).

## 🛠 Tech Stack

**Client (`App/`)**
- React 19
- Vite
- React-Bootstrap + Bootstrap 5
- SCSS

**Server (`server/`)**
- Node.js + Express
- TypeScript
- CORS

## 📁 Project Structure

```
Foody-zone/
├── App/        # React client (Vite)
│   ├── src/
│   │   ├── components/   # App, TopConteiner, SearchResult, MainPart, CardProduct
│   │   ├── scss/
│   │   └── url.js        # API endpoints (prod/local)
│   └── public/
└── server/     # Express server
    ├── src/
    │   └── index.ts      # serves food JSON + static images
    └── dist/
```

## 🚀 Running Locally

Clone the repository:

```bash
git clone https://github.com/MarkNiki2025/Foody-zone.git
cd Foody-zone
```

### Server

```bash
cd server
npm install
npm run server   # runs TypeScript in watch mode + starts nodemon dist/index.js
```

The server starts on `http://localhost:3000` (or the port from `PORT`).

### Client

```bash
cd App
npm install
npm run dev
```

Create a `.env` file inside `App` (based on `.env.example`):

```
VITE_API_URL=http://localhost:9000
```

> Currently the API address (`DATA_URL`) is hardcoded in `src/url.js` and points to the production backend on Render. For local development, switch it to `localUrl` if you need to hit your local server.

The client starts on `http://localhost:5173` (default Vite port).

## 📦 Build

```bash
cd App
npm run build
```

## 🌐 Deployment

- **Client** — Vercel: [foody-zone-eta.vercel.app](https://foody-zone-eta.vercel.app)
- **Server** — Render: `https://foody-zone-1-1h1o.onrender.com`

## 👤 Author

**Mark Niki** — [GitHub](https://github.com/MarkNiki2025)
