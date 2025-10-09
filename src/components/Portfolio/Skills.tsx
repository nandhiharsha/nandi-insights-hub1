import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Automation Tools & Frameworks",
      skills: [
        "Selenium WebDriver",
        "Playwright",
        "TestNG",
        "JUnit",
        "PyTest",
        "Maven",
        "Cucumber (BDD)",
        "Ginger",
        "SoapUI",
        "Postman",
      ],
    },
    {
      title: "Programming & Databases",
      skills: ["Java", "Python", "JavaScript", "SQL", "MySQL"],
    },
    {
      title: "DevOps & CI/CD",
      skills: [
        "Jenkins",
        "GitLab",
        "GitHub",
        "Docker",
        "Kubernetes",
        "Kafka",
        "CI/CD Pipelines",
      ],
    },
    {
      title: "Test & Defect Management",
      skills: [
        "Azure DevOps",
        "Jira",
        "iTrack",
        "Zephyr",
        "HP ALM",
        "Confluence",
      ],
    },
    {
      title: "Methodologies",
      skills: [
        "SDLC",
        "STLC",
        "Agile/Scrum",
        "Waterfall",
        "TDD/BDD/ATDD",
        "Performance Testing",
        "Security Testing",
        "Regression Testing",
        "Integration Testing",
      ],
    },
    {
      title: "Data Visualization",
      skills: [
        "Tableau",
        "Looker",
        "Power BI",
        "Matplotlib",
        "Seaborn",
        "Plotly",
      ],
    },
    {
      title: "Additional Technologies",
      skills: [
        "IntelliJ IDEA",
        "Visual Studio",
        "BrowserStack",
        "Citrix",
        "Amdocs CRM/CSM",
        "BSS/OSS",
        "Camunda",
        "Linux/Unix",
        "PuTTY",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Collaboration",
        "Problem Solving",
        "Communication",
        "Adaptability",
        "Proactiveness",
        "Mentorship",
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, automation, and quality assurance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold mb-4 gradient-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
