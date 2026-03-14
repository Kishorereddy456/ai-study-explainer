# AI Study Explainer

AI Study Explainer is a simple web application that helps students understand difficult topics.
Users enter a topic and the system generates a clear, beginner-friendly explanation using an AI API.

## Features

* Enter any study topic
* AI generates a simplified explanation
* Clean user interface
* Loading indicator while AI processes the request
* Error handling for empty inputs or API failures

## Example

Input:

Photosynthesis

Output:

Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to produce food and oxygen.

## Tech Stack

Frontend and Backend are built using:

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Groq AI API
* Vercel deployment

## Project Structure

app
├ page.tsx
├ api
│ └ explain
│   └ route.ts

## How It Works

1. The student enters a topic.
2. The frontend sends the topic to the API route.
3. The API route sends the request to the AI model.
4. The AI returns a simple explanation.
5. The explanation is displayed on the page.

## Installation

Clone the repository:

git clone https://github.com/Kishorereddy456/ai-study-explainer.git

Navigate to the project folder:

cd ai-study-explainer

Install dependencies:

npm install

Create environment file:

.env.local

Add your Groq API key:

GROQ_API_KEY=your_api_key_here

Run the development server:

npm run dev

Open in browser:

http://localhost:3000

## Deployment

This project can be deployed using Vercel.

Steps:

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add the environment variable GROQ_API_KEY.
4. Deploy the project.

## Author

Kishore Reddy
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
