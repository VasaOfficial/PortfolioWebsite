import { type StaticImageData } from 'next/image'
import MovieLibraryImage from '../../public/assets/projects/MovieLibrary.png'
import EarthSensorImage from '../../public/assets/projects/EarthSensor.png'
import InteriorPaintingImage from '../../public/assets/projects/moleraj.png'
import gitopsImage from '../../public/assets/projects/gitops-min.png'
import JenkinsJavaEksImage from '../../public/assets/projects/Jenkins-Java-eks-min.png'
import JenkinsExpressImage from '../../public/assets/projects/Jekins-Express-min.png'
import ServerlessMicroserviceImage from '../../public/assets/projects/Serverless-microservice-min.png'

type projects = {
  title: string
  stack: string[]
  description: string
  links: { href: string; label: string }[]
  image: { src: StaticImageData; alt: string }
}

export const projects: projects[] = [
  {
    title: 'Serverless Microservices',
    stack: ['Lambda', 'Node.js', 'RDS'],
    description:
      'Serverless Microservices made with Node.js/Typescript using AWS Lambda functions and RDS as a database. This project is also using Github Actions to automate the build and deployment process, Terraform is used for the infrastructure management.',
    links: [
      { href: 'https://github.com/VasaOfficial/Serverless-microservice', label: 'Live Preview' },
      {
        href: 'https://github.com/VasaOfficial/Serverless-microservice',
        label: 'View Source',
      },
    ],
    image: {
      src: ServerlessMicroserviceImage,
      alt: 'ServerlessMicroserviceImage',
    },
  },
  {
    title: 'Gitops Deployment',
    stack: ['ArgoCD', 'EKS', 'Terraform'],
    description:
      'Two Github Actions pipelines, one is for the Terraform and the second one is for the Gitops. The pipelines use ArgoCD and EKS to deploy the Gitops. EKS cluster is monitored by grafana and prometheus.',
    links: [
      { href: 'https://github.com/VasaOfficial/Gitops_Pipeline', label: 'Live Preview' },
      {
        href: 'https://github.com/VasaOfficial/Gitops_Pipeline',
        label: 'View Source',
      },
    ],
    image: {
      src: gitopsImage,
      alt: 'gitopsImage',
    },
  },
  {
    title: 'Jenkins-Java-EKS CI/CD Pipeline',
    stack: ['Jenkins', 'Terraform', 'Kubernetes'],
    description:
      'Jenkins pipeline that uses trivy, sonarqube, maven, docker, k8s, grafana and prometheus for monitoring. The pipeline builds and deploys an Java App to an EKS cluster. EKS, EC2 and the rest of aws infrastructure are managed by terraform.',
    links: [
      { href: 'https://github.com/VasaOfficial/Jenkins_Java_EKS_Pipeline', label: 'Live Preview' },
      {
        href: 'https://github.com/VasaOfficial/Jenkins_Java_EKS_Pipeline',
        label: 'View Source',
      },
    ],
    image: {
      src: JenkinsJavaEksImage,
      alt: 'JenkinsJavaEksImage',
    },
  },
  {
    title: 'Jenkins Pipeline for Express App',
    stack: ['Jenkins', 'Express', 'ECS'],
    description:
      'Jenkins Pipeline for Express App is a CI/CD pipeline that builds and deploys an Express App to an ECS service.',
    links: [
      { href: 'https://github.com/VasaOfficial/Jenkins_pipeline_for_express', label: 'Live Preview' },
      {
        href: 'https://github.com/VasaOfficial/Jenkins_pipeline_for_express',
        label: 'View Source',
      },
    ],
    image: {
      src: JenkinsExpressImage,
      alt: 'JenkinsExpressImage',
    },
  },
  {
    title: 'EarthSensor',
    stack: ['TypeScript', 'React', 'Next.js'],
    description:
      'EarthSensor provides air pollution and weather information for cities around the world. The app fetches data from the Aqicn REST API and presents it in a user-friendly format using graphs.',
    links: [
      { href: 'https://earth-sensor.vercel.app/', label: 'Live Preview' },
      {
        href: 'https://github.com/VasaOfficial/EarthSensor',
        label: 'View Source',
      },
    ],
    image: {
      src: EarthSensorImage,
      alt: 'EarthSensor',
    },
  },
  {
    title: 'Interior Painting Business',
    stack: ['TypeScript', 'React', 'Next.js'],
    description:
      'An landing page for the interior painting business. Made with TypeScript and React.',
    links: [
      { href: 'https://moleraj-beograd.vercel.app/', label: 'Live Preview' },
      {
        href: 'https://github.com/VasaOfficial/MolerajSajt',
        label: 'View Source',
      },
    ],
    image: {
      src: InteriorPaintingImage,
      alt: 'Interior Painting Business',
    },
  },
  {
    title: 'MovieLibrary',
    stack: ['OpenAI', 'TypeScript', 'React', 'Next.js'],
    description:
      'An AI based tool for movie and tv shows searching and recommendations.',
    links: [
      {
        href: 'https://github.com/VasaOfficial/MovieLibrary',
        label: 'Live Preview',
      },
      {
        href: 'https://github.com/VasaOfficial/MovieLibrary',
        label: 'View Source',
      },
    ],
    image: {
      src: MovieLibraryImage,
      alt: 'MovieLibrary',
    },
  },
]
