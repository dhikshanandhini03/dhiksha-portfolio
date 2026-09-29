// Dummy placeholder content — replace with real details later.

export const profile = {
  name: "Dhiksha Nandhini S",
  role: "Data Engineer",
  rotatingRoles: [
    "Data Pipelines",
    "Streaming Systems",
    "Cloud Data Warehouses",
    "Big Data Platforms",
  ],
  tagline:
    "I design and build resilient, large-scale data pipelines that turn raw chaos into reliable, real-time insight.",
  location: "Bengaluru, India",
  email: "dhiksha.nandhini.dev@example.com",
  resumeUrl: "#",
  avatarInitials: "DN",
  socials: {
    github: "https://github.com/dhikshanandhini03",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "https://twitter.com/your-username",
    email: "mailto:dhiksha.nandhini.dev@example.com",
  },
};

export const stats = [
  { label: "Years of Experience", value: "5+" },
  { label: "Pipelines Shipped", value: "40+" },
  { label: "Data Processed / Day", value: "3.2 TB" },
  { label: "Pipeline Uptime", value: "99.95%" },
];

export const about = {
  paragraphs: [
    "I'm a data engineer who loves turning messy, high-volume data into dependable products that teams can actually trust. My focus areas are batch & streaming ETL/ELT, distributed compute, and cloud-native data platforms.",
    "Over the past 5+ years I've built ingestion frameworks, orchestrated workflows across petabyte-scale lakes, and partnered with analytics & ML teams to ship data they can build on with confidence.",
    "When I'm not moving data around, I'm usually contributing to open-source data tooling, mentoring junior engineers, or writing about pipeline architecture patterns.",
  ],
  highlights: [
    "Distributed Systems",
    "Streaming Architecture",
    "Data Modeling",
    "Cloud Cost Optimization",
    "Data Quality & Observability",
    "Mentorship",
  ],
};

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["Python", "SQL", "Scala", "Bash", "Java"],
  },
  {
    title: "Big Data & Streaming",
    icon: "stream",
    skills: ["Apache Spark", "Hadoop", "Apache Kafka", "Apache Flink", "Apache Beam"],
  },
  {
    title: "Orchestration",
    icon: "workflow",
    skills: ["Airflow", "Dagster", "Prefect", "Step Functions"],
  },
  {
    title: "Cloud Platforms",
    icon: "cloud",
    skills: ["AWS (S3, Glue, EMR, Redshift)", "GCP (BigQuery, Dataflow)", "Azure Data Factory"],
  },
  {
    title: "Warehousing & Modeling",
    icon: "warehouse",
    skills: ["Snowflake", "dbt", "Kimball Modeling", "Data Vault 2.0"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "Cassandra", "Redis"],
  },
  {
    title: "DevOps & IaC",
    icon: "devops",
    skills: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    title: "Visualization",
    icon: "chart",
    skills: ["Tableau", "Power BI", "Looker", "Metabase"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Senior Data Engineer",
    company: "NimbusData Inc.",
    period: "2023 — Present",
    location: "Remote",
    points: [
      "Led migration of a legacy batch warehouse to a Snowflake + dbt lakehouse, cutting query costs by 38%.",
      "Designed a Kafka-based CDC pipeline streaming 200M+ events/day with sub-second latency.",
      "Built a self-serve data quality framework used by 12+ teams, reducing production incidents by 60%.",
    ],
    stack: ["Snowflake", "dbt", "Kafka", "Airflow", "AWS"],
  },
  {
    role: "Data Engineer",
    company: "Quantix Analytics",
    period: "2021 — 2023",
    location: "Bengaluru, India",
    points: [
      "Built and maintained 25+ Airflow DAGs orchestrating ingestion from 15+ source systems.",
      "Re-architected Spark ETL jobs, reducing nightly batch runtime from 6 hours to 90 minutes.",
      "Implemented a metadata-driven ingestion framework, cutting new-source onboarding time by 70%.",
    ],
    stack: ["Apache Spark", "Airflow", "PostgreSQL", "GCP BigQuery"],
  },
  {
    role: "Data Engineering Intern",
    company: "Streamly Labs",
    period: "2020 — 2021",
    location: "Bengaluru, India",
    points: [
      "Built dashboards and automated reporting pipelines using Python and Power BI.",
      "Wrote unit and data-validation tests improving pipeline reliability across 3 core datasets.",
    ],
    stack: ["Python", "Power BI", "MySQL"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  metrics: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Real-Time Clickstream Pipeline",
    description:
      "End-to-end streaming pipeline ingesting user clickstream events via Kafka, processed with Flink for sessionization, and served through a low-latency analytics API.",
    tags: ["Kafka", "Flink", "Spark Structured Streaming", "Docker"],
    metrics: ["200M+ events/day", "<800ms end-to-end latency"],
    githubUrl: "https://github.com/your-username/realtime-clickstream-pipeline",
    demoUrl: "#",
    featured: true,
  },
  {
    title: "Cloud Lakehouse Migration",
    description:
      "Migrated a monolithic on-prem warehouse to a Snowflake + dbt lakehouse with fully version-controlled transformations and automated CI testing.",
    tags: ["Snowflake", "dbt", "Airflow", "GitHub Actions"],
    metrics: ["38% cost reduction", "120+ dbt models"],
    githubUrl: "https://github.com/your-username/cloud-lakehouse-migration",
    featured: true,
  },
  {
    title: "Automated Data Quality Framework",
    description:
      "A metadata-driven data quality and observability framework built on Great Expectations, integrated into Airflow with Slack alerting on anomalies.",
    tags: ["Great Expectations", "Airflow", "Python", "Slack API"],
    metrics: ["60% fewer data incidents", "12 teams onboarded"],
    githubUrl: "https://github.com/your-username/data-quality-framework",
  },
  {
    title: "Serverless ETL on AWS",
    description:
      "Event-driven, fully serverless ETL pipeline using Lambda, Glue, and Step Functions for ingesting partner data feeds into a Redshift warehouse.",
    tags: ["AWS Lambda", "Glue", "Step Functions", "Redshift"],
    metrics: ["Zero idle infra cost", "99.95% uptime"],
    githubUrl: "https://github.com/your-username/serverless-etl-aws",
  },
  {
    title: "ML Feature Store",
    description:
      "Centralized feature store built with Feast, backed by Redis for online serving and BigQuery for offline training, powering 5+ ML models in production.",
    tags: ["Feast", "Redis", "BigQuery", "Python"],
    metrics: ["5 models in production", "40ms p99 feature fetch"],
    githubUrl: "https://github.com/your-username/ml-feature-store",
  },
  {
    title: "Open-Source dbt Utils Contribution",
    description:
      "Contributed reusable macros and testing patterns to an open-source dbt package used by hundreds of data teams.",
    tags: ["dbt", "SQL", "Open Source"],
    metrics: ["500+ GitHub stars", "3 merged PRs"],
    githubUrl: "https://github.com/your-username/dbt-utils-contrib",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [
  { name: "AWS Certified Data Analytics – Specialty", issuer: "Amazon Web Services", year: "2024" },
  { name: "Professional Data Engineer", issuer: "Google Cloud", year: "2023" },
  { name: "SnowPro Core Certification", issuer: "Snowflake", year: "2023" },
  { name: "Databricks Certified Data Engineer Associate", issuer: "Databricks", year: "2022" },
];

export const education = {
  degree: "B.Tech in Computer Science",
  school: "Indian Institute of Information Technology",
  period: "2016 — 2020",
};
