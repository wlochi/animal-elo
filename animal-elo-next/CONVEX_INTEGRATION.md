# Convex Backend Integration

This document describes the Convex backend integration for the Animal ELO application.

## Overview

The application has been migrated from using a local in-memory array to a Convex backend database. This provides:

- **Persistent data storage**: Animal scores are saved across sessions
- **Real-time updates**: Changes are automatically synced across all clients
- **Scalability**: Can handle multiple users voting simultaneously
- **Type safety**: Full TypeScript support with generated types

## Changes Made

### 1. Installed Convex Package
```bash
npm install convex
```

### 2. Created Convex Schema (`convex/schema.ts`)
Defines the `animals` table with:
- `name`: string
- `emoji`: string
- `score`: number
- Index on `score` for efficient leaderboard queries

### 3. Created Convex Functions (`convex/animals.ts`)

#### Queries:
- `getAnimals`: Returns all animals
- `getLeaderboard`: Returns animals sorted by score (descending)
- `getRandomPair`: Returns two random animals for voting

#### Mutations:
- `updateScore`: Updates scores when a vote is cast (+1 for winner, -1 for loser)
- `initializeAnimals`: Populates database with 100 animals (only if empty)
- `resetScores`: Resets all animal scores to 0

### 4. Updated Application Layout (`app/layout.tsx`)
- Added `ConvexProvider` to wrap the entire application
- Configured Convex client with environment variable
- Made layout a client component

### 5. Updated Home Page (`app/page.tsx`)
- Replaced local state with `useQuery(api.animals.getLeaderboard)`
- Added loading state handling
- Updated to use Convex document IDs (`_id` instead of `id`)

### 6. Updated Rank Page (`app/rank/page.tsx`)
- Replaced local state with `useQuery(api.animals.getRandomPair)`
- Replaced local mutation with `useMutation(api.animals.updateScore)`
- Added loading state handling
- Updated to use Convex document IDs

### 7. Simplified Animals Library (`lib/animals.ts`)
- Removed local array and functions
- File now serves as documentation only
- All data operations moved to Convex

### 8. Created Admin Page (`app/admin/page.tsx`)
- Provides UI to initialize the database
- Shows database status (number of animals)
- Allows resetting all scores
- Includes setup instructions

## Environment Variables

The application uses the following environment variable (already configured in `.env.local`):

```
NEXT_PUBLIC_CONVEX_URL=https://expert-salamander-868.convex.cloud
CONVEX_DEPLOYMENT=dev:expert-salamander-868
```

## Getting Started

### First Time Setup

1. **Start the Convex development server** (in a separate terminal):
   ```bash
   cd animal-elo-next
   npx convex dev
   ```
   This will:
   - Connect to your Convex deployment
   - Watch for schema changes
   - Generate TypeScript types

2. **Start the Next.js development server** (in another terminal):
   ```bash
   cd animal-elo-next
   npm run dev
   ```

3. **Initialize the database**:
   - Navigate to `http://localhost:3000/admin`
   - Click "Initialize Animals (100 animals)"
   - This will populate the database with all 100 animals

4. **Start using the app**:
   - Go to `http://localhost:3000` to see the leaderboard
   - Click "Start Ranking" to begin voting

### Daily Development

1. Start Convex dev server: `npx convex dev`
2. Start Next.js dev server: `npm run dev`
3. Make changes and they'll hot-reload automatically

## Key Differences from Previous Implementation

| Aspect | Before | After |
|--------|--------|-------|
| Data Storage | In-memory array | Convex database |
| Data Persistence | Lost on refresh | Persists across sessions |
| ID Type | `number` | `Id<"animals">` (Convex ID) |
| ID Field | `id` | `_id` |
| Updates | Direct mutation | Convex mutations |
| Queries | Direct array access | Convex queries |
| Real-time | No | Yes (automatic) |

## File Structure

```
animal-elo-next/
├── convex/
│   ├── _generated/        # Auto-generated types and API
│   ├── schema.ts          # Database schema definition
│   ├── animals.ts         # Queries and mutations
│   └── tsconfig.json      # Convex TypeScript config
├── app/
│   ├── layout.tsx         # Root layout with ConvexProvider
│   ├── page.tsx           # Leaderboard page
│   ├── rank/
│   │   └── page.tsx       # Voting page
│   └── admin/
│       └── page.tsx       # Admin/setup page
├── lib/
│   └── animals.ts         # (Now just documentation)
└── .env.local             # Convex configuration
```

## Troubleshooting

### Database is empty
- Go to `/admin` and click "Initialize Animals"

### Changes not reflecting
- Make sure `npx convex dev` is running
- Check the browser console for errors
- Verify `.env.local` has the correct `NEXT_PUBLIC_CONVEX_URL`

### Type errors
- Run `npx convex dev` to regenerate types
- Restart your TypeScript server in your IDE

## Future Enhancements

Possible improvements with Convex:
- Add user authentication
- Track voting history
- Add animal categories/tags
- Implement ELO rating algorithm (instead of simple +1/-1)
- Add analytics and statistics
- Multi-user real-time leaderboard updates

