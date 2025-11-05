import { Badge } from "@/components/ui/badge";

const skillsData = [
  "Python", "Java", "C++", "TensorFlow", "Keras", "Scikit-Learn", "PyTorch", "Deep Learning", "Computer Vision", "Transformers", "LangChain", "LangGraph", "vLLM", "Docker", "Git", "Apache Airflow", "MLflow", "Pandas", "Numpy", "OpenCV", "StreamLit", "Qdrant", "RAG", "Context Engineering", "Google Vertex AI", "Hugging Face Cloud", "FastAPI", "WebSocket", "React", "Next.js"
];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {skillsData.map((skill, index) => (
          <Badge key={index} variant="secondary">{skill}</Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;
