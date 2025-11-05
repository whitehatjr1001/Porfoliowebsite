import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const educationData = [
  {
    institution: "Vellore Institute Of Technology",
    degree: "B.Tech Computer Science and Engineering, Specialization in AI",
    date: "2020 - 2024",
    gpa: "7.90/10 CGPA",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="grid gap-8">
        {educationData.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{edu.institution}</CardTitle>
              <p className="text-muted-foreground">{edu.degree}</p>
              <p className="text-muted-foreground">{edu.date}</p>
            </CardHeader>
            <CardContent>
              <p>{edu.gpa}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
