import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const skills = ["Python", "SQL", "R", "Selenium", "TestNG", "CI/CD", "AWS", "ETL", "ML", "Dashboards"];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-32"
    >
      <div className="container-custom animate-fade-in">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Harshavardhan <span className="gradient-text">Nandi</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                Data Analyst & Automation Engineer
              </h2>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Multi-disciplinary professional blending data science with quality assurance automation. 
              I transform complex datasets into actionable insights while building robust automation 
              frameworks that drive efficiency and reliability.
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="gradient-bg group"
                onClick={() => scrollToSection("#projects")}
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a 
                  href="https://github.com/nandhiharsha/Resume/raw/cfa4beea0ea27d13ac8f6019acfacd41c0d8fd5a/Harshavardhan_nandi_resume_QA.pdf"
                  download="Harshavardhan_Nandi_CV.pdf"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-3xl blur-2xl opacity-20"></div>
              <img
                src={profileImage}
                alt="Harshavardhan Nandi"
                className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
