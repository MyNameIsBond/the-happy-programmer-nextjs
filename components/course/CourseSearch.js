import SvgToReact from '../Svgtoreact'
import { useState } from 'react'
export default function CourseSearch({ placeholder, allslugs, setCourses }) {
  const [sluglist, setSluglist] = useState(allslugs)

  const searchfun = (e) => {
    if (e.target.value !== '') {
      setCourses(searchSlugs(e.target.value))
    } else {
      setCourses(allslugs)
    }
  }

  const searchSlugs = (value) =>
    allslugs.filter((slug) => slug.name.includes(value))

  return (
    <div>
      <div className="relative flex h-8">
        <div className="absolute inset-y-0 left-0 ml-3 flex items-center">
          <SvgToReact
            name="search"
            className="stroke-current text-gray-900 dark:text-gray-50"
            height={12}
            width={12}
          />
        </div>
        <input
          maxlength="30"
          onChange={searchfun}
          placeholder="search"
          className="outline-none dark:group-focusfocus:border-gray-50 rounded border border-gray-200 bg-gray-100 p-1 pl-8 text-sm placeholder-gray-300 hover:border-gray-900 focus:border-gray-900 group-focus:border-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:focus:border-gray-50"
        />
      </div>
    </div>
  )
}
