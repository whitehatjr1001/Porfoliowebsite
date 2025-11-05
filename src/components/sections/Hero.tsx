import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Rohith Sai Midigudla</h1>
        <p className="text-xl text-muted-foreground">AI/ML Engineer</p>
        <div className="flex gap-4">
          <Link href="https://github.com/whitehatjr1001" target="_blank">
            <Button variant="outline" size="icon">
              <Github className="w-6 h-6" />
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/rohithsaimidigudla" target="_blank">
            <Button variant="outline" size="icon">
              <Linkedin className="w-6 h-6" />
            </Button>
          </Link>
          <Link href="mailto:rohitsaimidigudla@gmail.com">
            <Button variant="outline" size="icon">
              <Mail className="w-6 h-6" />
            </Button>
          </Link>
          <Link href="tel:+919494500114">
            <Button variant="outline" size="icon">
              <Phone className="w-6 h-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
