# NST Tournament Portal - Architecture & Roadmap

## Overview

A tournament management web portal with multiple user roles for managing teams, players, coaches, and match scoring.

### User Roles

| Role                   | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| **Admin**              | Full system access, manages teams, coaches, schedules, scores  |
| **Coach/Team Manager** | Manages team roster, invites players, edits player info        |
| **Player**             | Registers via invitation, views profile and schedule           |
| **Match Delegate**     | Limited admin - manages live match scoring and roster check-in |

---

## 1. Technology Stack

| Layer           | Technology                                          |
| --------------- | --------------------------------------------------- |
| Frontend        | Next.js 16 (App Router) + React 19 + Tailwind CSS 4 |
| UI Components   | shadcn/ui (customizable, professional look)         |
| Database        | PostgreSQL via Supabase                             |
| Authentication  | Supabase Auth + Phone OTP                           |
| SMS Invitations | Twilio (or Supabase Edge Functions + SMS provider)  |
| File Storage    | Supabase Storage (profile pictures)                 |
| Deployment      | Vercel                                              |

---

## 2. Folder Structure

```
app/
├── (auth)/                    # Auth group (no layout nesting)
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── [token]/           # Invitation-based registration
│   │       └── page.tsx
│   └── verify-otp/
│       └── page.tsx
│
├── (portal)/                  # Main app (requires auth)
│   ├── layout.tsx             # Shared sidebar/nav
│   │
│   ├── admin/                 # Admin Dashboard
│   │   ├── page.tsx           # Overview/stats
│   │   ├── teams/
│   │   │   ├── page.tsx       # List all teams
│   │   │   ├── new/
│   │   │   │   └── page.tsx   # Create team
│   │   │   └── [teamId]/
│   │   │       └── page.tsx   # Edit team
│   │   ├── coaches/
│   │   │   ├── page.tsx       # List all coaches
│   │   │   ├── invite/
│   │   │   │   └── page.tsx   # Invite new coach
│   │   │   └── [coachId]/
│   │   │       └── page.tsx   # View/edit coach
│   │   ├── players/
│   │   │   ├── page.tsx       # All players (grouped by team)
│   │   │   └── [playerId]/
│   │   │       └── page.tsx   # View/edit player
│   │   ├── matches/
│   │   │   ├── page.tsx       # All matches
│   │   │   ├── new/
│   │   │   │   └── page.tsx   # Schedule new match
│   │   │   └── [matchId]/
│   │   │       └── page.tsx   # Edit match/scores
│   │   └── users/
│   │       ├── page.tsx       # All users by role
│   │       └── [userId]/
│   │           └── page.tsx   # Edit user role
│   │
│   ├── coach/                 # Coach Dashboard
│   │   ├── page.tsx           # Dashboard overview
│   │   ├── profile/
│   │   │   └── page.tsx       # Edit own profile
│   │   ├── players/
│   │   │   ├── page.tsx       # Team roster
│   │   │   ├── invite/
│   │   │   │   └── page.tsx   # Invite new player
│   │   │   └── [playerId]/
│   │   │       └── page.tsx   # Edit player info
│   │   └── team/
│   │       └── page.tsx       # View team info
│   │
│   ├── player/                # Player Dashboard
│   │   ├── page.tsx           # Dashboard
│   │   ├── profile/
│   │   │   └── page.tsx       # View/edit profile
│   │   └── schedule/
│   │       └── page.tsx       # View upcoming matches
│   │
│   └── delegate/              # Match Delegate Dashboard
│       ├── page.tsx           # Dashboard
│       ├── schedule/
│       │   └── page.tsx       # View assigned matches
│       └── matches/
│           └── [matchId]/
│               ├── page.tsx   # Match overview
│               ├── roster/
│               │   └── page.tsx   # Check-in players
│               └── scoring/
│                   └── page.tsx   # Live scoring
│
├── api/                       # API Routes (if needed beyond Supabase)
│   └── webhooks/
│       └── route.ts
│
├── globals.css
├── layout.tsx
└── page.tsx                   # Landing/redirect

components/
├── ui/                        # shadcn/ui components
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   ├── table.tsx
│   ├── dialog.tsx
│   ├── dropdown-menu.tsx
│   ├── avatar.tsx
│   ├── badge.tsx
│   └── ...
├── forms/
│   ├── login-form.tsx
│   ├── player-registration-form.tsx
│   ├── coach-profile-form.tsx
│   ├── team-form.tsx
│   ├── match-form.tsx
│   └── scoring-form.tsx
├── layout/
│   ├── sidebar.tsx
│   ├── header.tsx
│   ├── mobile-nav.tsx
│   └── role-guard.tsx
└── shared/
    ├── data-table.tsx
    ├── stats-card.tsx
    ├── player-card.tsx
    ├── match-card.tsx
    └── loading-spinner.tsx

lib/
├── supabase/
│   ├── client.ts              # Browser client
│   ├── server.ts              # Server client
│   └── middleware.ts          # Auth middleware
├── utils.ts                   # Helper functions
├── validations/
│   ├── auth.ts
│   ├── player.ts
│   ├── team.ts
│   └── match.ts
└── constants/
    ├── positions.ts           # Player positions
    └── countries.ts           # Country list

types/
├── database.ts                # Supabase generated types
├── auth.ts
├── player.ts
├── team.ts
└── match.ts

public/
├── logo.svg
└── placeholder-avatar.png
```

---

## 3. Database Schema

### Tables

#### `teams`

| Column     | Type        | Description                  |
| ---------- | ----------- | ---------------------------- |
| id         | uuid        | Primary key                  |
| name       | text        | Team name                    |
| logo_url   | text        | Team logo (Supabase Storage) |
| created_at | timestamptz | Creation timestamp           |
| updated_at | timestamptz | Last update                  |

#### `profiles` (extends Supabase auth.users)

| Column              | Type        | Description                            |
| ------------------- | ----------- | -------------------------------------- |
| id                  | uuid        | FK to auth.users                       |
| role                | enum        | 'admin', 'coach', 'player', 'delegate' |
| first_name          | text        | First name                             |
| last_name           | text        | Last name                              |
| email               | text        | Email address                          |
| phone               | text        | Phone number (unique)                  |
| profile_picture_url | text        | Avatar URL                             |
| team_id             | uuid        | FK to teams (nullable for admin)       |
| created_at          | timestamptz | Creation timestamp                     |
| updated_at          | timestamptz | Last update                            |

#### `player_details` (additional player info)

| Column             | Type        | Description             |
| ------------------ | ----------- | ----------------------- |
| id                 | uuid        | Primary key             |
| profile_id         | uuid        | FK to profiles          |
| birth_date         | date        | Date of birth           |
| jersey_number      | integer     | Jersey number           |
| primary_position   | text        | Primary position code   |
| secondary_position | text        | Secondary position code |
| country            | text        | Country of origin       |
| created_at         | timestamptz | Creation timestamp      |
| updated_at         | timestamptz | Last update             |

#### `invitations`

| Column     | Type        | Description              |
| ---------- | ----------- | ------------------------ |
| id         | uuid        | Primary key              |
| token      | text        | Unique invitation token  |
| phone      | text        | Invitee phone number     |
| role       | enum        | 'coach', 'player'        |
| team_id    | uuid        | FK to teams              |
| invited_by | uuid        | FK to profiles           |
| expires_at | timestamptz | Expiration time          |
| used_at    | timestamptz | When invitation was used |
| created_at | timestamptz | Creation timestamp       |

#### `matches`

| Column           | Type        | Description                                |
| ---------------- | ----------- | ------------------------------------------ |
| id               | uuid        | Primary key                                |
| home_team_id     | uuid        | FK to teams                                |
| away_team_id     | uuid        | FK to teams                                |
| scheduled_at     | timestamptz | Match date/time                            |
| venue            | text        | Match location                             |
| home_score_half1 | integer     | Home team 1st half score                   |
| home_score_half2 | integer     | Home team 2nd half score                   |
| away_score_half1 | integer     | Away team 1st half score                   |
| away_score_half2 | integer     | Away team 2nd half score                   |
| status           | enum        | 'scheduled', 'live', 'completed', 'locked' |
| delegate_id      | uuid        | FK to profiles (delegate)                  |
| locked_at        | timestamptz | When scores were locked                    |
| locked_by        | uuid        | FK to profiles                             |
| created_at       | timestamptz | Creation timestamp                         |
| updated_at       | timestamptz | Last update                                |

#### `match_player_stats`

| Column       | Type        | Description                 |
| ------------ | ----------- | --------------------------- |
| id           | uuid        | Primary key                 |
| match_id     | uuid        | FK to matches               |
| player_id    | uuid        | FK to profiles              |
| team_id      | uuid        | FK to teams                 |
| checked_in   | boolean     | Player checked in for match |
| goals        | integer     | Goals scored                |
| yellow_cards | integer     | Yellow cards received       |
| red_card     | boolean     | Red card received           |
| created_at   | timestamptz | Creation timestamp          |
| updated_at   | timestamptz | Last update                 |

### Enums

```sql
-- User roles
CREATE TYPE user_role AS ENUM ('admin', 'coach', 'player', 'delegate');

-- Match status
CREATE TYPE match_status AS ENUM ('scheduled', 'live', 'completed', 'locked');
```

### Row Level Security (RLS) Policies

```sql
-- Profiles: Users can read all, update own
-- Teams: All authenticated can read, admin can write
-- Players: Coach can manage their team's players
-- Matches: Delegates can update assigned matches, admin can do all
-- Match stats: Delegates can update for their matches
```

---

## 4. Authentication Flow

### Login Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Enter     │────▶│   Enter     │────▶│  Send OTP   │────▶│   Verify    │
│   Phone     │     │  Password   │     │   via SMS   │     │    OTP      │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
                                                                   │
                                                                   ▼
                                                        ┌─────────────────┐
                                                        │ Redirect by Role│
                                                        │ ───────────────│
                                                        │ admin → /admin  │
                                                        │ coach → /coach  │
                                                        │ player → /player│
                                                        │ delegate → /del.│
                                                        └─────────────────┘
```

### Invitation Registration Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│ 1. Admin/Coach creates invitation                                       │
│    └─▶ System generates unique token                                    │
│    └─▶ SMS sent: "Join NST: https://nst-tournament.com/register/abc123"│
│                                                                         │
│ 2. User clicks link                                                     │
│    └─▶ Token validated, team & role pre-filled                         │
│    └─▶ User completes registration form                                │
│                                                                         │
│ 3. Account created                                                      │
│    └─▶ Invitation marked as used                                       │
│    └─▶ User logged in automatically                                    │
│    └─▶ Redirected to role-specific dashboard                           │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Player Positions Reference

### Goalkeepers

- `GK` - Goalkeeper

### Defenders

- `CB` - Center Back
- `LB` - Left Back
- `RB` - Right Back

### Midfielders

- `CDM` - Defensive Midfielder
- `CM` - Central Midfielder
- `CAM` - Attacking Midfielder
- `LM` - Left Midfielder
- `RM` - Right Midfielder

### Wingers

- `LW` - Left Winger
- `RW` - Right Winger

### Forwards

- `ST` - Striker / Center Forward
- `CF` - Center Forward

---

## 6. Countries List

- Cameroon
- Nigeria
- Ghana
- Ivory Coast
- Jamaica
- Mexico
- Puerto Rico
- USA
- Other (free text input)

---

## 7. UI/UX Design Guidelines

### Design Principles

| Principle                | Implementation                          |
| ------------------------ | --------------------------------------- |
| **Consistent spacing**   | 4px base grid (p-1, p-2, p-4, p-6, p-8) |
| **Restrained palette**   | 1 primary, 1 accent, neutral grays      |
| **Typography hierarchy** | 3-4 font sizes max, clear headings      |
| **Subtle shadows**       | `shadow-sm`, `shadow-md` only           |
| **Data density**         | Show useful info, avoid filler content  |
| **Whitespace**           | Content breathes, not cramped           |
| **Microinteractions**    | Hover states, 150-200ms transitions     |
| **No stock gradients**   | Flat colors with subtle borders         |

### Color Palette

```css
:root {
  --primary: #1a1a2e; /* Deep navy - authority, professionalism */
  --primary-foreground: #ffffff;

  --accent: #e94560; /* Vibrant red - sports energy */
  --accent-foreground: #ffffff;

  --background: #ffffff;
  --foreground: #1a1a2e;

  --muted: #f4f4f5;
  --muted-foreground: #71717a;

  --card: #ffffff;
  --card-foreground: #1a1a2e;

  --border: #e4e4e7;
  --input: #e4e4e7;

  --success: #22c55e;
  --warning: #f59e0b;
  --error: #ef4444;
}
```

### Component Patterns

```
Cards:        rounded-lg border bg-card shadow-sm
Buttons:      rounded-md font-medium transition-colors
Inputs:       rounded-md border focus:ring-2 focus:ring-primary/20
Tables:       Clean borders, alternating row colors (subtle)
Sidebar:      Fixed width (280px), collapsible on mobile
```

---

## 8. Implementation Phases

### Phase 1: Foundation

**Goal:** Set up core infrastructure

- [ ] Initialize Supabase project
- [ ] Create database schema (all tables)
- [ ] Set up Row Level Security policies
- [ ] Configure Supabase Auth with phone provider
- [ ] Install and configure shadcn/ui
- [ ] Create base layout with responsive sidebar
- [ ] Implement authentication middleware
- [ ] Create role-based route guards

**Key Files:**

- `lib/supabase/client.ts`
- `lib/supabase/server.ts`
- `lib/supabase/middleware.ts`
- `app/(portal)/layout.tsx`
- `components/layout/sidebar.tsx`
- `components/layout/role-guard.tsx`

---

### Phase 2: Admin Core

**Goal:** Admin can manage teams and coaches

- [ ] Admin dashboard with stats overview
- [ ] Teams CRUD (create, read, update, delete)
- [ ] Coaches list view
- [ ] Coach invitation flow (generate link, send SMS)
- [ ] View all players grouped by team
- [ ] User role management (view, edit roles)

**Key Files:**

- `app/(portal)/admin/page.tsx`
- `app/(portal)/admin/teams/`
- `app/(portal)/admin/coaches/`
- `app/(portal)/admin/players/`
- `app/(portal)/admin/users/`
- `components/forms/team-form.tsx`

---

### Phase 3: Coach Features

**Goal:** Coaches can manage their team roster

- [ ] Coach dashboard
- [ ] Coach profile completion form
- [ ] Team roster view
- [ ] Player invitation via SMS
- [ ] Edit player information

**Key Files:**

- `app/(portal)/coach/page.tsx`
- `app/(portal)/coach/profile/`
- `app/(portal)/coach/players/`
- `components/forms/coach-profile-form.tsx`

---

### Phase 4: Player Registration

**Goal:** Players can register and view profiles

- [ ] Invitation-based registration page
- [ ] Full registration form with all fields:
  - Personal info (name, email, phone, DOB)
  - Team (pre-selected from invitation)
  - Profile picture upload
  - Jersey number
  - Primary & secondary position
  - Country selection
- [ ] Player dashboard
- [ ] Profile view/edit

**Key Files:**

- `app/(auth)/register/[token]/page.tsx`
- `app/(portal)/player/page.tsx`
- `app/(portal)/player/profile/`
- `components/forms/player-registration-form.tsx`
- `lib/constants/positions.ts`
- `lib/constants/countries.ts`

---

### Phase 5: Match Management

**Goal:** Admin can create and manage match schedules

- [ ] Match schedule creation form
- [ ] Match listing (upcoming, past)
- [ ] Match detail view
- [ ] Score updates (admin)
- [ ] Assign delegate to match

**Key Files:**

- `app/(portal)/admin/matches/`
- `components/forms/match-form.tsx`
- `components/shared/match-card.tsx`

---

### Phase 6: Match Delegate Features

**Goal:** Delegates can manage live matches

- [ ] Delegate dashboard
- [ ] View assigned matches
- [ ] Pre-match roster check-in
- [ ] Live scoring interface:
  - First half score
  - Second half score
  - Player goals tracking
  - Yellow cards
  - Red cards
- [ ] Score submission and locking
- [ ] Lock confirmation (cannot edit after lock)

**Key Files:**

- `app/(portal)/delegate/page.tsx`
- `app/(portal)/delegate/matches/[matchId]/`
- `components/forms/scoring-form.tsx`
- `components/forms/roster-checkin.tsx`

---

### Phase 7: Polish & Testing

**Goal:** Production-ready application

- [ ] Dashboard analytics/charts
- [ ] Full mobile responsiveness
- [ ] Loading states (skeletons)
- [ ] Error handling & toast notifications
- [ ] Form validation messages
- [ ] Empty states
- [ ] 404 and error pages
- [ ] Performance optimization
- [ ] End-to-end testing
- [ ] Security audit

---

## 9. Package Dependencies

```bash
# UI Framework
npx shadcn@latest init

# Supabase
npm install @supabase/supabase-js @supabase/ssr

# Forms & Validation
npm install react-hook-form zod @hookform/resolvers

# Date handling
npm install date-fns

# Icons
npm install lucide-react

# SMS (optional - can use Supabase Edge Functions)
npm install twilio

# Utilities
npm install clsx tailwind-merge
```

---

## 10. Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Twilio (for SMS)
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number

# App
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

---

## 11. Security Considerations

- [ ] All database access through RLS policies
- [ ] Service role key only used server-side
- [ ] Phone number validation before OTP send
- [ ] Rate limiting on OTP requests
- [ ] Invitation tokens expire after 48 hours
- [ ] Passwords hashed (handled by Supabase Auth)
- [ ] Score locking prevents unauthorized edits
- [ ] Input sanitization on all forms
- [ ] HTTPS enforced in production

---

## Quick Start Checklist

1. [ ] Create Supabase project at supabase.com
2. [ ] Enable Phone Auth provider in Supabase
3. [ ] Run database migrations (create tables)
4. [ ] Set up environment variables
5. [ ] Install dependencies
6. [ ] Run `npx shadcn@latest init`
7. [ ] Start development server

---

## Notes

- Supabase free tier includes: 500MB database, 1GB file storage, 50,000 monthly active users
- Phone OTP requires Twilio or MessageBird integration in Supabase
- Consider Supabase Edge Functions for SMS sending to avoid exposing Twilio keys
