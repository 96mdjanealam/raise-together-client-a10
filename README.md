# Raise Together: A Crowdfunding Platform

[🔗 Live Site URL](https://raise-together-e9184.web.app/)

## ℹ️ About Raise Together
Raise Together is a dynamic and user-friendly crowdfunding application designed to connect campaign creators with supporters. Our mission is to empower individuals and organizations to raise funds for innovative ideas, charitable causes, and personal needs.

## ✨ Features
- 📝 **Intuitive Campaign Creation** – Easily set up fundraising campaigns with a sleek and simple interface.
- ⏳ **Real-Time Updates** – Stay informed with real-time updates on campaign progress, donor contributions, and milestones.
- 🎨 **Engaging Campaign Pages** – Visually appealing pages that highlight your story and goals to attract supporters.
- 💬 **Testimonial Section** – Success stories to inspire and build trust with new users.
- 🔧 **User Actions** – Users can manage their campaigns, view all created campaigns, and update or delete them as needed.

## ⚙️ Installation

### 📌 Prerequisites
Ensure you have the following installed on your system:
- [📦 Node.js](https://nodejs.org/) (Recommended version: `18.x` or higher)
- [⚡ Vite](https://vitejs.dev/) (Used for development)
- [🔥 Firebase Account](https://firebase.google.com/) (For backend services)

### 🛠 Steps
1. **📂 Clone the repository:**
   ```sh
   git clone https://github.com/96mdjanealam/raise-together-client-a10.git
   cd raise-together-client-a10
   ```

2. **📥 Install dependencies:**
   ```sh
   npm install
   ```

3. **📝 Set up environment variables:**
   Create a `.env.local` file in the root directory and add the following:
   ```sh
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_STORAGE_BUCKET=your_storage_bucket
   VITE_MESSAGING_SENDER_ID=your_sender_id
   VITE_APP_ID=your_app_id
   ```
   Replace the values with your Firebase project credentials.

4. **🚀 Run the development server:**
   ```sh
   npm run dev
   ```

## 🎯 Usage
- Navigate to the homepage to explore fundraising campaigns.
- Sign in to create and manage campaigns.
- Update and delete campaigns as needed.
- Stay updated with real-time progress and milestones.

## 🔧 Configuration
The project uses **Firebase** for authentication and database services. Ensure your Firebase project is correctly configured in `.env.local`.

## 📦 Dependencies
The project is built using the following technologies:

### 📌 Core Dependencies:
- ⚛️ React (`^18.3.1`)
- 🌍 React Router DOM (`^7.0.1`)
- 🔥 Firebase (`^11.0.2`)
- 🕒 Luxon (`^3.5.0`) – For handling dates and times.

### 🎨 UI & Styling:
- 🎨 TailwindCSS (`^3.4.15`)
- 🌟 DaisyUI (`^4.12.14`)
- 🖌️ Material Tailwind (`^2.1.10`)
- 🎭 Emotion (`^11.14.0`) – For CSS-in-JS styling.

### 🎬 Animations & UX:
- ✨ React Awesome Reveal (`^4.2.14`)
- ⌨️ React Simple Typewriter (`^5.0.1`)
- 🔔 React Toastify (`^10.0.6`)
- 🎯 React Tooltip (`^5.28.0`)

### 🛠 Development & Linting:
- ⚡ Vite (`^6.0.3`) – Fast build tool.
- ✅ ESLint (`^9.15.0`) – Linting support.
- 🎨 PostCSS (`^8.4.49`) & Autoprefixer (`^10.4.20`) – CSS processing.

## 🛠 Development
### 🚀 Running the Development Server
To start the local development environment:
```sh
npm run dev
```

### 🏗️ Building for Production
To create an optimized build:
```sh
npm run build
```

### 📏 Linting and Code Quality Checks
To run ESLint:
```sh
npm run lint
```

- 🤝 Feel free to contribute! Open a PR or issue if you'd like to help improve the project.
