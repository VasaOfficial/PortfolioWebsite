export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Timeline',
    hash: '#timeline',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
] as const

type devExperience = {
  title: string
  courses?: string[]
  stack?: string[]
  description: string
  date: string
}
export const devExperiencesData: readonly devExperience[] = [
  {
    title: 'Devops Engineer',
    description:
      `In 2023, I transitioned into a DevOps Engineer role at the same company, diving deeper into cloud infrastructure, automation, and Kubernetes. I have optimized infrastructure by migrating Node.js and Python applications into Docker containers, significantly reducing costs and streamlining resource usage. I set up CI/CD pipelines with GitHub Actions, making deployments faster, more reliable, and easier to maintain.

      Working with Kubernetes has been both challenging and rewarding, as I deployed scalable architectures on AWS EKS with features like auto-scaling using Karpenter. Terraform has remained my go-to tool for provisioning and managing infrastructure, while Ansible has helped automate configuration tasks across environments.

      I’ve also embraced GitOps practices with ArgoCD for declarative configuration and automated Kubernetes deployments, and I’ve implemented secure IAM roles and policies to maintain fine-grained access control. I’m constantly seeking to improve my skills and stay up-to-date with the latest industry trends, ensuring I deliver impactful solutions to every project.`,
      date: 'August 2023 – Present',
  },
  {
    title: 'Software Developer',
    description:
      'In 2020 I have started to learn software development, and in 2022 I took on my first Software Developer role, where I worked on a microservice-based architecture. Using Node.js/TypeScript with AWS Lambda and DynamoDB. I have also worked with React and Next.js on the front-end, making sure it was user-friendly and accessible.',
    date: 'June 2022 – August 2023',
  },
  {
    title: "Computer Technician",
    description:
      "I began my tech career as a computer technician back in 2019. From diagnosing hardware issues to fixing and replacing parts, I became the go-to person for getting systems back up and running. I also handled software reinstallations and configurations, ensuring everything worked smoothly for my clients. It was a hands-on role that taught me a lot about troubleshooting and problem-solving.",
    date: 'September 2019 – May 2022',
  }
] as const
