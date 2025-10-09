import { Briefcase, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const achievements = [
    {
      metric: "40%",
      description: "Reduction in regression testing time",
    },
    {
      metric: "90%",
      description: "Regression automation coverage achieved",
    },
    {
      metric: "70%",
      description: "Reduction in critical defects",
    },
    {
      metric: "3,000+",
      description: "API responses validated weekly",
    },
  ];

  const responsibilities = [
    "Designed Selenium + TestNG/JUnit automation for UI/API → 40% regression time reduction",
    "Built Python AutomateIT framework to convert REST-Assured to XML; validated 3,000+ API responses/week",
    "Led automated regression suite; integrated with Jenkins (scheduled/on-demand) → 60% manual effort reduction; later achieved 90% regression automation coverage",
    "Streamlined continuous testing via Jenkins (triggered runs, reports, email notifications) → 50% manual effort reduction",
    "Translated requirements into automated scenarios; mentored 4-5 engineers",
    "Backend testing with SQL + Linux/Unix; cross-system data validation (Amdocs CRM, CSM, TDAS)",
    "Managed defects in iTrack/Jira; 70% critical defect reduction via RCA and early resolution",
    "Authored test plans/scripts/reports; improved accessibility & audit readiness by 30%",
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable impact through automation and quality engineering
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">
                {achievement.metric}
              </div>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Main Experience Card */}
        <Card className="p-8 shadow-xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl gradient-bg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1">
                Functional Test Engineer
              </h3>
              <p className="text-lg text-muted-foreground mb-2">
                Amdocs Development Centre – BSSe, Pune
              </p>
              <Badge variant="secondary" className="mb-4">
                October 2021 – July 2023
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Key Responsibilities & Achievements</h4>
            <ul className="space-y-3">
              {responsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-foreground/80"
                >
                  <span className="text-primary mt-1 font-bold">→</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <h4 className="text-lg font-semibold mb-4">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Selenium",
                "TestNG",
                "JUnit",
                "Python",
                "Jenkins",
                "SQL",
                "Linux/Unix",
                "Jira",
                "iTrack",
                "Amdocs CRM",
                "REST-Assured",
                "Postman",
                "Ginger",
              ].map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
