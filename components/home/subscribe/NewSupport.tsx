import SubDesc from './SubDesc'
import style from '../../../styles/buttons.module.css'
import SvgtoReact from '../../Svgtoreact'
import TabButton from '../../TabButtons/TabButton'
import { useState } from 'react'
import Link from 'next/link'

export default function NewSupport({}): JSX.Element {
  const [active, setActive] = useState<boolean>(true)
  return (
    <div className="border-b border-t bg-gray-100 dark:border-gray-50 dark:border-opacity-10 dark:bg-gray-800">
      <div className="container flex flex-col py-20">
        <div className="mx-auto max-w-xs pb-10 pt-20 text-center">
          <p className="py-2 text-sm font-semibold uppercase text-accent dark:text-darkaccent">
            full-featured
          </p>
          <h3 className="text-3xl font-bold dark:text-gray-50">
            Become an expert in programming
          </h3>
        </div>
        <TabButton
          firstBtn="Monthly"
          SecondBtn="Yearly"
          active={active}
          setActive={setActive}
        />
        <div className="flex flex-col pt-10 pb-32 sm:flex-col md:flex-row lg:flex-row xl:flex-row">
          <div className="flex flex-col items-center gap-y-10 border-r border-gray-900 border-opacity-10 md:w-1/2 md:justify-center lg:w-1/2 lg:justify-center xl:w-1/2 xl:justify-center">
            <SubDesc title="Apple products development" icon="courses/swift">
              <div>
                Swift is the main language for creating Apps in{' '}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://developer.apple.com/ios"
                  className="text-accent underline dark:text-darkaccent"
                >
                  iOS
                </a>
                ,
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://developer.apple.com/ipados"
                  className="text-accent underline dark:text-darkaccent"
                >
                  iPadOS
                </a>
                ,{' '}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://developer.apple.com/macos/"
                  className="text-accent underline dark:text-darkaccent"
                >
                  MacOS
                </a>{' '}
                and{' '}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://developer.apple.com/watchos/"
                  className="text-accent underline dark:text-darkaccent"
                >
                  WatchOS
                </a>
              </div>
            </SubDesc>
            <SubDesc title="Web Development" icon="support/web">
              <div>
                Courses in React{' '}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://nextjs.org"
                  className="text-accent underline dark:text-darkaccent"
                >
                  NextJS
                </a>
                ,{' '}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://v3.nuxtjs.org"
                  className="text-accent underline dark:text-darkaccent"
                >
                  NuxtJS
                </a>
                . Javascript is being taugh in detail in THP
              </div>
            </SubDesc>
            <SubDesc title="Mobile Development" icon="support/mobile">
              <div>
                The fastest growing market mobile development is being taught
                and difficult concepts explained, such as{' '}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://reactnative.dev"
                  className="text-accent underline dark:text-darkaccent"
                >
                  React Native
                </a>
                ,{' '}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://flutter.dev/"
                  className="text-accent underline dark:text-darkaccent"
                >
                  Flutter
                </a>
              </div>
            </SubDesc>
            <SubDesc title="Server Development" icon="support/server">
              <div>
                To become and all around develoner you need to learn to create
                servers, here is the right place to learn{' '}
                <a
                  rel="noreferrer"
                  className="text-accent underline dark:text-darkaccent"
                  href="https://expressjs.com"
                >
                  ExpressJS
                </a>
                ,{' '}
                <a
                  rel="noreferrer"
                  className="text-accent underline dark:text-darkaccent"
                  href="https://nodejs.org/en/"
                >
                  NodeJS
                </a>{' '}
                .
              </div>
            </SubDesc>
          </div>
          <div className="mx-auto flex w-1/2 max-w-sm flex-col pt-10 text-center sm:pt-10 md:pt-0 lg:pt-0 xl:pt-0">
            <p className="text-3xl font-bold dark:text-gray-50">
              {active ? '£5' : '£50'}
            </p>
            <p className="text-gray-900 text-opacity-60 dark:text-gray-50">
              {active ? 'per month' : 'per year'}
            </p>
            <div className="mx-auto grid w-full grid-cols-2 gap-2 py-16">
              {[
                'Early Access',
                'Sub-only Courses',
                'Answer Questions',
                'Share source code',
                'Personal Mentoring',
                'Complete Projects',
              ].map((item) => (
                <div
                  key={item}
                  className="flex-none rounded-md bg-gray-50 p-3 text-sm dark:bg-gray-700 "
                >
                  <div className="flex flex-row">
                    <SvgtoReact
                      name="check"
                      height={20}
                      width={20}
                      className="stroke-current text-gray-900 dark:text-gray-50"
                    />
                    <p className="mx-auto text-center font-light text-gray-900 text-opacity-60 dark:text-gray-50">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
              <div className="col-span-2 pt-3">
                <Link href={'/support'}>
                  <a className={style.fullbtn}>Get Started today</a>
                </Link>
              </div>
            </div>
            <p className="text-sm text-gray-900 text-opacity-50 dark:text-gray-50">
              Try THP subscription now
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
