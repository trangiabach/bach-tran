import { IconType } from 'react-icons';
import { BiLogoFlask } from 'react-icons/bi';
import { FaPython, FaReact } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { SiNextdotjs, SiTypescript, SiExpress, SiMysql } from 'react-icons/si';
import { ProjectCardProps } from './ProjectCard';
import { RiSupabaseFill } from 'react-icons/ri';
import { SiFastapi } from 'react-icons/si';
import { DiGoogleCloudPlatform } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';
import { CgCPlusPlus } from 'react-icons/cg';
import { SiArduino } from 'react-icons/si';
import { SiGooglecolab } from 'react-icons/si';
import { SiPrisma } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { SiSelenium } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { FaGolang } from 'react-icons/fa6';
import { GrGraphQl } from 'react-icons/gr';
import { DiRedis } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaPhp } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';

export const techIconMap: Record<string, IconType> = {
  'Next.js': SiNextdotjs,
  Flask: BiLogoFlask,
  TypeScript: SiTypescript,
  'Vercel KV': IoLogoVercel,
  Python: FaPython,
  React: FaReact,
  Supabase: RiSupabaseFill,
  FastAPI: SiFastapi,
  'Google Cloud': DiGoogleCloudPlatform,
  'Express.js': SiExpress,
  AWS: FaAws,
  SQL: TbSql,
  MySQL: SiMysql,
  'C++': CgCPlusPlus,
  Arduino: SiArduino,
  'Google Colab': SiGooglecolab,
  Prisma: SiPrisma,
  MongoDB: DiMongodb,
  Selenium: SiSelenium,
  'React Native': TbBrandReactNative,
  Go: FaGolang,
  GraphQL: GrGraphQl,
  Redis: DiRedis,
  JavaScript: IoLogoJavascript,
  PHP: FaPhp,
  Java: FaJava,
};

export const projects: ProjectCardProps[] = [
  {
    title: 'Penn Courses LLM',
    subTitle:
      'An LLM to help student search and plan their courses easier. 1,700+ queries processed',
    description:
      'At Penn, we have a big course directory that is sometimes hard to search through, especially given the complex nature of planning courses for the semester. Penn Courses LLM seeks to simplify this complexity by offering a chat interface to answer any course-related questions a student might have.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Vercel KV',
      'Python',
      'Flask',
      'Cohere APIs',
    ],
    details:
      "PCL's backend consists of a Pinecone Vector Database to index course information (cloud-hosted and scalable), a Flask API to perform relevant search query within the vector DB based on a user's query and a RAG-based LLM that uses the API to enrich its response. To store chat sessions associated with an user and generate sharing links, Vercel KV storage (serverless Redis with built-in rate limits!) is used. The base LLM model runs on Cohere's Command Model (nice and fast model) and citation generations (coming soon!) will use the pplx-api from Perplexity AI. The frontend runs Next.js (React + TypeScript + Tailwind 🤩) and is hosted on Vercel.",
    graphic:
      'https://storage.googleapis.com/person-website-bach-tran/Screenshot%202024-02-20%20at%2012.22.37%20PM.png',
    github: 'https://github.com/trangiabach/Penn-Courses-LLM',
    videoDemo:
      'https://drive.google.com/file/d/1ZAl0BFPET1kNQX1IGV59SRKNW1fYwH6U/view',
    website: 'https://penn-courses-llm.vercel.app/',
  },
  {
    title: 'Robin AI',
    subTitle:
      'Healthcare Fraud Detection, powered with AI. 2nd place winner at Penn Generative AI Hackathon. 2024 Venture Lab Startup Challenge Finalist (previously Semifinalist)',
    description:
      'The US experienced $100B annual loss to Medicare and MedicaidFraud. At the same time, the process for detecing such fraud uses either manual or rule-based systems. Robin seeks to introduce ML to healthcare fraud detection, to catch fraud within minutes instead of days. My main role at Robin is to build out our product experience, including the dashboard UI panel and APIs for dataset processing and model inference.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'FastAPI',
      'Python',
      'Google Cloud',
    ],
    details:
      'Robin uses the Next.js (React + TypeScript) for the frontend, hosted on Vercel. ChartJS is used for graphing metrics. The backend uses the Python FastAPI framework and currently exposes API to upload/process datasets, infer models, record inferences and analyze inferences. Supabase is used for storing relational data among users, organization, models and inference runs. The backend is dockerized and deployed via Google Cloud Build and Cloud Run.',
    graphic:
      'https://storage.googleapis.com/person-website-bach-tran/robin-project-graphic.png',
    github: 'https://github.com/trangiabach/robin-web',
    website: 'https://robin-ai.vercel.app/dashboard',
    videoDemo:
      'https://drive.google.com/file/d/1qZGGIbTI6GWDIuR1bxRAgDVnIz49AtH0/view',
  },
  {
    title: 'H1B Visa Data Center',
    subTitle:
      'H1B Sponsorship Rates and Salaries visualized across the USA states, cities, employers and industries',
    description:
      'H1B Sponsorship Data is quite few and far between across the web and there are not a lot of applications that help visualize a birds-eye view of the H1B landscape in the USA. With over 582,000 individuals living in the US on a H-1B visa and 85,000 new visas being issued per year, there is a significant need for reliable and consolidated resources to help these individuals find their next home. As part of CIS5500: Database, we created an application that can visualize a bulk of H1B Visa related statistics (over 5 million data points).',
    technologies: ['React', 'TypeScript', 'Express.js', 'MySQL', 'SQL', 'AWS'],
    details:
      'The frontend uses React and the map is generated using react-map-gl. To highlight states or cities regions on the map, customized meshes are used, in the format of GeoJSON. Since meshes (espcially of small regions) can be very complex and take up memory, a tool called mapshaper are used to reduce their complexity, allowing the frontend to be performant enough on browser. On the backend, we aggreate H1B and Redfin Housing dataset into MySQL tables. We write SQL queries to extract relevent statictics such as H1B sponsorship rates across cities/states/employers along with the average housing prices. We also use Redis to cache long-running SQL queries. The backend follows a MVC architecture, using Express.js. The database is hosted on AWS RDS.',
    graphic:
      'https://storage.googleapis.com/person-website-bach-tran/h1b-project-graphic.png',
    videoDemo:
      'https://drive.google.com/file/d/1PxYfoAqN3peRl4E-X5DOX2FtPoaglgX2/view',
    github: 'https://github.com/rosewang01/home-away-from-home',
  },
  {
    title: 'Gesture Bot',
    subTitle:
      'Control motors with only gestures. Powered by an embedded TinyML model deployed on Arduino with <256kb memory',
    description:
      'Wheelchairs can be hard/clunky for disabled people to operate. As part of ESE3600: TinyML, we ntroduce a prototype of a bot that can move based on gestures to lift this burden completely. The user will be given a remote and depending on the path the user draws using the remote, gesture bot can follow the direction of the path',
    technologies: ['C++', 'Arduino', 'Python', 'Google Colab'],
    details:
      'At the core of Gesture bot is 2 boards: peripheral and central, both connected via Bluetooth. The peripheral board reads data via an IMU sensor to see if there is a gesture, rasterize the gesture (basically turning the path drawn into an image) and feed it into a quantized CNN to produce a label for the gesture (up, down, left, right). The central reads the label and move the motors on the Romi Chassis bot accordingly.',
    graphic:
      'https://storage.googleapis.com/person-website-bach-tran/tinyml-project-graphic.png',
    videoDemo:
      'https://drive.google.com/file/d/1TKAaRrOrr4VFChRZkOC5RMEu7oqN7rn8/view',
    slides:
      'https://docs.google.com/presentation/d/162j2FHHba0sU4opoiXevIIhDJSF_8T1R6ycB8F-x3-w/edit?usp=sharing',
    report:
      'https://docs.google.com/document/d/1O3y2BIbtAwbPICp1DLBYBV0aQ18cvVS7AQzI-zFiKqU/edit?usp=sharing',
  },
  {
    title: 'StepUP DB - Sustainability index of ecommerce stores',
    subTitle:
      'StepUp scrapes the web for ecommerce stores along with relevant sustainability scores and visualize it across a map',
    description:
      'This is a fun project I did to help out a high schooler with her research project into sustainbility stores. We collected data from a few directory websites of stores with their sustainable ratings, aggregate them into a single database and visualize them across the map. I had the chance to experiement with a serverless architecture (Prisma) with this app!',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Prisma',
      'MongoDB',
      'Python',
      'Selenium',
      'Google Cloud',
    ],
    details:
      'The frontend uses Next.js (React + TypeScript) hosted on Vercel. The app uses a serverless framework called Prisma, with a connection into a MongoDB instance. Prisma will generate all schemas for the database and provide a client for DB operatons. The scraper is built with Python, Selenium and BeautifulSoup. The scraper is deployed on Google Cloud Scheduler as a cron job.',
    graphic:
      'https://storage.googleapis.com/person-website-bach-tran/stepup-project-graphic.png',
    videoDemo:
      'https://drive.google.com/file/d/1HBbNcqtvlVciegawK0DZmdzNGY7ZD9vg/view?usp=sharing',
    website: 'https://stepup-network.vercel.app/map',
    github: 'https://github.com/trangiabach/StepUp',
  },
  {
    title:
      'Anti-Violence Partnership of Philadelphia (AVP) Referrals Tracking System',
    subTitle: 'A dashboard for AVP to manage their referrals more efficiently',
    description:
      'AVP, a victim service agency based in West Philadelphia, was seeking a solution to simplify their referrals tracking system that was spreadout over multiple Google Sheets and Forms. As part of Hack4Impact, I was leading a team to build out a solution to simplify the referrals system into 1 unified platform. Here, I built some of the dashboard UI components and APIs for tracking referrals updates. I also spent a lot of time talking with our clients at AVP and getting to know the nonprofit landscape in Philly!',
    details:
      'The frontend uses React + TypeScript, with Material UI as the component library (love this library). The backend follows MVC and uses Express.js + MongoDB. Tracking referral sometimes require email updates so Sendgrid API was used, too.',
    technologies: ['React', 'TypeScript', 'Express.js', 'MongoDB'],
    graphic:
      'https://storage.googleapis.com/person-website-bach-tran/avp-demo-graphic.png',
    slides:
      'https://docs.google.com/presentation/d/1dEXDQMdSs0JTfwcE7Io3dI1tu923v1oHC0QtvzQrEjg/edit',
    github: 'https://github.com/hack4impact-upenn/avp',
    videoDemo:
      'https://drive.google.com/file/d/1db0oLiqAo0WOQQ4CqZg3WQOryt41JfOy/view?resourcekey',
  },
  {
    title: 'Office Hours Queue (ohq.io)',
    subTitle:
      'Office hours management platform powered by real-time queue management, analytics and more. Integrated into 100+ courses at Penn',
    description:
      'OHQ revolutionizes office hours by replacing physical lines and sign-up sheets with a virtual queue system. It lets students join with a query and estimates wait times, alerting them via SMS when their turn is up, along with updates and staff announcements. For staff, it provides queue management, performance tracking, and review tools. As a backend team member at OHQ, I had a blast working with Python and Django, developing APIs for analytics, TA reviews, and enhancing existing ones, scaling OHQ to help students and university admin have a better time with OH!',
    technologies: ['Python', 'Django', 'Next.js', 'React', 'TypeScript'],
    details:
      'OHQ on the frontend uses Next.js (React + TypeScript). On the backend, OHQ also follows the MVC archtecture and uses a PostGres instance as a database. Additionally, to stream updates to users, OHQ uses Django Channels to stream updates for querysets and model instances over a websocket connection. Analytics are run as celery tasks in the background, to collect relevant statistics such as average wait time',
    website: 'https://ohq.io/',
    graphic:
      'https://storage.googleapis.com/person-website-bach-tran/ohq-demo-pic.png',
    instructorGuide:
      'https://pennlabs.notion.site/OHQ-Instructor-Guide-76e70e0e0bb04637b1f5b7dad14ebfb4',
    studentGuide:
      'https://pennlabs.notion.site/OHQ-Student-Guide-5898527d8e38415c8b57126886f6cf58',
  },
  {
    title: 'The Daily Pennsylvanian Inc',
    subTitle:
      'Independent student media organization of the University of Pennsylvania',
    description:
      'I joined The DP (Daily Pennsylvanian) as director of engineering, responsible for developing/maintaining technology infrastructure.  Over my time, I was able to develop a few services for the DP such as the DP+ app (contributions to UI as well as a GraphQL API to query articles from the website into the app), Narrative AI integration (making AI-generated audio available for all articles), dropcap (a service track the top 10 most viewed articles within a month) and content-rec (a service used to recommend relevant articles based on vector similarity search)',
    details:
      'The DP follows a microservice architecture with quite a few services developed over the years. Our publication websites uses PHP, while many of other special issue or interal sites uses Gatsby (a React framework). Our backend service uses Express.js or Go. There are also some custom scripts that are injected into our website for integrations with providers. Our app uses React Native',
    technologies: [
      'React',
      'React Native',
      'JavaScript',
      'GraphQL',
      'Redis',
      'Google Cloud',
      'PHP',
    ],
    website: 'https://www.thedp.com/',
    graphic:
      'https://storage.googleapis.com/person-website-bach-tran/dp%20graphic%20demo.png',
    app: 'https://apps.apple.com/sg/app/dp/id1550818171',
  },
  {
    title: 'Penn Courses Graph',
    subTitle:
      'A graph of all Penn Courses, connected via prereqs and vector similarity',
    description:
      'This project is a visualization of the Penn Courses Directory, connected by their relationship in whether they are prereqs to each other or whether their content is similar. The relationships are then processe into a graph-like format and visualized via a web UI with filter options, entirely with vis-react.',
    details:
      'This project uses React as the frontend and is hosted on Vercel. The data generated uses a custom vector model in Java that was build as part of NETS1500: Networked and Social Systems to compare vector similary among course description. The scraper to scrape the course directory is also built in Java with Jsoup. The graph UI was built with vis-react',
    technologies: ['React', 'JavaScript', 'Java'],
    website: 'https://penn-course-graph.vercel.app/',
    graphic:
      'https://storage.googleapis.com/person-website-bach-tran/penn-course-graph-graphic.png',
    github: 'https://github.com/trangiabach/Penn-Course-Graph',
    videoDemo:
      'https://drive.google.com/file/d/1x04-kCscRWlvGLDrMBN7YAB4GmFYNyxa/view',
  },
];
