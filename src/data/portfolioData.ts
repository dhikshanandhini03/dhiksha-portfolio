export const profile = {
  name: "Dhiksha Nandhini S",
  role: "Software Engineer – Data Engineering",
  rotatingRoles: [
    "Real-Time Data Pipelines",
    "Event-Driven Streaming",
    "Data Warehousing",
    "Medallion Architectures",
  ],
  tagline:
    "Data-focused Software Engineer with 3+ years of experience building real-time and batch data pipelines that process 10M+ telemetry events per day — from event-driven ingestion to Bronze/Silver/Gold warehouses and star-schema analytics.",
  location: "Bangalore, India",
  phone: "+91 6383362799",
  email: "dhikshanandhiniselvakumar@gmail.com",
  resumeUrl: "Dhiksha_Nandhini_S.pdf",
  avatarInitials: "DN",
  socials: {
    github: "https://github.com/dhikshanandhini03",
    linkedin: "https://www.linkedin.com/in/dhikshanandhini/",
    email: "mailto:dhikshanandhiniselvakumar@gmail.com",
  },
};

export const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Telemetry Events / Day", value: "10M+" },
  { label: "Data Load Performance Gain", value: "~40%" },
  { label: "Connected Devices Managed", value: "10K+" },
];

export const about = {
  paragraphs: [
    "I'm a data-focused Software Engineer with 3+ years of combined experience building real-time and batch data pipelines that process up to 10M+ telemetry events per day. I work hands-on with Python, SQL, Apache Kafka, Apache Flink, Databricks/PySpark, Apache Airflow, dbt, Snowflake, PostgreSQL, and FastAPI across Azure and AWS.",
    "I build event-driven ingestion with event-time handling, late-event processing, idempotent writes, and replay-safe recovery, plus Bronze/Silver/Gold layers and star-schema warehouses for analytics and reporting.",
    "Beyond my core data engineering work, I've contributed to \"Safe Aura\" — an Android TV parental-control app and Idea Blitz 2025 winner, now a deployed client project — and prototyped a real-time subtitle-translation proof-of-concept using on-device ML.",
  ],
  highlights: [
    "Real-Time Streaming",
    "Event-Driven Architecture",
    "Medallion Architecture",
    "Star Schema Modeling",
    "Data Quality & Observability",
    "Kafka & Flink",
  ],
};

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "code",
    skills: ["Python", "SQL"],
  },
  {
    title: "Streaming & Messaging",
    icon: "stream",
    skills: ["Apache Kafka", "Apache Flink", "Azure Event Hubs", "Event-Time Processing"],
  },
  {
    title: "Data Processing & Orchestration",
    icon: "workflow",
    skills: ["Databricks", "PySpark", "Apache Airflow", "dbt", "ETL/ELT", "Batch & Incremental Processing"],
  },
  {
    title: "Databases & Warehousing",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "Snowflake", "Apache Doris", "Azure Cosmos DB"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["Microsoft Azure", "AWS (S3)", "Docker", "Jenkins", "Git", "GitHub", "CI/CD"],
  },
  {
    title: "Data Architecture & Modelling",
    icon: "warehouse",
    skills: [
      "Medallion Architecture",
      "Star Schema",
      "Fact & Dimension Models",
      "Data Modeling",
      "Data Quality",
      "Schema Validation",
      "Deduplication",
    ],
  },
  {
    title: "Backend & APIs",
    icon: "devops",
    skills: ["FastAPI", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Analytics & Visualization",
    icon: "chart",
    skills: ["Power BI"],
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
    role: "Software Engineer",
    company: "Vantiva",
    period: "Jun 2024 — Present",
    location: "Bangalore, India",
    points: [
      "Designed and delivered real-time and batch data pipelines using Python, SQL, Apache Kafka, Apache Flink, Databricks/PySpark, and Azure Event Hubs, handling 10M+ telemetry events per day.",
      "Orchestrated ETL/ELT workflows with Apache Airflow and dbt into Snowflake, improving data load performance by ~40% through benchmarking and pipeline tuning.",
      "Engineered fault-tolerant ingestion with event-time handling, idempotent writes, deduplication, and replay-safe recovery, plus Bronze/Silver/Gold layers and star-schema models for analytics.",
      "Monitored Kafka consumer lag and Flink job health, troubleshooting ingestion delays and adding health checks, metrics, structured logs, and alerts.",
      "Built secure FastAPI REST services (Azure API Management) and partnered with product, mobile, and analytics teams to deliver reliable, analytics-ready datasets.",
    ],
    stack: ["Python", "Kafka", "Flink", "Databricks/PySpark", "Airflow", "dbt", "Snowflake", "FastAPI"],
  },
  {
    role: "SDE Intern",
    company: "Vantiva",
    period: "Jan 2024 — May 2024",
    location: "Bangalore, India",
    points: [
      "Contributed to device-event correlation workflows for home-network platforms, processing cloud-connected device telemetry into a PostgreSQL-backed device inventory.",
      "Assisted in building automated test cases and CI integrations for nightly soak and sanity runs.",
    ],
    stack: ["Python", "PostgreSQL", "CI/CD"],
  },
  {
    role: "SDE Intern",
    company: "CommScope",
    period: "May 2023 — Dec 2023",
    location: "Bangalore, India",
    points: [
      "Performed sanity and functional testing on software builds, validating features against requirements and reporting defects with clear reproduction steps.",
      "Wrote SQL queries to validate test data and backend records during release verification.",
      "Collaborated with Android development teams to reproduce, triage, and verify fixes for reported issues.",
    ],
    stack: ["SQL", "Android", "Functional Testing"],
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
    title: "Screen Time Analytics Platform — Android TV",
    description:
      "End-to-end real-time data engineering pipeline for Bell Android TV's Screen Time feature, processing 10M+ telemetry events per day with fault-tolerant stream processing to ensure accurate screen-time calculations without double-counting.",
    category: "Real-time streaming analytics",
    pipeline: "Azure Event Hubs → Databricks/PySpark → Cosmos DB → FastAPI",
    tags: ["Azure Event Hubs", "Databricks", "PySpark", "Cosmos DB", "FastAPI", "JWT"],
    metrics: [
      "10M+ telemetry events / day",
      "Event-time + late-event + replay-safe processing",
      "Secure, low-latency REST APIs",
    ],
    githubUrl: "https://github.com/dhikshanandhini03/Scree-Time-Analytics-STB",
    featured: true,
  },
  {
    title: "STB Telemetry Streaming & Analytics Platform",
    description:
      "Kafka–Flink streaming pipelines for set-top-box telemetry supporting event validation, deduplication, and event-time processing, with downstream data flow into Apache Doris for dashboards.",
    category: "Streaming / near-real-time analytics",
    pipeline: "Kafka → Flink → MinIO → Apache Doris → FastAPI/Airflow → Dashboards",
    tags: ["Apache Kafka", "Apache Flink", "MinIO", "Apache Doris", "FastAPI", "Airflow"],
    metrics: [
      "Kafka consumer lag & Flink job health monitoring",
      "Deduplicated, event-time-accurate telemetry",
      "Doris-backed operational dashboards",
    ],
    githubUrl: "https://github.com/dhikshanandhini03/stb-telemetry-analytics",
    featured: true,
  },
  {
    title: "Payment Reconciliation Data Platform",
    description:
      "Event-driven data pipeline to ingest payment events and reconcile records across application systems, with fault-tolerant Kafka ingestion and analytical data models for reporting.",
    category: "Event-driven reconciliation platform",
    pipeline: "Source Systems → Kafka (at-least-once) → Bronze/Silver/Gold → Star Schema Reporting",
    tags: ["Apache Kafka", "Bronze/Silver/Gold", "Data Quality", "Star Schema"],
    metrics: [
      "At-least-once delivery with idempotent writes",
      "Quarantine handling for problematic records",
      "85% reduction in manual reconciliation effort",
    ],
    githubUrl: "https://github.com/dhikshanandhini03/Payment-Reconciliation-Data-Platform",
  },
  {
    title: "Subscription Data Warehouse and Analytics Platform",
    description:
      "Automated AWS S3-to-Snowflake ingestion pipeline orchestrated through Apache Airflow, with dbt transformation workflows building a star-schema warehouse of fact, dimension, and reporting marts.",
    category: "Batch ELT / data warehousing",
    pipeline: "AWS S3 → Airflow → Snowflake → dbt → Star Schema Marts",
    tags: ["AWS S3", "Apache Airflow", "Snowflake", "dbt", "Star Schema"],
    metrics: [
      "~40% improvement in load performance",
      "Automated data quality checks",
      "Fact, dimension & reporting mart models",
    ],
    githubUrl: "https://github.com/dhikshanandhini03/subscription-data-platform",
  },
  {
    title: "Automated Monthly Broadband Usage Statements",
    description:
      "End-to-end ETL pipeline supporting an ecosystem of connected home gateways at 1M+ device usage events per day, with event-driven ingestion from Azure Event Hubs into a structured PostgreSQL data model.",
    category: "Event-driven ETL / batch reporting",
    pipeline: "Azure Event Hubs → Deserialization/Validation → PostgreSQL → Monthly Batch Aggregation",
    tags: ["Azure Event Hubs", "PostgreSQL", "ETL", "Batch Processing"],
    metrics: [
      "1M+ device usage events/day",
      "Idempotent ingestion & conflict handling",
      "Calendar-based monthly usage statements",
    ],
    githubUrl: "https://github.com/dhikshanandhini03/Broadband-Usage-Statements",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  url?: string;
};

export const certifications: Certification[] = [
  { name: "Vantiva Q3 Triumph Award", issuer: "Vantiva", year: "2026" },
  {
    name: "Idea Blitz 2025 — \"Safe Aura\" (deployed client project)",
    issuer: "Idea Blitz",
    year: "2025",
  },
  {
    name: "AWS Cloud Solutions Architect",
    issuer: "Coursera",
    year: "Certification",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/7S4R6GBTJKAD",
  },
  {
    name: "Google Data Analytics Certificate",
    issuer: "Coursera",
    year: "Certification",
    url: "https://www.credly.com/badges/2829ff07-45b7-4881-8bfe-5bc4d63b4638/linked_in_profile",
  },
];

export const education = {
  degree: "B.E., Computer Science & Engineering",
  school: "Kongu Engineering College, Erode · CGPA: 9.3",
  period: "2020 — 2024",
};
