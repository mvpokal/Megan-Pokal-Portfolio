import { type FC, useState } from 'react';

import HandshakeLogo from "./handshake.jpg";
import OutlierLogo from "./outlier.jpg";
import ZoetisLogo from "./zoetis.png";

export const Experience: FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'experience' | 'projects'>('projects');
  const [selectedExperience, setSelectedExperience] = useState<any>(null);

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

  const experiences = [
    {
      title: "Handshake AI",
      role: "AI Trainer",
      duration: "Nov 2025 - Present",
      image: HandshakeLogo,
      overview:
        "Evaluate and improve AI-generated responses for accuracy, reasoning quality, and alignment with training guidelines.",
      contributions: [
        "Reviewed AI outputs for correctness and clarity",
        "Provided structured feedback for model improvement",
        "Evaluated reasoning quality and response safety"
      ],
      techStack: ["AI Evaluation", "Prompt Review", "Quality Assurance"]
    },
    {
      title: "Outlier AI",
      role: "AI Trainer",
      duration: "Jun 2024 - Nov 2025",
      image: OutlierLogo,
      overview:
        "Contributed to AI training workflows by assessing model outputs and improving dataset quality.",
      contributions: [
        "Evaluated model responses using structured rubrics",
        "Improved dataset quality through feedback loops",
        "Supported multiple AI evaluation projects"
      ],
      techStack: ["AI Training", "Data Labeling", "Rubrics"]
    },
    {
      title: "Zoetis Inc.",
      role: "Laboratory Technician",
      duration: "Dec 2022 - Sep 2024",
      image: ZoetisLogo,
      overview:
        "Supported laboratory operations through data monitoring, reporting, and documentation improvements.",
      contributions: [
        "Analyzed lab data trends for process monitoring",
        "Generated compliance and environmental reports",
        "Improved SOP documentation accuracy"
      ],
      techStack: ["Data Analysis", "Reporting", "Quality Control"]
    }
  ];

  return (
    <section id="projects" className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">

        <h2 className="text-4xl font-light mb-16 text-center tracking-wide text-gray-800">
          Projects
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="border-b border-gray-200 flex space-x-12">

            <button
              onClick={() => setActiveTab('projects')}
              className={`py-4 border-b-2 text-sm font-medium uppercase tracking-wide ${
                activeTab === 'projects'
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500'
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => setActiveTab('experience')}
              className={`py-4 border-b-2 text-sm font-medium uppercase tracking-wide ${
                activeTab === 'experience'
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500'
              }`}
            >
              Experience
            </button>

          </div>
        </div>

        {/* Projects */}
        {activeTab === 'projects' && (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                onClick={() => setSelectedProject(project.title)}
                className="border border-gray-200 p-6 bg-white hover:shadow-sm transition cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 px-2 py-1 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="border-l-2 pl-6 border-gray-200">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-gray-600 text-sm">{exp.role}</p>
                <p className="text-gray-500 text-sm">{exp.duration}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Experience;
