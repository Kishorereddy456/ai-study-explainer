"use client"

import { useState } from "react"

export default function Home() {

  const [topic, setTopic] = useState("")
  const [explanation, setExplanation] = useState("")
  const [loading, setLoading] = useState(false)

  const explainTopic = async () => {

    if (!topic) {
      alert("Please enter a topic")
      return
    }

    setLoading(true)

    const res = await fetch("/api/explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ topic })
    })

    const data = await res.json()

    setExplanation(data.explanation)
    setLoading(false)
  }

  return (

    <main className="flex flex-col items-center justify-center min-h-screen p-10">

      <h1 className="text-3xl font-bold mb-6">
        AI Study Explainer
      </h1>

      <input
        type="text"
        placeholder="Enter topic (example: Photosynthesis)"
        className="border p-2 rounded w-80"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        onClick={explainTopic}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Explain Topic
      </button>

      {loading && <p className="mt-4">Generating explanation...</p>}

      {explanation && (
        <div className="mt-6 border p-4 rounded max-w-xl">
          <h2 className="font-bold mb-2">Explanation</h2>
          <p>{explanation}</p>
        </div>
      )}

    </main>
  )
}