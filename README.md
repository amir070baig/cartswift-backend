# 🛍️ Full-Stack E-commerce Store (Next.js + Prisma + Razorpay)

A polished **mini e-commerce store** built in **1 day** to demonstrate solid full-stack skills.

### 🚀 Features
- Modern **Next.js + Tailwind** UI
- Product listing with prices & hover effects
- Product detail page with cart
- Cart with quantity update & remove
- **Razorpay Checkout** (test mode)
- PostgreSQL + Prisma for database
- Simple admin panel for product CRUD
- (Optional) AI-powered search (coming soon)

---

### 🛠️ Tech Stack
**Frontend:** Next.js (App Router), React, Tailwind CSS  
**Backend:** Node.js, Express.js, Prisma, PostgreSQL  
**Payments:** Razorpay  
**Deployment:** Vercel (frontend), Railway/Render (backend)  

---

### ⚡ Quick Start (Local)
#### Backend
```bash
git clone https://github.com/yourname/ecommerce-backend
cd ecommerce-backend
npm install
npx prisma migrate dev
npm run dev
