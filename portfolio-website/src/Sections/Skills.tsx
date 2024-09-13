'use client'
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import SkillsItem from '~/components/ui/skills'
import Image from 'next/image'

import LinuxIcon from '../../public/assets/skills/linux.svg'
import AwsIcon from '../../public/assets/skills/aws.svg'
import DockerIcon from '../../public/assets/skills/docker.svg'
import GitIcon from '../../public/assets/skills/git.svg'
import JavascriptIcon from '../../public/assets/skills/javascript.svg'
import JenkinsIcon from '../../public/assets/skills/jenkins.svg'
import KubernetesIcon from '../../public/assets/skills/kubernetes.svg'
import NextjsIcon from '../../public/assets/skills/next-js.svg'
import NodejsIcon from '../../public/assets/skills/node-js.svg'
import PostgresqlIcon from '../../public/assets/skills/postgresql.svg'
import PythonIcon from '../../public/assets/skills/python.svg'
import ReactIcon from '../../public/assets/skills/react.svg'
import TerraformIcon from '../../public/assets/skills/terraform.svg'
import TypescriptIcon from '../../public/assets/skills/typescript.svg'
import VimIcon from '../../public/assets/skills/vim.svg'
import GithubActionIcon from '../../public/assets/skills/GitHub Actions.svg'
import { useSectionInView } from '~/lib/hooks'

export default function Skills() {
  const { ref } = useSectionInView('Skills')
  return (
    <div ref={ref} className="mx-auto my-40 max-w-[50%] max-sm:justify-center max-sm:max-w-[85%]">
      <div className="-mr-2.5 flex flex-wrap items-stretch justify-start grayscale-[0.3]">
        <SkillsItem title="Linux">
          <Image src={LinuxIcon} alt="Linux Icon" width={38} height={38} />
        </SkillsItem>

        <SkillsItem title="AWS">
          <Image src={AwsIcon} alt="AWS Icon" width={38} height={38} />
        </SkillsItem>

        <SkillsItem title="Docker">
          <Image src={DockerIcon} alt="Docker Icon" width={38} height={38} />
        </SkillsItem>

        <SkillsItem title="Github">
          <Image src={GitIcon} alt="Github Icon" width={38} height={38} />
        </SkillsItem>

        <SkillsItem title="Javascript">
          <Image src={JavascriptIcon} alt="Javascript Icon" width={38} height={38} />
        </SkillsItem>

        <SkillsItem title="Jenkins">
          <Image src={JenkinsIcon} alt="Jenkins Icon" width={38} height={38} />
        </SkillsItem>

        <SkillsItem title="Kubernetes">
          <Image src={KubernetesIcon} alt="Kubernetes Icon" width={38} height={38} />
        </SkillsItem>

        <SkillsItem title="Next.js">
          <Image src={NextjsIcon} alt="Next.js Icon" width={38} height={38} />
        </SkillsItem>

        <SkillsItem title="Node.js">
          <Image src={NodejsIcon} alt="Node.js Icon" width={38} height={38} />
        </SkillsItem>

        <SkillsItem title="Postgresql">
          <Image src={PostgresqlIcon} alt="Postgresql Icon" width={38} height={38} />
        </SkillsItem>

        <SkillsItem title="Python">
          <Image src={PythonIcon} alt="Python Icon" width={38} height={38} />
        </SkillsItem>

        <SkillsItem title="React">
          <Image src={ReactIcon} alt="React Icon" width={38} height={38} />
        </SkillsItem>

        <SkillsItem title="Terraform">
          <Image src={TerraformIcon} alt="Terraform Icon" width={38} height={38} />
        </SkillsItem>

        <SkillsItem title="Typescript">
          <Image src={TypescriptIcon} alt="Typescript Icon" width={38} height={38} />
        </SkillsItem>

        <SkillsItem title="Vim">
          <Image src={VimIcon} alt="Vim" width={38} height={38} />
        </SkillsItem>

        <SkillsItem title="Github Action">
          <Image src={GithubActionIcon} alt="GithubAction" width={38} height={38} />
        </SkillsItem>
      </div>
    </div>
  )
}
