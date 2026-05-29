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
      title: "Credit Risk MLOps Pipeline",
      description: "End-to-end machine learning system for credit risk prediction",
      repoLink: "https://github.com/mvpokal/credit-risk-mlops",
      overview:
        "Built a production-style machine learning pipeline to predict credit card default risk using structured MLOps practices including data ingestion, model training, validation, deployment, and monitoring.",
      contributions: [
        "Developed modular ML pipeline for data ingestion, preprocessing, training, and evaluation",
        "Implemented XGBoost model for classification of credit default risk",
        "Integrated data validation and monitoring for model reliability",
        "Containerized application using Docker for deployment consistency",
        "Automated workflow using CI/CD pipelines"
      ],
      techStack: [
        "Python",
        "XGBoost",
        "Scikit-learn",
        "FastAPI",
        "Docker",
        "AWS",
        "MLflow"
      ]
    },
    {
      title: "Image Caption Generator",
      description: "Deep learning model generating captions for images",
      repoLink: "https://github.com/mvpokal/image-caption-generator",
      overview:
        "Developed a CNN-LSTM deep learning model that generates natural language captions for images, combining computer vision and NLP techniques.",
      contributions: [
        "Built CNN-based feature extractor using MobileNetV2",
        "Implemented LSTM network for sequence-based caption generation",
        "Trained model on labeled image-caption datasets",
        "Created Streamlit interface for interactive predictions",
        "Optimized preprocessing pipeline for image input handling"
      ],
      techStack: [
        "Python",
        "TensorFlow",
        "Keras",
        "CNN",
        "LSTM",
        "Streamlit"
      ]
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Machine learning model for fraud classification",
      repoLink: "https://github.com/mvpokal/DSC550-Fraud-Detection",
      overview:
        "Developed classification models to detect fraudulent credit card transactions using imbalanced dataset handling techniques and multiple ML algorithms.",
      contributions: [
        "Performed exploratory data analysis on highly imbalanced dataset",
        "Implemented multiple classification models including Logistic Regression and Random Forest",
        "Applied undersampling techniques to improve model balance",
        "Evaluated performance using precision, recall, and F1-score",
        "Selected best-performing model based on recall optimization"
      ],
      techStack: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Matplotlib",
        "Machine Learning"
      ]
    },
    {
      title: "Retail Sales Time Series Analysis",
      description: "Forecasting and seasonal trend analysis",
      repoLink: "https://github.com/mvpokal/retail-sales-analysis",
      overview:
        "Analyzed retail sales data to identify seasonal patterns, trends, and forecasting insights using time series techniques.",
      contributions: [
        "Cleaned and prepared time series sales data",
        "Identified seasonal trends and cyclic patterns",
        "Visualized sales performance over time",
        "Applied forecasting techniques for prediction insights",
        "Generated business recommendations based on trends"
      ],
      techStack: ["Python", "Pandas", "Matplotlib", "Time Series Analysis"]
    },
    {
      title: "TSA Complaints Analysis",
      description: "Analysis of passenger complaint trends in aviation security",
      repoLink: "https://github.com/mvpokal/TSA-Complaints-Analysis",
      overview:
        "Analyzed TSA complaint datasets to identify trends in passenger concerns, complaint categories, and airport-level patterns.",
      contributions: [
        "Cleaned and merged multiple TSA complaint datasets",
        "Performed exploratory data analysis on complaint types",
        "Visualized trends across airports and categories",
        "Identified most frequent passenger complaint issues",
        "Summarized insights for operational improvements"
      ],
      techStack: ["Python", "Pandas", "Seaborn", "Data Visualization"]
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
