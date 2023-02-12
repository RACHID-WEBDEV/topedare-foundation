import React from 'react'
import SectionSubTitle from './SectionSubTitle';

const Subcribe = () => {
  return (
    <section className="px-4 relative py-16">
      <div className="container">
        <div className=" flex items-center justify-center">
          <SectionSubTitle className="text-center " subTitle=" Let makes a difference in the lives of others" />
        </div>

        <p className="text-gray-600 text-center ">
          Join our mailing list  subcribe for our upcoming events
        </p>

        <div className="mx-auto mt-7 max-w-md text-center">
          <form className="relative">
            <input type="email" placeholder="Enter your email address" className=" outline-none focus:border-gray-600 border-gray-400 w-full rounded-full border py-3 px-4 dark:text-white dark:placeholder-white" />
            <button className="hover:bg-tdf-blue-100  bg-tdf-blue-50 absolute top-2 right-2 rounded-full px-6 py-2 text-sm text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Subcribe