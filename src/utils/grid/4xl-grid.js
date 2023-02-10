import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Fourgrid = () => {

  const [datas, setDatass] = useState("");
  useEffect(() => {
    loadData()
  }, [])
  // Object.values()
  const loadData = async () => {
    // const response = await axios.get(`https://hubit-core.herokuapp.com/client/api/1.0/public/content/components?user=633c095dd4d70251093c3c61`)

    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}public/content/components?user=${process.env.REACT_APP_USER_lOGIN_ID}`)
    if (response.status === 200) {
      const output = response.data.data.components.map(({ description }) => {
        return description
      })
      setDatass(output)
    } else {
      console.log('Message =>', response.message)
      // toast.error('Something went wrong')
    }
  }

  return (
    <>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="rounded border-gray-900  dark:border-gray-700 border-dashed
     border-2 h-24" >
          <h1 className="text-5xl text-red-600">  What up</h1>

        </div>
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-900  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="rounded border-gray-900  dark:border-gray-700 border-dashed border-2 h-24" />
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-900  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="rounded border-gray-900  dark:border-gray-700 border-dashed border-2 h-24" />
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-900  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="rounded border-gray-900  dark:border-gray-700 border-dashed border-2 h-24" />
      </div>



      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />

        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />

        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />

        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
      </div>
    </>
  )
}

export default Fourgrid