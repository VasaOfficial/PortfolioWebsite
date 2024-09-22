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
      'After diving deep into cloud infrastructure and automation I started to really enjoy working with cloud/devops. In 2023, as I was getting more and more comfortable with it, I took a role as a DevOps Engineer in the same company. I’ve been optimizing infrastructure by migrating apps into Docker, setting up CI/CD pipelines with GitHub Actions, making deployments faster and more reliable. I have also worked with Kubernetes and even tho it was really challenging at times, I really enjoyed it. Plus, Terraform has been my go-to tool for automating environments and infrastructure management. I am always looking for new ways to improve my skills and stay up-to-date with the latest industry trends.',
    date: 'August 2023 – Present',
  },
  {
    title: 'Full-Stack Software Developer',
    description:
      'In 2020 I have started to learn software development, and in 2022 I took on my first full-stack role, where I worked on a microservice-based architecture. Using Node.js/TypeScript with AWS Lambda and DynamoDB. I have also worked with React and Next.js on the front-end, making sure it was user-friendly and accessible.',
    date: 'June 2022 – August 2023',
  },
  {
    title: "Computer Technician",
    description:
      "I began my tech career as a computer technician back in 2019. From diagnosing hardware issues to fixing and replacing parts, I became the go-to person for getting systems back up and running. I also handled software reinstallations and configurations, ensuring everything worked smoothly for my clients. It was a hands-on role that taught me a lot about troubleshooting and problem-solving.",
    date: 'September 2019 – May 2022',
  }
] as const
