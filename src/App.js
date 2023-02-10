import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Header from "./components/global/Header";

import About from "./pages/About";
import Home from "./pages/Home";
import Footer from './components/global/Footer';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Category from './pages/Category';
import BlogDetails from './pages/BlogDetails';
import BlogDetail from './pages/BlogDetail';
import ProjectListing from './pages/ProjectListing';
import { ToastContainer } from 'react-toastify';
import { SWRConfig } from 'swr'
import axios from 'axios'


export const NotFound = () => (
  <section className="mt-20 bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-lg text-center lg:py-16 lg:px-12">
      <svg className="mx-auto mb-4 w-10 h-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z" /></svg>
      <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">Under Constrution</h1 >

      <p className=" text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">
        Unfortunately this site is down for a bit of maintenance right now. But soon we'll be up with a new Amazing. Feature

        kindly check back few days from now. </p>
    </div>
  </section>

)

function App() {
  // const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const fetcher = async (...args) => {
  //   await new Promise((resolve) => setTimeout(resolve, 10_000));
  //   console.log('Message', ...args)
  //   return axios.get(...args).then(res => res.data)

  // }

  const fetcher = (...args) => axios.get(...args).then(res => res.data)

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    <>
      {
        !loading && (
          <SWRConfig value={{ fetcher }}>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/category/:catgory" element={<Category />} />
              <Route path="blog/:slug" element={<BlogDetail />} />
              <Route path="blog-details" element={<BlogDetails />} />
              <Route path="project-listing" element={<ProjectListing />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            {/* Same as */}
            <ToastContainer />

          </SWRConfig>
        )
      }

    </>
  );
}

export default App;
          //   <Route path="teams" element={<Teams />}>
          //   <Route path=":teamId" element={<Team />} />
          //  <Route path="new" element={<NewTeamForm />} />
          //     <Route index element={<LeagueStandings />} />
          //   </Route> 