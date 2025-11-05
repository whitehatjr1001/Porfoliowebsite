import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const publicationsData = [
  {
    title: "Feature Extraction and Diagnosis of Heart Diseases Using Fuzzy-Based IoMT",
    publisher: "John Wiley & Sons, Inc.",
  },
  {
    title: "A comparative analysis of deep learning models for waste segregation: YOLOv8, EfficientDet, and Detectron 2",
    publisher: "Springer US",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Publications</h2>
      <div className="grid gap-8">
        {publicationsData.map((pub, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{pub.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{pub.publisher}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Publications;
