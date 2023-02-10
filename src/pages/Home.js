import React from 'react'
import AboutIntro from '../components/section/AboutIntro'
import WhatWeDo from '../components/section/WhatWeDo'
import HeroIntro from '../components/section/HeroIntro'
import Stats from '../components/section/Stats'
// import { PagesHeader } from './../components/section/PagesHeader';
import CTA from '../components/section/CTA'
import Subcribe from '../components/section/Subcribe';
import BlogIntro from '../components/section/BlogIntro'
import Helmets from './Helmet'




const Home = () => {

  return (
    <div className="">
      <Helmets title="Home Page" />
      <HeroIntro />
      <AboutIntro title="About Us" subTitle="We Can Save More Lifes With Your Helping Hand." content="  The Tope Dare Foundation is a charity initiative of Babatope Dare with the primary goal of giving back to the society and helping the less privileged and vulnerable in our communities to alleviate human sufferings and create opportunities for a better life" />
      <WhatWeDo />
      <CTA />
      <Stats />

      <BlogIntro />
      <Subcribe />




      {/* <PagesHeader /> */}





    </div>
  )
}

export default Home

  //  <HeroIntro />
      // <AboutIntro title="About Us" subTitle={data.slice(0, 1)} content={data.slice(1, 2)} statsTitle1={data.slice(2, 3)} statsSubTitle1={data.slice(3, 4)} statsTitle2={data.slice(4, 5)} statsSubTitle2={data.slice(5, 6)} floatStats={data.slice(6, 7)} />

  //     <WhatWeDo title={data.slice(7, 8)} subTitle={data.slice(8, 9)} cat1Title={data.slice(9, 10)} cat1SubTitle={data.slice(10, 11)} cat2Title={data.slice(11, 12)} cat2SubTitle={data.slice(12, 13)} cat3Title={data.slice(13, 14)} cat3SubTitle={data.slice(14, 15)} cat4Title={data.slice(15, 16)} cat4SubTitle={data.slice(16, 17)} />


  //  <AboutIntro title="About Us" subTitle="We Can Save More Lifes With Your Helping Hand." content="The Tope Dare Foundation is a charity initiative of Babatope Dare with the primary goal of giving back to the society and helping the less privileged and vulnerable in our communities to alleviate human suffering and create opportunities for a better life" statsTitle1="82+" statsSubTitle1="Completed Project" statsTitle2="90.7%" statsSubTitle2="Satisfaction Rate" floatStats="We help more than 320+ children every year" />


  // <WhatWeDo title="Spread Love with Donations" subTitle="Here are some of the Categories and Sector we Work regularly, We believe they have a future bright with hope if we assist them"

  // cat1Title="Health"
  // cat1SubTitle="Helping those in need of basic medical health care get and stay healthy for life by teaching good habits, payment of hospital bills, and provision of drugs and equipment."

  // cat2Title="Education"
  // cat2SubTitle="Keeping kids in school through tutoring, computer courses, and financial aid as education serves as a panacea for socio-economics."

  // cat3Title="Employment"
  // cat3SubTitle="Providing an avenue to train unemployed youths with the necessary skills to get jobs and start a career or profession for financial freedom."

  // cat4Title="Empowerment"
  // cat4SubTitle="Promoting empowerment of the unemployed in achieving poverty eradication, social integration, and full employment integration for our youth and women." />
// <CTA />

// <CTA
//         ctaSectionHeading="Become a Volunteer"
//         title="Support and Donate"
//         subTitle="Lets Change The World With Humanity. Your Mercy Can Change Someone’s Life"
//         qoute="Service to others is the rent you pay for your room here on earth."
//         qouteAuthor="Muhammad Ali "
//         volunteerHeading="Make a Difference Today!"
//         volunteerTitle="Become a Volunteer"
//       />