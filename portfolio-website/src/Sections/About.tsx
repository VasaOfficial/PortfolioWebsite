'use client'
import { useState } from 'react'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import { IoMailOutline } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import toast, { Toaster } from 'react-hot-toast'
import Image from 'next/image'
import MyImage from '../../public/assets/profile.png'
import { HiDownload } from 'react-icons/hi'
import Link from 'next/link'
import { useSectionInView } from '~/lib/hooks'

import '~/styles/Hero.scss'

export default function Home() {
  const { ref } = useSectionInView('About')
  const { t } = useTranslation()
  const [isError, setError] = useState(false)

  function copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success(t('email copied'), {
          duration: 2000,
        })
      })
      .catch(() => {
        toast.error(t('notifications.email-ns'), {
          duration: 2000,
        })
        setError(true)
      })
  }

  const copyEmail = () => {
    const cp = 'vasapofficial@gmail.com'
    if (!isError) {
      if (!navigator.clipboard) {
        copyToClipboard(cp)
        toast.success(t('email copied'), {
          duration: 2000,
        })
      } else {
        navigator.clipboard
          .writeText(cp)
          .then(() => {
            toast.success(t('email copied'), {
              duration: 2000,
            })
          })
          .catch(() => {
            toast.error(t('notifications.email-ns'), {
              duration: 2000,
            })
            setError(true)
          })
      }
    }
  }

  const openEmail = () => {
    toast.loading(t('email sending'), {
      duration: 2000,
    })
  }

  return (
    <div
      ref={ref}
      className="z-50 max-lg:flex-col max-lg:items-center lg:max-w-[80%] max-lg:max-w-[90%] m-auto mt-28 flex w-full 2xl:max-w-[50%] justify-between"
    >
      <Toaster />
      <div className="flex flex-col items-start max-lg:items-center">
        <div className="text-left">
          <p className="max-w-[600px] max-lg:text-center">
            <code>
              I&apos;m a DevOps Engineer with previous experience in Software Development. I have 2.5 years of experience in Software Development and DevOps combined.
              As a DevOps Engineer, I specialize in working with AWS, Docker, and CI/CD pipelines. My expertise includes migrating applications to Docker containers, implementing scalable architectures on AWS EKS, and automating infrastructure provisioning using tools like Terraform and Ansible. I also leverage GitOps practices with ArgoCD to ensure efficient and reliable Kubernetes deployments, and I design secure AWS IAM roles and policies to maintain fine-grained access control.
              <br />
              <br />
              Previously, as a Software Developer, I focused on building and maintaining microservice architectures using JavaScript/TypeScript and AWS Lambda with DynamoDB. I have experience optimizing backend performance, enhancing frontend components with React, and ensuring seamless integrations between cross-functional teams to deliver exceptional user experiences.
              <br />
              <br />
              When Im not coding I like to spend my time walking my cat Dio 🐈
              (he is orange and silly ), playing basketball, hanging out with
              my friends and reading books.
            </code>
          </p>
        </div>
        <div className="flex max-sm:items-center max-sm:m-auto">
          <div className="hero_socials__links flex max-sm:items-center max-sm:justify-center max-lg:mt-5">
            <div className="hero_socials">
              <Link
                href="https://github.com/VasaOfficial"
                data-title="Github"
                target="_blank"
                rel="noopener"
                className="grho grho__sml"
              >
                <AiOutlineGithub />
                Github
              </Link>
              <Link
                href="https://www.linkedin.com/in/vasilijepleskonjicofficial/"
                data-title="Linkedin"
                target="_blank"
                rel="noopener"
                className="grho grho__sml"
              >
                <AiFillLinkedin />
                Linkedin
              </Link>
              <div className="hero_socials__email">
                <button
                  className="hero_socials__embtn"
                  data-title={t('hero.email-lable')}
                >
                  <IoMailOutline />
                  Email
                </button>
                <div className="hero_socials__dropdown">
                  <a
                    onClick={openEmail}
                    href="mailto:vasapofficial@gmail.com"
                    className="grho grho__sml"
                  >
                    {t('Open email client')}
                  </a>
                  <button
                    onClick={copyEmail}
                    className={isError ? 'textlnk' : 'grho grho__sml'}
                  >
                    {isError
                      ? 'vasapofficial@gmail.com'
                      : t('Copy to clipboard')}
                  </button>
                </div>
              </div>
            </div>
            <a
              href="/assets/Vasilije-Pleskonjic-CV.pdf"
              download="Vasilije-Pleskonjic-CV.pdf"
              className="grho grho__sml ml-2 flex cursor-pointer rounded-lg border-2 border-customGreen px-2"
            >
              <p className="text-customGreen">Download CV</p>
              <div className="grho grho__sml hero_super m-auto ml-1 text-customGreen">
                <HiDownload />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='max-lg:mt-10'>
        <div className="rfc">
          <div className="rfcg rfcg-1"></div>
          <div className="rfcg rfcg-2"></div>
          <div className="rfcg rfcg-3"></div>
          <div className="rfcg rfcg-4"></div>
          <div className="rfcg rfcg-5"></div>
          <div className="rfcg rfcg-6"></div>
          <div className="rfcg rfcg-7"></div>
          <div className="rfcg rfcg-8"></div>
          <div className="rfcg rfcg-9"></div>
          <div className="rfcg rfcg-10"></div>
          <div className="rfcg rfcg-11"></div>
          <div className="rfcg rfcg-12"></div>
          <div className="rfcg rfcg-13"></div>
          <div className="rfcg rfcg-14"></div>
          <div className="rfcg rfcg-15"></div>
          <div className="rfcg rfcg-16"></div>
          <div className="rfcg rfcg-17"></div>
          <div className="rfcg rfcg-18"></div>
          <div className="rfcg rfcg-19"></div>
          <div className="rfcg rfcg-20"></div>
          <div className="rfcg rfcg-21"></div>
          <div className="rfcg rfcg-22"></div>
          <div className="rfcg rfcg-23"></div>
          <div className="rfcg rfcg-24"></div>
          <div className="rfcg rfcg-25"></div>
          <div className="rfcg rfcg-26"></div>
          <div className="rfcg rfcg-27"></div>
          <div className="rfcg rfcg-28"></div>
          <div className="rfcg rfcg-29"></div>
          <div className="rfcg rfcg-30"></div>
          <div className="rfcg rfcg-31"></div>
          <div className="rfcg rfcg-32"></div>
          <div className="rfcg rfcg-33"></div>
          <div className="rfcg rfcg-34"></div>
          <div className="rfcg rfcg-35"></div>
          <div className="rfcg rfcg-36"></div>
          <div className="rfcg rfcg-37"></div>
          <div className="rfcg rfcg-38"></div>
          <div className="rfcg rfcg-39"></div>
          <div className="rfcg rfcg-40"></div>
          <div className="rfcg rfcg-41"></div>
          <div className="rfcg rfcg-42"></div>
          <div className="rfcg rfcg-43"></div>
          <div className="rfcg rfcg-44"></div>
          <div className="rfcg rfcg-45"></div>
          <div className="rfcg rfcg-46"></div>
          <div className="rfcg rfcg-47"></div>
          <div className="rfcg rfcg-48"></div>
          <div className="rfcg rfcg-49"></div>
          <div className="rfcg rfcg-50"></div>
          <div className="rfcg rfcg-51"></div>
          <div className="rfcg rfcg-52"></div>
          <div className="rfcg rfcg-53"></div>
          <div className="rfcg rfcg-54"></div>
          <div className="rfcg rfcg-55"></div>
          <div className="rfcg rfcg-56"></div>
          <div className="rfcg rfcg-57"></div>
          <div className="rfcg rfcg-58"></div>
          <div className="rfcg rfcg-59"></div>
          <div className="rfcg rfcg-60"></div>
          <div className="rfcg rfcg-61"></div>
          <div className="rfcg rfcg-62"></div>
          <div className="rfcg rfcg-63"></div>
          <div className="rfcg rfcg-64"></div>
          <div className="rfcg rfcg-65"></div>
          <div className="rfcg rfcg-66"></div>
          <div className="rfcg rfcg-67"></div>
          <div className="rfcg rfcg-68"></div>
          <div className="rfcg rfcg-69"></div>
          <div className="rfcg rfcg-70"></div>
          <div className="rfcg rfcg-71"></div>
          <div className="rfcg rfcg-72"></div>
          <div className="rfcg rfcg-73"></div>
          <div className="rfcg rfcg-74"></div>
          <div className="rfcg rfcg-75"></div>
          <div className="rfcg rfcg-76"></div>
          <div className="rfcg rfcg-77"></div>
          <div className="rfcg rfcg-78"></div>
          <div className="rfcg rfcg-79"></div>
          <div className="rfcg rfcg-80"></div>
          <div className="rfcg rfcg-81"></div>
          <div className="rfcg rfcg-82"></div>
          <div className="rfcg rfcg-83"></div>
          <div className="rfcg rfcg-84"></div>
          <div className="rfcg rfcg-85"></div>
          <div className="rfcg rfcg-86"></div>
          <div className="rfcg rfcg-87"></div>
          <div className="rfcg rfcg-88"></div>
          <div className="rfcg rfcg-89"></div>
          <div className="rfcg rfcg-90"></div>
          <div className="rfcg rfcg-91"></div>
          <div className="rfcg rfcg-92"></div>
          <div className="rfcg rfcg-93"></div>
          <div className="rfcg rfcg-94"></div>
          <div className="rfcg rfcg-95"></div>
          <div className="rfcg rfcg-96"></div>
          <div className="rfcg rfcg-97"></div>
          <div className="rfcg rfcg-98"></div>
          <div className="rfcg rfcg-99"></div>
          <div className="rfcg rfcg-100"></div>
          <div className="rfcc hero_pfp">
            <picture>
              <Image
                className="img-fluid object-cover"
                width={250}
                height={250}
                quality={100}
                src={MyImage}
                alt="Profile Picture"
                style={{ objectFit: 'cover' }}
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}
