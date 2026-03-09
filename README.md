# Nikhil Pathak — Portfolio

A minimal, elegant portfolio site — data-driven and deployed on Firebase Hosting.

## 🔧 How to Edit

All your content lives in **one file**: `public/data.js`

Open it and update your:
- Name, tagline, description
- Skills & tags
- Experience / timeline entries
- Projects
- Certifications
- Contact links (email, LinkedIn, CV)

No need to touch HTML or CSS — just edit the data and redeploy.

## 🚀 Deploy to Firebase

### First-time setup

```bash
# 1. Install Firebase CLI (if not installed)
npm install -g firebase-tools

# 2. Log in to Firebase
firebase login

# 3. Initialize (from this project folder)
firebase init hosting
#    → Select "Use an existing project" or create a new one
#    → Public directory: public
#    → Single-page app: No
#    → Overwrite index.html: No

# 4. Deploy
firebase deploy
```

### Subsequent deploys

```bash
firebase deploy
```

Your site will be live at `https://your-project-id.web.app`

## 📦 Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html    ← HTML template (no content here)
│   ├── style.css     ← All styling
│   ├── app.js        ← Rendering engine
│   └── data.js       ← ✏️ YOUR CONTENT — edit this file
├── firebase.json     ← Firebase hosting config
├── .gitignore
└── README.md
```
