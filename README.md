# ai-study-explainer
AI-powered study topic explainer built with Next.js, TypeScript, and Tailwind CSS. Students can enter a topic and get a simple explanation generated using the Groq AI API.
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
