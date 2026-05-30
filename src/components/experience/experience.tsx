import { type FC, useState } from 'react';

export const Experience: FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'experience' | 'projects'>('projects');
  const [selectedExperience, setSelectedExperience] = useState<{
    title: string;
    role: string;
    duration: string;
    details: string;
    image: string;
    overview: string;
    contributions: string[];
    techStack: string[];
  } | null>(null);

  const getInitials = (title: string) =>
    title
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  
const projects = [
  {
    title: "Toyota Used Car Analysis",
    description: "Machine learning and pricing analysis of Toyota used vehicles",
    repoLink: "https://github.com/mvpokal/Projects/tree/main/Toyota_Used_Car_Analysis",
    overview:
      "Analyzed Toyota used car market data to identify the factors that influence vehicle resale value and pricing.",
    contributions: [
      "Performed exploratory data analysis on vehicle attributes",
      "Analyzed relationships between mileage, age, fuel type, and price",
      "Created visualizations to identify pricing trends",
      "Built predictive models for vehicle valuation",
      "Generated business recommendations for pricing strategies"
    ],
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Machine Learning"]
  },
  {
    title: "California Housing Prices Analysis",
    description: "Exploratory analysis of California housing market trends",
    repoLink: "https://github.com/mvpokal/Projects/tree/main/California_Housing_Prices_Project",
    overview:
      "Analyzed California housing data to identify key factors affecting home values and regional pricing differences.",
    contributions: [
      "Conducted exploratory data analysis",
      "Created correlation heatmaps and visualizations",
      "Analyzed income and location impacts on housing prices",
      "Identified major pricing drivers",
      "Summarized housing market trends"
    ],
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"]
  },
  {
    title: "Childcare Affordability Analysis",
    description: "Analysis of childcare costs and affordability trends",
    repoLink: "https://github.com/mvpokal/Projects/tree/main/Childcare_Affordability_Analysis",
    overview:
      "Examined childcare expenses across populations to evaluate affordability and economic impact.",
    contributions: [
      "Cleaned and analyzed childcare datasets",
      "Evaluated regional affordability trends",
      "Created visualizations of childcare expenses",
      "Compared costs across demographic groups",
      "Presented affordability insights"
    ],
    techStack: ["Python", "Pandas", "Data Analysis", "Visualization"]
  },
  {
    title: "Lottery Data Analysis",
    description: "Frequency and pattern analysis of lottery numbers",
    repoLink: "https://github.com/mvpokal/Projects/tree/main/Lottery_Data_Analysis",
    overview:
      "Explored historical lottery data to identify number frequencies and distribution patterns.",
    contributions: [
      "Analyzed historical lottery drawings",
      "Calculated frequency distributions",
      "Visualized winning number trends",
      "Evaluated randomness patterns",
      "Summarized statistical findings"
    ],
    techStack: ["Python", "Pandas", "Statistics", "Matplotlib"]
  },
  {
    title: "Retail Sales Time Series",
    description: "Seasonal trend and forecasting analysis",
    repoLink: "https://github.com/mvpokal/Projects/tree/main/Retail_Sales_Time_Series",
    overview:
      "Analyzed retail sales trends over time to identify seasonality and long-term growth patterns.",
    contributions: [
      "Prepared time series datasets",
      "Identified seasonal sales cycles",
      "Created forecasting visualizations",
      "Analyzed long-term trends",
      "Generated business recommendations"
    ],
    techStack: ["Python", "Pandas", "Time Series Analysis", "Matplotlib"]
  },
  {
    title: "TSA Complaints Analysis",
    description: "Passenger complaint trend analysis",
    repoLink: "https://github.com/mvpokal/Projects/tree/main/TSA_Complaints_Analysis",
    overview:
      "Investigated TSA complaint data to identify common traveler concerns and operational trends.",
    contributions: [
      "Merged multiple TSA datasets",
      "Performed exploratory analysis",
      "Categorized complaint types",
      "Visualized complaint trends",
      "Provided operational insights"
    ],
    techStack: ["Python", "Pandas", "Seaborn", "Data Visualization"]
  },
  {
    title: "Vegetarian Recipe Trends Analysis",
    description: "Analysis of vegetarian recipe patterns and ingredients",
    repoLink: "https://github.com/mvpokal/Projects/tree/main/Vegetarian_Recipe_Trends_Analysis",
    overview:
      "Explored vegetarian recipe datasets to identify ingredient usage and cooking trends.",
    contributions: [
      "Cleaned recipe datasets",
      "Analyzed ingredient frequencies",
      "Visualized recipe trends",
      "Identified popular ingredients",
      "Generated culinary insights"
    ],
    techStack: ["Python", "Pandas", "Data Visualization"]
  },
  {
    title: "Apache NiFi Project",
    description: "Data ingestion workflow using Apache NiFi",
    repoLink: "https://github.com/mvpokal/Projects/tree/main/Apache_Nifi_Project",
    overview:
      "Developed automated data ingestion workflows using Apache NiFi for efficient data movement.",
    contributions: [
      "Created data flow pipelines",
      "Configured processors and connections",
      "Automated ingestion processes",
      "Managed workflow execution",
      "Validated data movement"
    ],
    techStack: ["Apache NiFi", "Big Data", "Data Pipelines"]
  },
  {
    title: "Hadoop Project",
    description: "Distributed storage and processing using Hadoop",
    repoLink: "https://github.com/mvpokal/Projects/tree/main/Hadoop_Project",
    overview:
      "Implemented Hadoop workflows demonstrating distributed storage and processing concepts.",
    contributions: [
      "Configured Hadoop environment",
      "Stored data in HDFS",
      "Executed distributed processing tasks",
      "Managed cluster operations",
      "Analyzed processing performance"
    ],
    techStack: ["Hadoop", "HDFS", "Big Data"]
  },
  {
    title: "SparkPi with PySpark Project",
    description: "Distributed computation using Apache Spark",
    repoLink: "https://github.com/mvpokal/Projects/tree/main/SparkPi_with_PySpark_Project",
    overview:
      "Used Apache Spark and PySpark to perform distributed computation and performance analysis.",
    contributions: [
      "Configured Spark environment",
      "Executed SparkPi simulations",
      "Worked with distributed datasets",
      "Analyzed cluster performance",
      "Demonstrated scalable processing"
    ],
    techStack: ["Apache Spark", "PySpark", "Big Data", "Python"]
  }
];

const experiences = [
  {
    title: "WebXd",
    role: "Data Analyst (Contractor)",
    duration: "Aug 2025 - Present",
    image: "",
    details: "Business reporting, KPI analysis, and dashboard development.",
    overview:
      "Partner with stakeholders to translate business goals into measurable KPIs, reporting solutions, and data-driven recommendations that support marketing performance and client success.",
    contributions: [
      "Translate business objectives into reporting metrics and dashboard requirements.",
      "Develop performance reports supporting marketing ROI and conversion analysis.",
      "Create structured reporting solutions for client-facing initiatives.",
      "Collaborate with stakeholders to deliver data-driven recommendations.",
      "Support ad hoc reporting and business analysis requests."
    ],
    techStack: [
      "SQL",
      "Tableau",
      "Excel",
      "Dashboard Development",
      "KPI Reporting"
    ]
  },
  {
    title: "Target",
    role: "Team Lead, Specialty Sales",
    duration: "Oct 2023 - Jul 2025",
    image: "",
    details: "Sales analytics, inventory reporting, and workforce planning.",
    overview:
      "Led specialty sales operations using KPI reporting, inventory analysis, and performance metrics to improve department efficiency and business outcomes.",
    contributions: [
      "Analyzed sales and inventory data to identify trends and revenue opportunities.",
      "Used KPI reporting to support merchandising and operational decisions.",
      "Guided staffing and labor planning using business performance metrics.",
      "Partnered with leadership to communicate department performance.",
      "Monitored inventory variance and shrink trends to improve efficiency."
    ],
    techStack: [
      "Excel",
      "Sales Analytics",
      "Inventory Analysis",
      "KPI Reporting",
      "Business Operations"
    ]
  },
  {
    title: "Boys & Girls Club of San Dieguito",
    role: "Billing Specialist",
    duration: "Jan 2023 - Oct 2023",
    image: "",
    details: "Revenue reporting, enrollment analysis, and operational reporting.",
    overview:
      "Produced recurring business reports and analyzed operational performance metrics across multiple program locations.",
    contributions: [
      "Generated reports tracking revenue, expenses, enrollment, and staffing.",
      "Analyzed participation and budget data for forecasting support.",
      "Communicated operational performance findings to leadership.",
      "Improved reporting consistency through process improvements.",
      "Supported business planning using financial and operational data."
    ],
    techStack: [
      "Excel",
      "Reporting",
      "Forecasting",
      "Data Analysis",
      "Business Operations"
    ]
  },
  {
    title: "Pure Health Alliance",
    role: "Clinic Manager",
    duration: "Oct 2022 - Mar 2023",
    image: "",
    details: "Operational analytics, billing analysis, and workflow improvement.",
    overview:
      "Managed clinic operations while analyzing billing, reimbursement, scheduling, and performance data to improve business processes.",
    contributions: [
      "Analyzed billing and reimbursement trends to improve reporting accuracy.",
      "Created operational metrics for workflow monitoring.",
      "Identified revenue cycle improvement opportunities.",
      "Resolved reporting and process-related issues.",
      "Supported business decisions using operational data."
    ],
    techStack: [
      "Excel",
      "Healthcare Operations",
      "Reporting",
      "Process Improvement",
      "Business Analysis"
    ]
  },
  {
    title: "Aerotek (LabCorp On-Premise)",
    role: "Account Manager / On-Premise Manager",
    duration: "Feb 2021 - Oct 2022",
    image: "",
    details: "Workforce analytics and operational performance reporting.",
    overview:
      "Managed workforce reporting and labor utilization analysis supporting over 700 contractors in a large-scale operational environment.",
    contributions: [
      "Analyzed workforce productivity, attendance, and compliance data.",
      "Delivered performance reporting to leadership and client stakeholders.",
      "Supported staffing strategy through labor utilization analysis.",
      "Tracked workforce KPIs and operational metrics.",
      "Provided business insights for workforce planning initiatives."
    ],
    techStack: [
      "Excel",
      "Workforce Analytics",
      "KPI Reporting",
      "Business Reporting",
      "Data Analysis"
    ]
  }
];

return (
    <section
      id="projects"
      className="w-full py-20 bg-gray-50"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-light mb-16 text-center tracking-wide" style={{ 
          color: '#2d3748',
          fontWeight: '300'
        }}>
          Projects
        </h2>

        <div className="flex justify-center mb-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-12">
              <button
                onClick={() => setActiveTab('projects')}
                className={`py-4 px-2 border-b-2 font-medium text-sm tracking-wide transition-colors ${
                  activeTab === 'projects'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                PROJECTS
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`py-4 px-2 border-b-2 font-medium text-sm tracking-wide transition-colors ${
                  activeTab === 'experience'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                EXPERIENCE
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex items-start border-l-2 border-gray-200 pl-8 py-6 hover:border-gray-400 transition-colors cursor-pointer"
                  onClick={() => setSelectedExperience(exp)}
                >
                  {exp.image ? (
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-12 h-12 rounded object-cover flex-shrink-0 mt-1"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded bg-gray-100 text-gray-600 flex items-center justify-center flex-shrink-0 mt-1 font-medium text-sm">
                      {getInitials(exp.title)}
                    </div>
                  )}
                  <div className="ml-6 flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-gray-600 font-medium">{exp.role}</p>
                      </div>
                      <span className="text-sm text-gray-500 font-medium whitespace-nowrap ml-4">{exp.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 uppercase tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      className="text-sm text-gray-500 font-medium hover:text-gray-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedExperience(exp);
                      }}
                    >
                      Learn more →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-6 hover:border-gray-300 cursor-pointer transition-colors flex flex-col"
                  onClick={() => setSelectedProject(project.title)}
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 flex-1 content-start">
                    {project.techStack?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 uppercase tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    Learn more →
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {selectedProject && (
        <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center z-50 p-4" style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)' }}>
          <div
            className="bg-white p-6 shadow-xl max-w-xl w-full max-h-[80vh] overflow-y-auto border border-gray-100"
          >
            <div className="flex items-start justify-between mb-8">
              <h4 className="text-3xl font-medium text-gray-900">
                {selectedProject}
              </h4>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                onClick={() => setSelectedProject(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {projects.find((project) => project.title === selectedProject)?.description}
              </span>
            </div>
            
            <h5 className="text-lg font-semibold text-gray-800 mb-4">Overview</h5>
            <p className="text-gray-600 mb-6">
              {projects.find((project) => project.title === selectedProject)?.overview}
            </p>

            <h5 className="text-lg font-semibold text-gray-800 mb-4">Contributions</h5>
            <ul className="list-disc list-inside text-gray-600 mb-8">
              {projects.find((project) => project.title === selectedProject)?.contributions?.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>

            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                {projects.find((project) => project.title === selectedProject)?.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 uppercase tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end mt-8">
              {projects.find((project) => project.title === selectedProject)?.repoLink && (
                <a
                  href={projects.find((project) => project.title === selectedProject)?.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors font-medium text-sm tracking-wide uppercase"
                >
                  View Repository
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      {selectedExperience && (
        <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center z-50 p-4" style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)' }}>
          <div
            className="bg-white p-6 shadow-xl max-w-xl w-full max-h-[80vh] overflow-y-auto border border-gray-100"
          >
            <div className="flex items-start justify-between mb-8">
              <h4 className="text-3xl font-medium text-gray-900">
                {selectedExperience.title}
              </h4>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                onClick={() => setSelectedExperience(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {selectedExperience.role}
              </span>
            </div>

            <h5 className="text-lg font-semibold text-gray-800 mb-4">Overview</h5>
            <p className="text-gray-600 mb-6">
              {selectedExperience.overview}
            </p>

            <h5 className="text-lg font-semibold text-gray-800 mb-4">Contributions</h5>
            <ul className="list-disc list-inside text-gray-600 mb-8">
              {selectedExperience.contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>

            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                {selectedExperience?.techStack?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 uppercase tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
