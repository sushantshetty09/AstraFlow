# 🌐 Astra Flow — AI-Powered Supply Chain Intelligence

![Astra Flow Banner](https://img.shields.io/badge/Astra%20Flow-Logistics%20%26%20Supply%20Chain-0f172a?style=for-the-badge&logo=next.js)

**Astra Flow** is a next-generation, enterprise-grade logistics and supply chain management platform. Built for modern hackathons and real-world deployment, it leverages live GPS tracking, real-time WebSocket communication, and AI-driven anomaly detection to provide absolute visibility over fleet operations.

---

## ✨ Key Features

*   **📍 Live GPS Tracking:** Real-time driver location tracking utilizing the browser's native `navigator.geolocation` APIs and websockets to broadcast live coordinates to the command center.
*   **🗺️ Interactive Map Dashboard:** A seamless, dark-mode Control Tower powered by Leaflet. Watch your fleet move in real-time, view active routes, and identify bottlenecks instantly.
*   **🤖 AI Anomaly Detection:** Powered by Google Gemini. The system intelligently detects route deviations, unexpected delays, and potential supply chain disruptions, bubbling them up as critical alerts.
*   **⚡ Real-Time Sync:** A dedicated Node.js Socket.IO server acts as a relay, ensuring sub-second latency between the driver's mobile device and the central dashboard.
*   **📱 Mobile-First Driver App:** Drivers receive a lightweight, seamless mobile tracking link via WhatsApp/SMS that instantly syncs their position without requiring them to download a native app.
*   **☁️ Cloud-Native Deployment:** Fully configured for 1-click deployments on Render via `render.yaml` Blueprints. 

---

## 🛠️ Technology Stack

Astra Flow utilizes a modern, decoupled microservices architecture:

### 1. Frontend (Control Tower & Driver App)
*   **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
*   **Styling:** Tailwind CSS + Vanilla CSS Modules
*   **Mapping:** Leaflet & React-Leaflet
*   **Icons:** Lucide React

### 2. Backend (Core API & AI Engine)
*   **Framework:** [FastAPI](https://fastapi.tiangolo.com/) (Python)
*   **AI Integration:** Google Gemini API
*   **Database:** Supabase (PostgreSQL)

### 3. WebSocket Server (Real-Time Relay)
*   **Environment:** Node.js
*   **Library:** Socket.IO
*   **State:** Redis/In-memory caching for live coordinates

---

## 🚀 Getting Started (Local Development)

### Prerequisites
*   Node.js (v18+)
*   Python (3.10+)
*   Supabase Account
*   Google Gemini API Key

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/Astra--flow.git
cd Astra--flow
```

### 2. Setup the FastAPI Backend
```bash
cd api
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
```
Create an `api/.env` file:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_supabase_service_key
```
Run the backend:
```bash
uvicorn main:app --reload --port 8000
```

### 3. Setup the WebSocket Server
```bash
cd ws-server
npm install
```
Create a `ws-server/.env` file with your Supabase credentials.
Run the relay server:
```bash
npm start
```

### 4. Setup the Next.js Frontend
```bash
cd frontend
npm install
```
Create a `frontend/.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_WS_URL=http://localhost:3001
NEXT_PUBLIC_GEMINI_KEY=your_gemini_api_key
```
Start the Next.js development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to view the application!

---

## ☁️ Deployment (Render)

Astra Flow is perfectly configured for a 1-click deployment on [Render](https://render.com/) using the included `render.yaml` Blueprint.

1.  Connect your GitHub repository to Render.
2.  Click **New +** -> **Blueprint**.
3.  Select this repository. Render will automatically detect the 3 microservices.
4.  Provide the requested environment variables (Supabase Keys, Gemini Keys) in the Render dashboard.
5.  Deploy!

---

## 📸 Screenshots

*(Add screenshots of your Dashboard, Map View, and Mobile Driver Tracking UI here)*

---

## 🤝 Contributing
Contributions are always welcome! Feel free to open a Pull Request or submit an Issue if you find a bug.

---

*Built with precision and speed for the modern supply chain.*
