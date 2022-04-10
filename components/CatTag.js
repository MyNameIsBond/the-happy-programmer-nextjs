import Link from 'next/link'
import SvgtoReact from './Svgtoreact'

export default function CatTag({ categories, title, tags }) {
  return (
    <div className="hidden pt-6 md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col">
      <p className="py-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </p>
      <div className="divide-y dark:divide-gray-700">
        {categories?.map((cat) => (
          <div className="py-2.5" key={cat.node.uri}>
            <Link href={`${cat.node.uri}`}>
              <a className="cursor-pointer text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">
                {cat.node.name}
              </a>
            </Link>
          </div>
        ))}
        {tags?.map((cat) => (
          <div className="py-2.5" key={cat.uri}>
            <Link href={`${cat.uri}`}>
              <a className="flex cursor-pointer flex-row  text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">
                <div>
                  <SvgtoReact
                    className="pr-2"
                    name={cat.name.toLowerCase()}
                    height={20}
                  />
                </div>

                <p className="overflow-hidden overflow-ellipsis">{cat.name}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}