import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
        degree: "MSc in Data Science & Analytics",
  institution: "University of Hertfordshire",
  duration: "Sep-2023 to Sep-2025",
  gpa: "3.76 GPA",
  icon: GraduationCap,
  details: [
    "Specialization in Machine Learning and Big Data Analytics",
    "Thesis: Dimensionality Reduction for News Classification using Random Projection",
    "Technical Stack: Python, R, SQL, Tableau, Scikit-learn, TensorFlow",
    "Relevant Courses: Neural Networks, Data Mining, Statistical Modeling, Applied Data Science"
  ]
},
    {
  degree: "BTech in Computer Science Engineering",
  institution: "Siddharth Institute of Engineering and Technology",
  duration: "2017 - 2021", 
  result: "6.7/10",
  icon: GraduationCap,
  details: [
    "Final Year Project: IoT-based Gas Leakage Detection using ThingSpeak",
    "Core Computer Science Fundamentals with Practical Applications"
  ]
},
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bridging data science and quality assurance to deliver excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Bio */}
          <div className="space-y-6 animate-fade-in">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Professional Journey
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                At Amdocs, I engineered a comprehensive test automation ecosystem that fundamentally transformed our quality
                assurance processes. By architecting Selenium-based automation frameworks using TestNG and JUnit, I replaced
                manual testing workflows with intelligent, reusable scripts that achieved a 40% reduction in regression 
                testing time while maintaining robust test coverage.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Demonstrated history of building and maintaining automation frameworks using Selenium 
                and TestNG. Adept at designing ETL pipelines, performing statistical and machine-learning 
                analysis, creating interactive dashboards, and translating business requirements into 
                efficient automated test scenarios.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                My approach to quality extended beyond surface-level testing to comprehensive data integrity verification.
                Utilizing SQL queries and Unix/Linux commands, I conducted rigorous back-end testing across Amdocs CRM, CSM,
                and TDAS systems. This data-centric validation ensured consistency across all back-end systems before QA
                handoff, preventing data-related defects from reaching production environments.
              </p>
            </Card>
          </div>

          {/* Education */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl gradient-bg">
                    <edu.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  </div>
                </div>
              </Card>
            ))}

            {/* Highlights */}
            <Card className="p-6 shadow-lg">
              <h4 className="text-lg font-semibold mb-4">Key Strengths</h4>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Leadership and mentorship in Agile teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Quality engineering mindset with attention to detail</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Strong collaboration with cross-functional stakeholders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Translating complex technical concepts for diverse audiences</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
