# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Megan Pokal | Data Analyst & Data Science Portfolio

Welcome to my portfolio repository. This site showcases graduate and independent projects focused on data analysis, machine learning, visualization, and big data technologies.

---

## About Me

I recently earned my Master of Science in Data Science from Bellevue University. My work combines analytical thinking with practical problem solving to transform data into meaningful insights.

Areas of interest include:

- Data Analytics
- Machine Learning
- Data Visualization
- Big Data Technologies
- Business Intelligence
- Predictive Analytics

---

## Technical Skills

### Programming & Databases
- Python
- SQL
- Pandas

### Analytics & Visualization
- Tableau
- Power BI
- Data Visualization
- Exploratory Data Analysis (EDA)

### Machine Learning & Big Data
- Machine Learning
- Hadoop
- Spark

---

## Featured Projects

### Childcare Affordability Analysis
**Tools:** Python, Pandas, Seaborn  

Analyzed childcare cost trends and affordability across different populations using statistical analysis and visualization techniques.

---

### TSA Complaints Analysis
**Tools:** Python, Data Visualization  

Explored TSA complaint data to identify traveler concerns, complaint patterns, and trends across datasets.

---

### Retail Sales Time Series
**Tools:** Python, Time Series Analysis  

Performed time series analysis to identify seasonality, growth patterns, and forecasting insights.

---

### Lottery Data Analysis
**Tools:** Python, Statistics  

Examined historical lottery datasets to analyze number frequency distributions and statistical patterns.

---

### Big Data Processing
**Tools:** Hadoop, Spark, Apache NiFi, Solr, HBase  

Developed distributed workflows and data processing pipelines using large-scale data technologies.

---

## Repository Structure

```text
├── Childcare-Affordability-Analysis
├── TSA-Complaints-Analysis
├── Retail-Sales-Time-Series
├── Lottery-Data-Analysis
├── Big-Data-Processing
├── index.md
├── projects.md
├── contact.md
└── README.md


# Contact

GitHub: https://github.com/mvpokal/Megan-Pokal-Portfolio

LinkedIn: www.linkedin.com/in/megan-pokal

Email: mvpm10@icloud.com
