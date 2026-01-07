# AI Medical Voice Agent

An AI-powered medical consultation platform that enables users to interact with specialized AI doctors through voice and text interfaces. Users can start consultations, manage medical sessions, generate reports, and access premium features via subscriptions.

## Live Demo

Check out the live application at: [echo-health-ai.vercel.app](https://echo-health-ai.vercel.app)

## Features

- **AI Doctor Consultations**: Chat with AI specialists in various medical fields (Cardiology, Dermatology, Neurology, etc.)
- **Voice Integration**: Real-time voice conversations using VAPI for immersive interactions
- **User Authentication**: Secure login/signup with Clerk
- **Subscription Management**: Premium access to specialized doctors with Clerk's billing system
- **Session Management**: Track consultation history and generate medical reports
- **Responsive UI**: Modern, accessible interface built with Next.js and Tailwind CSS

## Tech Stack

### Frontend
- **Next.js 16** - React framework for server-side rendering and API routes
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Lucide React** - Icon library

### Backend & Database
- **Next.js API Routes** - Serverless API endpoints
- **Drizzle ORM** - Type-safe SQL query builder
- **PostgreSQL (Neon)** - Cloud database
- **Clerk** - Authentication and subscription management

### AI & Integrations
- **OpenRouter API** - LLM API for AI doctor responses
- **VAPI** - Voice assistant API for real-time voice interactions
- **Axios** - HTTP client for API calls

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Drizzle Kit** - Database migrations

## APIs Used

This project integrates with the following external APIs:

1. **OpenRouter API** (`https://openrouter.ai/`)
   - Used for generating AI responses from medical specialists
   - Called from: `/api/suggest-doctors/route.tsx`, `/api/session-chat/route.tsx`, `/api/medical-report/route.tsx`
   - Purpose: AI-powered doctor recommendations and conversation responses

2. **Clerk API** (`https://clerk.com/`)
   - Used for user authentication, profile management, and subscription handling
   - Called from: Various components using `@clerk/nextjs` hooks and server-side `currentUser()`
   - Purpose: User auth, subscription checks, and billing

3. **VAPI API** (`https://vapi.ai/`)
   - Used for voice assistant functionality
   - Called from: Voice-enabled components (integrated via `@vapi-ai/web`)
   - Purpose: Real-time voice conversations with AI doctors

4. **Neon PostgreSQL** (Database)
   - Cloud-hosted PostgreSQL database
   - Accessed via Drizzle ORM from API routes and components
   - Purpose: Storing user data, sessions, and medical records

## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm
- PostgreSQL database (Neon recommended)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-medical-voice-agent
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL='your-neon-postgresql-connection-string'

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# OpenRouter API (for AI responses)
OPENROUTER_API_KEY=your-openrouter-api-key
OPEN_ROUTER_API_KEY=your-openrouter-api-key-2
# Add other OpenRouter keys as needed

# VAPI (for voice)
NEXT_PUBLIC_VAPI_VOICE_ASSISTANT_ID=your-vapi-assistant-id
NEXT_PUBLIC_VAPI_API_KEY=your-vapi-api-key
```

4. Set up the database:
```bash
# Generate and run migrations
npx drizzle-kit generate
npx drizzle-kit migrate
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
ai-medical-voice-agent/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (routes)/          # Protected routes
│   │   └── dashboard/     # Main dashboard
│   └── api/               # API routes
├── components/            # Reusable UI components
├── config/                # Database and API configurations
├── lib/                   # Utility functions
├── shared/                # Shared data (doctor list)
└── public/                # Static assets
```

## Key Components

- **DoctorAgentCard**: Displays AI doctor information with subscription checks
- **AddNewSessionDialog**: Handles starting new consultations
- **HistoryList**: Shows past consultation sessions
- **PricingTable**: Clerk-powered subscription management

## Subscription Model

The app uses a freemium model:
- Free users can access basic consultations
- Premium ("pro") subscribers unlock specialized doctors and advanced features
- Subscription status is checked via Clerk's API in both frontend components and API routes

## Deployment

The app can be deployed on Vercel, Netlify, or any platform supporting Next.js:

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder and configure environment variables on your hosting platform.

