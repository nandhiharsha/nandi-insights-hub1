import { ExternalLink, Github, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Optimizing Dimensionality Reduction for News Category Classification",
      description:
        "MSc project applying Gaussian Random Projection and Sparse Random Projection for high-dimensional text classification. Compared performance/latency trade-offs across different dimensionality reduction techniques and documented the complete pipeline with comprehensive results analysis.",
      technologies: [
        "Python",
        "scikit-learn",
        "pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Machine Learning",
      ],
      metrics: [
        "Improved classification speed by 3x",
        "Maintained 95%+ accuracy",
        "Processed 200K+ news articles",
      ],
      type: "Academic Research",
      githubUrl: "https://github.com/nandhiharsha/Project_NewscategoryClassification", // Add your GitHub repository URL here
      docsUrl: "", // Add your documentation/paper URL here
    },
    {
      title: "AutomateIT API Validation Framework",
      description:
        "Developed a comprehensive Python-based automation framework for Amdocs that converts REST-Assured test specifications to XML format. Enabled validation of 3,000+ API responses per week with automated regression testing integrated into Jenkins CI/CD pipeline.",
      technologies: [
        "Python",
        "REST-Assured",
        "XML",
        "Jenkins",
        "Selenium",
        "TestNG",
      ],
      metrics: [
        "3,000+ API validations/week",
        "60% reduction in manual effort",
        "90% automation coverage",
      ],
      type: "Industry Framework",
      githubUrl: "", // Add your GitHub repository URL here
      docsUrl: "", // Add your documentation URL here
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing data science research and automation engineering excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="mb-2">
                  {project.type}
                </Badge>
                <Award className="w-5 h-5 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="mb-6 p-4 bg-secondary/50 rounded-lg">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                  Key Metrics
                </h4>
                <ul className="space-y-2">
                  {project.metrics.map((metric, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  asChild
                  disabled={!project.githubUrl}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Details
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  asChild
                  disabled={!project.docsUrl}
                >
                  <a
                    href={project.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Documentation
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
