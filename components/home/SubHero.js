import SvgtoReact from '../Svgtoreact'

export default function SubHero({ subhero }) {
  return (
    <div className="border-t border-b border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
      <div className="container flex flex-col items-center justify-between px-3 sm:flex-col md:flex-row xl:flex-row">
        {subhero.map(([icon, title, subtitle]) => (
          <div className="flex w-60 flex-col items-center py-20" key={icon}>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
              <SvgtoReact
                class="fill-current stroke-current text-gray-800  dark:text-gray-100"
                height={25}
                name={icon}
              />
            </div>
            <div className="py-8 text-3xl font-bold dark:text-gray-100">
              {title}
            </div>
            <div className="text-center text-lg text-gray-600 dark:text-gray-300">
              {subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
