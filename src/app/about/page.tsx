import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  LinkedInIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Mariana Garciagodoy. I live in Paris, where I conduct ensembles of all sizes.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Mariana. I change lives through music.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Praised for her clear technique, dynamic expressiveness, and  her warm rapport with the musicians she works with, Mariana Garciagodoy Cervantes is an international conductor who warrants watching. A natural musical elegance belies her extensive training in classical dance in her younger years in her native Mexico City. Since arriving in France, she has become a champion of French music, premiering numerous works in Paris and Châteauroux, where she is music director of the Orchestre de la Musique Municipale. She has also worked with international soloists in a multitude of genres, and will be conducting a concert to welcome the arrival of the Olympic Flame for the 2024 Olympic Games.
            </p>
            <p>
              A dynamic and clear control of gesture represents her education from leading institutions, including a Master's in choral conducting from the University of Tennessee, and more recently a Diplôme Supérieure in orchestral conducting from École Normale de Musique de Paris. The hexalingual Mariana has bolstered her training with masterclasses across the world, including the United States, Germany, Romania and Finland.
            </p>
            <p>
              As Mariana's career grows, she always keeps one thing at the forefront: a dedication to a spirit of collaboration in all that she does. She believes everyone can find meaning and belonging in musical experiences, a mindset which is contagious to her colleagues and audiences everywhere.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/mariana-garciagodoy-111b6b32/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:marciagodoy@hotmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              marciagodoy@hotmail.com
            </SocialLink>
            <div
              className="mt-8 text-md font-medium border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex flex-col"
              >
              <div
                className="group flex text-zinc-800 dark:text-zinc-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 flex-none fill-zinc-500 dark:text-zinc-800 text-zinc-200">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                <span className="ml-4">Languages</span>
              </div>
              <ol className="mt-1 text-sm ml-10">
                <li className="inset-5">Native Fluency: Spanish / English</li>
                <li className="mt-1">Bilingual Proficiency: German / French</li>
                <li className="mt-1">Limited Working Proficiency: Italian / Russian</li>
              </ol>
            </div>
          </ul>
        </div>
      </div>
    </Container>
  )
}
