# FITLOG

FITLOG is a gym website that allows users to explore different
workouts through a simple and user-friendly interface. Users can
view detailed information about each exercise, including its
duration and estimated calories burned.

Users can also add exercises to their workout plan using two tabs:
**Today's Plan** and **Saved**, which are available under the
**My Plan** route.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- React Icons

## Key Features

- Browse different exercises
- View detailed exercise information
- Add exercises to Today's Plan or Saved
- Track selected exercises with duration and calorie statistics
- Store workout plan data in LocalStorage

## Project Structure

```text
FITLOG/
├── public/
|── src/
│   ├── app/
│   │   ├── [exerciseId]/
│   │   ├── myplan/
│   │   ├── error.tsx
│   │   ├── favicon.ico
│   │   ├── font.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── AddToday&SaveButton/
│   │   ├── Banner/
│   │   ├── EmptyTextShowing/
│   │   ├── ExerciseCard/
│   │   ├── Library/
│   │   ├── LibrarySkeleton/
│   │   ├── PlanAndSaveLoading/
│   │   ├── RemoveExerciseFromPlan/
│   │   ├── Shared/
│   │   ├── ViewDetailsBtn/
│   │   └── WorksOutCardsForPlan&.../
│   │
│   ├── context/
│   │   └── exerciseContext.tsx
│   │
│   ├── lib/
|   |   ├── GetAlllWorksOut.ts
│   └── types/
|       ├── workOut.type.ts
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## Getting Started

### Installation

Clone the repository:

```bash
git clone https://github.com/nasifmustufakhan7220/FITLOG_CLient_With_Next_JS.git
```

Navigate to the project directory:

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## Live Demo

[Visit FITLOG](YOUR_LIVE_LINK)