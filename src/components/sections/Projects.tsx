import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projectsData = [
  {
    title: "Content AI | Flask, Streamlit, Serper API",
    description: "Designed and developed a web-powered LLM application to provide contextual answers by leveraging Serper API for web scraping and search. Built a robust Flask API as the backend, integrated with a Streamlit-based frontend for seamless user interaction. Processed retrieved web content for LLM response generation, increasing response accuracy by 40% and reducing retrieval latency by 25%.",
  },
  {
    title: "Unsweetened Beauty Customer Support | Mistral, QLoRA, Hugging Face",
    description: "Fine-tuned Mistral LLM for e-commerce support, achieving 25% faster response time and 30% higher satisfaction. Deployed on H100 instances with 99.9% uptime handling 10,000+ queries/day using Qdrant and RAG",
  },
  {
    title: "Comment Toxicity Detection | TensorFlow, NumPy, Pandas",
    description: "Built deep learning model for comment toxicity prediction using embedding layers and TextVectorization. Achieved high performance metrics and deployed via Hugging Face Spaces with Gradio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid gap-8">
        {projectsData.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
