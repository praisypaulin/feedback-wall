# Anonymous Feedback Wall

A lightweight full-stack web application where users can submit anonymous feedback messages that are displayed publicly.

## Live URL
https://feedback-wall.praisypaulin999.workers.dev

## GitHub Repository
https://github.com/praisypaulin/feedback-wall

## Technologies Used
- **Astro** - Frontend framework
- **TypeScript** - API logic
- **Supabase (PostgreSQL)** - Database
- **Cloudflare Workers** - Backend hosting and deployment
## Architecture
User → Cloudflare Workers → Astro Frontend → REST API → Supabase PostgreSQL

### API Endpoints
- **POST /api/submit** - Accepts name and message, validates input and stores in Supabase
- **GET /api/messages** - Retrieves latest feedbacks from Supabase and returns them

## Features
- Submit anonymous feedback without creating an account
- View all submitted feedbacks publicly
- Character counter (300 character limit)
- Toast notifications for success and error
- Responsive and modern dark UI design
- Timestamp on each feedback
## Setup Steps

### Prerequisites
- Node.js v22 or higher
- Supabase account
- Cloudflare account

### Installation

1. Clone the repository
git clone https://github.com/praisypaulin/feedback-wall.git
cd feedback-wall

2. Install dependencies
npm install

3. Create a Supabase project and create a table called feedbacks with these columns:
   - id (int8, primary key)
   - name (text)
   - message (text)
   - created_at (timestamptz)

4. Update Supabase credentials in these files:
   - src/pages/api/submit.ts
   - src/pages/api/messages.ts

5. Run the development server
npm run dev

6. Open browser and go to http://localhost:4321

## Deployment
The application is deployed on Cloudflare Workers. Any push to the main branch automatically triggers a new deployment.

## Assumptions
- No authentication required as the feedback is anonymous
- RLS (Row Level Security) is disabled in Supabase for public access
- Free tier is used for both Supabase and Cloudflare