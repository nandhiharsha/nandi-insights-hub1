import { BarChart3, LineChart, TestTube2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Data Analysis",
      description:
        "Comprehensive exploratory analysis, feature engineering, and statistical testing to extract actionable insights from complex datasets. Deliver data-driven recommendations that support strategic business decisions.",
      features: [
        "Exploratory Data Analysis (EDA)",
        "Statistical Testing & Validation",
        "Feature Engineering",
        "Predictive Modeling",
        "Data-Driven Insights",
      ],
    },
    {
      icon: LineChart,
      title: "Data Visualization",
      description:
        "Design interactive dashboards and KPI visualizations using Tableau, Power BI, and Python libraries. Transform raw data into compelling visual stories that resonate with stakeholders.",
      features: [
        "Interactive Dashboards",
        "KPI Design & Monitoring",
        "Executive Reports",
        "Real-time Analytics",
        "Stakeholder Presentations",
      ],
    },
    {
      icon: TestTube2,
      title: "Quality Assurance & Automation",
      description:
        "Build robust test automation frameworks using Selenium, TestNG, and PyTest. Integrate with CI/CD pipelines for continuous testing, comprehensive API validation, and detailed reporting.",
      features: [
        "Framework Design (Selenium/TestNG)",
        "CI/CD Integration (Jenkins)",
        "API Testing (Postman/SoapUI)",
        "Performance Testing",
        "Test Strategy & SOPs",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services <span className="gradient-text">Offered</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive data and quality solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-4 rounded-2xl gradient-bg w-fit mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Elevate Your Project?
            </h3>
            <p className="text-foreground/80 mb-6">
              Let's discuss how my expertise in data analysis, visualization, and
              automation can help solve your unique challenges.
            </p>
            <Button
              size="lg"
              className="gradient-bg"
              onClick={scrollToContact}
            >
              Let's Discuss Your Use Case
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
