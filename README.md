# Abhay Raj Gaur — Advanced MERN Portfolio

A modern, dark, futuristic and fully responsive MERN Stack developer portfolio inspired by the supplied reference screenshots, with significantly upgraded UI, animations and project presentation.

## Features

- React + Vite frontend
- Framer Motion page/scroll animations
- Animated gradient blobs and star field
- Mouse-follow spotlight
- 3D project-card tilt
- Animated hero developer orb
- Responsive glassmorphism UI
- Skills, experience, certifications, services and projects
- Project details modal
- Functional contact form
- Express + MongoDB backend
- Mongoose contact model
- Environment variables
- Recruiter-friendly content and resume CTA

## Run locally

### Frontend
```bash
cd client
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
npm run dev
```

Frontend runs on the Vite port shown in the terminal, normally `http://localhost:5173`.
Backend runs on `http://localhost:5000`.

## Environment

Create `server/.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://YOUR_USER:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/portfolio
CLIENT_URL=http://localhost:5173
```

For the frontend, create `client/.env` if you deploy the API separately:

```env
VITE_API_URL=http://localhost:5000
```

Never commit real credentials.

## Contact API

`POST /api/contact`

Body:
```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "subject": "Project enquiry",
  "message": "Hello..."
}
```

## Deployment

- Frontend: Vercel
- Backend: Render/Railway
- Database: MongoDB Atlas

Set `VITE_API_URL` on the frontend to the deployed backend URL, and set `CLIENT_URL` on the backend to the deployed frontend URL.

## Customize

Edit project data in:
`client/src/data/portfolioData.js`

Replace GitHub, LinkedIn, email, resume and project URLs there.

## Note

The contact form stores submissions in MongoDB. It does not include an email provider by default, so you can add Resend/Nodemailer later without exposing credentials in the frontend.
