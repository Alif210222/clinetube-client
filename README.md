# 🎬 CineTube

## 📌 Project Overview

**CineTube** is a modern full-stack movie streaming and review platform where users can explore movies, watch free content, purchase premium movies, save watchlists, submit reviews, and manage subscriptions.  

It also includes a powerful **Admin Dashboard** for managing movies, users, purchases, analytics, and platform content.

CineTube is built with a scalable architecture using **Next.js**, **TypeScript**, **Tailwind CSS**, **Node.js**, **Express.js**, **Prisma ORM**, **PostgreSQL**, and **Stripe Payment Gateway**.

---

# 🌐 Live URLs

## Frontend (Client)

🔗 https://cinetube-client.vercel.app

## Backend (API)

🔗 Add your backend live URL here

---

# ✨ Core Features

---

## 👤 User Features

### 🔐 Authentication System

- Secure user registration and login
- JWT based authentication
- Role-based access control
- Persistent login using cookies

---

### 🎬 Movie Browsing

- Browse all movies
- View movie details page
- Filter by genre/platform/rating
- Search movies by title
- Responsive movie cards UI

---

### ▶️ Streaming Features

- Watch free movies instantly
- Premium movies require purchase
- Purchased movies become accessible permanently

---

### 💳 Premium Movie Purchase System

- Stripe Checkout Integration
- Secure payment flow
- Automatic database update using Stripe Webhooks
- Purchased button shown after payment
- Prevent duplicate purchases

---

### 📚 Watchlist System

- Save movie to watchlist
- Remove from watchlist
- Persistent saved state
- User specific watchlist only

---

### ⭐ Review & Comment System

- Submit movie reviews
- One review per user
- Admin approval system ready
- Comment on reviews
- Delete own comments/reviews

---

### 📦 Purchase History

- Users can view their purchased movies
- Amount, date, status shown

---

---

## 👑 Admin Features

### 🎬 Movie Management

- Add new movie
- Upload poster to Cloudinary
- Edit movie information
- Delete movie
- Zod form validation

---

### 👥 User Management

- View all users
- See role and membership status

---

### 💰 Purchase History

- See who purchased which movie
- Revenue tracking

---

### 📊 Statistics Dashboard

- Total Users
- Total Movies
- Total Reviews
- Total Purchases
- Total Revenue
- Beautiful responsive charts

---

---

# 🛠️ Technologies Used

---

## Frontend

- Next.js App Router
- React.js
- TypeScript
- Tailwind CSS
- ShadCN UI
- Recharts
- Lucide React Icons
- Sonner Toast
- React Hook Form
- Zod Validation

---

## Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL / Supabase / Neon DB

---

## Authentication

- JWT Token
- Cookies

---

## Payment

- Stripe Checkout
- Stripe Webhooks

---

## Media Storage

- Cloudinary

---

## Deployment

- Vercel (Frontend)
- Render / Railway / VPS (Backend)

---

# 📂 Folder Structure (Frontend)

```bash
src/
 ├── app/
 ├── components/
 ├── services/
 ├── hooks/
 ├── lib/