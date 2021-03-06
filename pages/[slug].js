import HappyLink from '../components/HappyLink'
import Postbody from '../components/PostBody'
import SvgtoReact from '../components/Svgtoreact'
import Subscribe from '../components/home/Subscribe'
import { getPost, getAllPostsWithSlug } from '../lib/api'
import Headerlayout from '../widget/Headerlayout'
import Image from 'next/image'
import highlighter from '../lib/highlighter'
import RichDataPost from '../components/seo/RichDataPost'
import Link from 'next/link'

export default function Post({ post, socials, content, metalinks, subscribe }) {
  const { author, date, tags, title } = post.post
  const { firstName, avatar, slug } = author.node
  const { uri } = post.post.featuredImage.node
  const dt = (date) => new Date(date).toDateString()
  const postIcon = (tag) =>
    tag.map((tag) => (
      <div key={tag.name} className="h-16">
        <SvgtoReact
          height={60}
          width={60}
          class="mr-4"
          name={tag.name.toLowerCase()}
        />
      </div>
    ))

  return (
    <>
      <RichDataPost
        title={metalinks.title}
        description={metalinks.metaDesc}
        date={date}
        firstName={firstName}
        image={uri}
        slug={slug}
      />
      <Headerlayout>
        <div className="container flex flex-col items-center px-3 py-3">
          <Link href="/blog">
            <a className="flex flex-row place-self-start fill-current pl-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <SvgtoReact
                className="mr-3 rotate-90 transform self-center "
                name="arrow"
                height="15"
                width="15"
              />
              Back to posts
            </a>
          </Link>
          {postIcon(tags.nodes)}
          <h1 className="p-3 text-center text-3xl font-bold text-gray-900 dark:text-gray-50">
            {title}
          </h1>
          <div className="center flex flex-row">
            <div className="mt-1 place-self-end">
              <Image
                src={avatar.url}
                height={35}
                width={35}
                alt="Picture of the author"
                className="rounded-full "
              />
            </div>
            <div className="mt-0 flex flex-col pl-2">
              <HappyLink
                href={`author/${slug}`}
                classes="text-gray-900 dark:text-gray-50 hover:underline"
              >
                {firstName}
              </HappyLink>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {dt(date)}
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-row">
            {socials.map(([link, names], i) => (
              <div key={link} className="text-gray-500 dark:text-gray-300">
                <HappyLink
                  key={names}
                  href={link}
                  classes="px-1.5 text-accent dark:text-darkaccent hover:underline"
                >
                  {names}
                </HappyLink>
                {socials.length - 1 === i ? '' : '???'}
              </div>
            ))}
          </div>
        </div>
      </Headerlayout>
      <Postbody content={content} />
      <div className="bg-gray-100  dark:bg-gray-800">
        <Subscribe title={subscribe.title} subtitle={subscribe.subtitle} />
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const subscribe = {
    title: 'Subscribe',
    subtitle:
      'Subscribe to get notified of new content and course that will come in the near future. In any way, you will not get spammed or your data be shared',
  }
  const socials = [
    ['https://twitter.com/happy_prog', 'twitter'],
    ['https://www.patreon.com/thehappyprogrammer', 'patreon'],
    [
      'https://www.facebook.com/The-Happy-Programmer-106178104593013',
      'facebook',
    ],
    ['https://www.youtube.com/channel/UCdZM2azChLnEch1hRnEx9Xg', 'youtube'],
  ]

  const post = await getPost(params.slug)
  const pp = await highlighter(post.post.content)
  return {
    props: {
      post: post,
      socials: socials,
      content: pp,
      metalinks: post.post.seo,
      subscribe,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: false,
  }
}
