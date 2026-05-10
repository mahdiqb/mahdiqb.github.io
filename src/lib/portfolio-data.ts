export type Role = { title: string; company: string; period: string };

export const roles: Role[] = [
  {
    title: "Senior Product Manager — Graph Analytics",
    company: "Neo4j",
    period: "Dec 2025 — Present",
  },
  {
    title: "Head of Product & Data (Promoted)",
    company: "Sifflet",
    period: "Mar 2024 — Dec 2025",
  },
  {
    title: "Staff Data Engineer (Promoted)",
    company: "Zendesk",
    period: "Nov 2021 — Apr 2024",
  },
  {
    title: "Data Engineer",
    company: "FactSet",
    period: "Apr 2020 — Nov 2021",
  },
];

export type TechGroup = { label: string; items: string[] };

export const techStack: TechGroup[] = [
  {
    label: "data",
    items: ["Apache Spark", "dbt", "Snowflake", "Hadoop", "Delta Lake"],
  },
  {
    label: "aws",
    items: ["Glue", "EMR", "Athena", "ECS", "SageMaker"],
  },
  {
    label: "gcp",
    items: ["BigQuery", "GKE"],
  },
  {
    label: "languages",
    items: ["Python", "Java", "SQL"],
  },
  {
    label: "iac",
    items: ["Terraform", "CloudFormation"],
  },
];

export type Publication = {
  title: string;
  outlet: string;
  year: string;
  url: string;
  description: string;
  kind: "course" | "article";
};

export const publications: Publication[] = [
  {
    kind: "course",
    title: "Data Modeling for Data Products",
    outlet: "Modern Data 101",
    year: "2025",
    url: "https://www.moderndata101.com/masterclass/data-modeling-for-data-products",
    description:
      "A comprehensive masterclass on data modeling for high-impact and high-value data products. The session details how to develop flexible, domain-driven data models and implement robust governance using essential tools like metric trees and semantic layers, ensuring that business value remains top of mind throughout the process.",
  },
  {
    kind: "course",
    title: "End-to-End Batch Data Pipeline with Spark",
    outlet: "Manning Publications",
    year: "2022",
    url: "https://www.manning.com/liveprojectseries/batch-data-pipeline-with-spark",
    description:
      "A series of four projects authored for Manning's liveProjects platform, walking through every step of building an end-to-end Big Data pipeline with Apache Spark, Delta Lake, and Apache Superset.",
  },
  {
    kind: "article",
    title: "The Data Team's Survival Guide for the Next Era of Data",
    outlet: "Towards Data Science",
    year: "2026",
    url: "https://towardsdatascience.com/the-data-teams-survival-guide-for-the-next-era-of-data/",
    description:
      "Six pillars for data teams to declutter their stack, escape the service trap, and build foundations for the new primary consumer: the AI agent.",
  },
  {
    kind: "article",
    title: "Data Modeling for Data Products: A Practical Guide",
    outlet: "Data Engineer Things",
    year: "2025",
    url: "https://medium.com/data-engineer-things/data-modeling-for-data-products-a-practical-guide-2db003cc7e72",
    description:
      "Principles and frameworks for applying data modeling best practices when shipping data products.",
  },
  {
    kind: "article",
    title: "Building a Semantic Layer for the AI Era: Beyond SQL Generation",
    outlet: "Data Engineer Things",
    year: "2025",
    url: "https://blog.dataengineerthings.org/semantic-layer-for-ai-beyond-sql-aae652837a5a",
    description:
      "Capturing the What, Why, and Who for agent functionality — a guide to the semantic layer in the AI era.",
  },
  {
    kind: "article",
    title: "Navigating Your Career Transition in Tech: A Practical Roadmap",
    outlet: "Data Espresso",
    year: "2024",
    url: "https://dataespresso.substack.com/p/navigating-your-career-transition",
    description:
      "A practical guide to a successful career pivot in tech: from making the decision to thriving in your new role.",
  },
  {
    kind: "article",
    title: "Data Modeling Techniques for the Post-Modern Data Stack",
    outlet: "Towards Data Science",
    year: "2024",
    url: "https://medium.com/towards-data-science/data-modeling-techniques-for-the-post-modern-data-stack-03fc2e4a210c",
    description:
      "Generic techniques and principles to design a robust, cost-efficient, and scalable data model for your post-modern data stack.",
  },
  {
    kind: "article",
    title: "Navigating Your Data Platform's Growing Pains: Data Mess to Data Mesh",
    outlet: "Towards Data Science",
    year: "2024",
    url: "https://medium.com/data-science/navigating-your-data-platforms-growing-pains-a-path-from-data-mess-to-data-mesh-c16df72f5463",
    description:
      "Strategies and guiding principles to scale your data platform while maximizing business impact efficiently.",
  },
  {
    kind: "article",
    title: "Writing Design Docs for Data Pipelines",
    outlet: "Towards Data Science",
    year: "2023",
    url: "https://towardsdatascience.com/writing-design-docs-for-data-pipelines-d49550f95580",
    description:
      "The what, why, and how of design docs for data components — and why they matter.",
  },
  {
    kind: "article",
    title: "A Simple (Yet Effective) Approach to Unit Tests for dbt Models",
    outlet: "Towards Data Science",
    year: "2023",
    url: "https://medium.com/data-science/a-simple-yet-effective-approach-to-implementing-unit-tests-for-dbt-models-da2583ea8e79",
    description:
      "An innovative unit testing approach for dbt models — relying on standards and dbt best practices.",
  },
  {
    kind: "article",
    title: "Building an End-to-End Open-Source Modern Data Platform",
    outlet: "Towards Data Science",
    year: "2021",
    url: "https://towardsdatascience.com/building-an-end-to-end-open-source-modern-data-platform-c906be2f31bd",
    description:
      "An exhaustive design (with the necessary IaC) for a modern data platform built solely on open-source projects and cloud-provider primitives.",
  },
  {
    kind: "article",
    title: "Creating Notebook-based Dynamic Dashboards",
    outlet: "Towards Data Science",
    year: "2020",
    url: "https://medium.com/data-science/creating-notebook-based-dynamic-dashboards-91f936adc6f3",
    description:
      "A design (and POC) using notebooks to generate dynamic dashboards, supporting a Google-like metadata search engine.",
  },
];

export type Talk = {
  title: string;
  venue: string;
  year: string;
  url: string;
  kind: "talk" | "podcast";
};

export const talks: Talk[] = [
  {
    kind: "talk",
    title: "From Haystack to Insights: Three Ways AI is Transforming Product Analytics",
    venue: "Product-Led-Growth Disrupt Summit",
    year: "2025",
    url: "https://www.youtube.com/watch?v=sG0oCwxHw3A",
  },
  {
    kind: "talk",
    title: "The Data Engineer's Guide to Data Quality Testing: Fun, Easy, and Scalable",
    venue: "Data Innovation Summit",
    year: "2023",
    url: "https://hyperight.com/data-engineers-guide-to-data-quality-testing-easy-and-scalable-way-mahdi-karabiben-zendesk/",
  },
  {
    kind: "podcast",
    title: "The Third Wave of Data Technologies",
    venue: "The Modern Data Show — S01E02",
    year: "2022",
    url: "https://www.moderndatastack.xyz/podcast/s01-e02-the-third-wave-of-data-technologies-with-mahdi-karabiben-auex",
  },
  {
    kind: "talk",
    title: "A Practical Case Study for Data Engineers: Performing Data Quality at Scale",
    venue: "Big Data Expo",
    year: "2022",
    url: "https://www.bigdata-expo.nl/nl/programma/practical-case-study-data-engineers-performing-data-quality-scale",
  },
];

export const socialLinks = {
  medium: "https://medium.com/@mahdiqb",
  substack: "https://dataespresso.substack.com/",
  github: "https://github.com/mahdiqb",
  linkedin: "https://linkedin.com/in/mahdikarabiben",
  stackoverflow: "https://stackoverflow.com/users/12136457/mahdi-karabiben",
  x: "https://x.com/mahdikarabiben",
  bluesky: "https://bsky.app/profile/mahdiqb.bsky.social",
};
