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
  category: string;
  pipeline: string;
};

export const projects: Project[] = [
  {
    title: "STB Telemetry & FTI Experience Analytics Platform",
    description:
      "Near-real-time analytics platform for set-top-box fleets that ingests first-time-install (FTI) telemetry — pairing, network setup, firmware — to answer which install step is failing and for which firmware, as it happens.",
    category: "Streaming / near-real-time analytics",
    pipeline: "STB → Azure Event Hubs → Bronze → PySpark → Silver → Gold → Fabric Lakehouse/Warehouse → Power BI",
    tags: ["Azure Event Hubs", "PySpark", "Medallion Architecture", "Microsoft Fabric", "Power BI"],
    metrics: ["Sessionized FTI event streams", "Failure attribution by firmware version", "Bronze → Silver → Gold quality gates"],
    githubUrl: "https://github.com/dhikshanandhini03/stb-fti-analytics-platform",
    featured: true,
  },
  {
    title: "Network Management Reporting & Capacity Planning",
    description:
      "Enterprise batch/event-driven platform that extracts network-performance data from a data warehouse and routes it through a message queue to identify overloaded regions and forecast future capacity needs.",
    category: "Batch / event-driven enterprise platform",
    pipeline: "Network Data Warehouse → SQL Extraction → Batch Processing → JSON → RabbitMQ → Processing/Analysis → Capacity Reporting",
    tags: ["SQL", "JDBC", "Java/Spring", "RabbitMQ", "Batch Extraction"],
    metrics: ["Region-level utilization tracking (e.g. 92% at Erode)", "Decoupled ingestion via RabbitMQ buffer", "Hourly/daily capacity extraction jobs"],
    githubUrl: "https://github.com/dhikshanandhini03/network-capacity-planning",
  },
  {
    title: "STB Fleet Health & Reliability Platform",
    description:
      "24x7 monitoring system for a fleet of set-top boxes, streaming CPU, memory, WiFi signal, firmware, and app-crash telemetry to detect regressions (e.g. crash-rate spikes after a firmware rollout) in near real time.",
    category: "Real-time streaming + batch",
    pipeline: "STB Fleet → FastAPI → Kafka → Spark Streaming → PostgreSQL (valid/rejected) → Metabase + nightly Airflow reports",
    tags: ["Kafka", "Spark Streaming", "FastAPI", "PostgreSQL", "Metabase", "Airflow", "Docker"],
    metrics: ["Fleet-scale telemetry ingestion", "Firmware-linked crash-rate detection", "Dead-letter handling for rejected data"],
    githubUrl: "https://github.com/dhikshanandhini03/stb-fleet-health-platform",
    featured: true,
  },
  {
    title: "Telecom Churn & Network Health Pipeline",
    description:
      "Integrates CRM, billing, and STB telemetry to score customer churn risk (late payments, buffering, weak signal, complaints) and correlates it with regional network quality — turning telemetry into retention and network-ops actions.",
    category: "Hybrid batch + streaming",
    pipeline: "CRM + Billing + STB Telemetry → Data Integration → Churn Analysis / Network Analysis → Churn Report + Network Hotspots",
    tags: ["Python", "SQL", "Batch + Streaming Ingestion", "Data Integration", "Churn Analysis"],
    metrics: ["Multi-source customer risk scoring", "Region-level network health scoring", "Connects telemetry to business outcomes"],
    githubUrl: "https://github.com/dhikshanandhini03/telecom-churn-network-health",
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
