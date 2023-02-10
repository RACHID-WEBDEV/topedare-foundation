import React from 'react'
import { Fade } from 'react-reveal';
// import SectionSubTitle from './SectionSubTitle';
import useSWR from 'swr';
import parse from 'html-react-parser';
const _config = require("../../config.json")

const Subcribe = () => {

  const { data, error } = useSWR(`${_config.REACT_APP_BASE_URL}public/content/components?user=${_config.REACT_APP_USER_lOGIN_ID}`)

  if (error) return console.log(error)

  if (!data) {
    return <h1>Loading...</h1>
  }
  const subscribe = data?.data?.components?.find(({ slug }) => {
    return slug === "subscribe"
  })
  return (
    <section className="px-4 relative py-16">
      <div className="container">
        {subscribe && <Fade top>
          {parse(subscribe?.description)}
        </Fade>}

        <Fade bottom>
          <div className="mx-auto mt-7 max-w-md text-center">
            <form className="relative">
              <input type="email" placeholder="Enter your email address" className=" outline-none focus:border-gray-600 border-gray-400 w-full rounded-full border py-3 px-4 dark:text-white dark:placeholder-white" />
              <button className="hover:bg-tdf-blue-100  bg-tdf-blue-50 absolute top-2 right-2 rounded-full px-6 py-2 text-sm text-white">
                Subscribe
              </button>
            </form>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Subcribe