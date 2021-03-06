import SvgtoReact from '../Svgtoreact'
import HappyLink from '../HappyLink'

export default function DisplayCard({ svg, desc, link, socials }) {
  return (
    <div
      key={svg}
      className="flex flex-col rounded-md border bg-gray-50 p-5 hover:border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-500"
    >
      <div className={`pt-5 pb-2 ${socials ? 'h-16' : 'h-16'}`}>
        <SvgtoReact
          className="fill-current dark:text-gray-50"
          name={svg.toLowerCase()}
          height={socials ? 25 : 30}
        />
      </div>
      <p className="text-lg font-bold capitalize dark:text-gray-50">{svg}</p>
      <p className="py-2 text-sm leading-loose text-gray-600 dark:text-gray-300">
        {desc}
      </p>
      <HappyLink
        classes="group dark:hover:text-darkaccent hover:text-accent dark:text-gray-50 font-semibold justify-between mt-auto flex items-center"
        href={link}
      >
        {socials ? 'Follow' : 'Projects'}{' '}
        <SvgtoReact
          name="arrow"
          className="-rotate-90 transform fill-current group-hover:text-accent dark:text-gray-50 dark:group-hover:text-darkaccent"
          height={15}
        />
      </HappyLink>
    </div>
  )
}
