import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experienceData = [
  {
    title: "Machine Learning Engineer",
    company: "Deep Edge.ai",
    location: "Hyderabad, India",
    date: "April 2025 - Present",
    description: [
      "Architected full-stack development of modular AI agents with React/Next.js frontend, FastAPI backend, and Docker deployment strategy",
      "Developed AI-driven Incident Agent with LangChain/LangGraph/OpenAI LLM to parse industrial logs and generate incident reports, automating 90% of manual reviews",
      "Built Chat Agent (LangGraph) for root cause analysis leveraging RAG on technical documentation, decreasing MTTR by 60%",
      "Implemented WebSocket data ingestion processing 50,000+ data points/min with sub-200ms latency for real-time React dashboard",
    ],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Deep Edge.ai",
    location: "Remote",
    date: "September 2024 - March 2025",
    description: [
      "Developed full-stack video search feature enabling LLM-based detection of camera attributes and actions, boosting retrieval accuracy by 30%",
      "Integrated NoSQL database with binary search optimization, reducing query times by 40% using Python, Flask, and React",
      "Optimized GenAI pipelines with context-aware frame propagation achieving 4x reduction in processing time and enhanced LLM inference from 2 FPS to 12 FPS using vLLM",
    ],
  },
  {
    title: "Data Science Intern",
    company: "OmniSynkAI",
    location: "Remote",
    date: "May 2024 - September 2024",
    description: [
      "Developed Autofill feature reducing product listing time by 50% using Google Vertex AI and Gemini 1.5 Flash model",
      "Created JSON schema with validator agent for curated responses and built AI-powered website builder utilizing Vertex AI Playground for LLM fine-tuning",
      "Deployed the feature as a FastAPI Endpoint for simpler integration with frontend. Developed an AI-powered website builder product, utilizing Vertex AI Playground for LLM fine-tuning to streamline website creation.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <div className="grid gap-8">
        {experienceData.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <p className="text-muted-foreground">{exp.company} | {exp.location} | {exp.date}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
