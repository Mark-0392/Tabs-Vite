import { useState, useEffect } from 'react'
import Loading from './Loading'
import JobInfo from './JobInfo'
import BtnContainer from './BtnContainer'
const url = 'https://www.course-api.com/react-tabs-project'

const App = () => {
  const [isloading, setisLoading] = useState(true)
  const [tabsData, setTabsData] = useState([])
  const [currentItem, setCurrentItem] = useState(0)
  // console.log(tabsData)
  const fetchData = async () => {
    // setisLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setTabsData(data)
      // console.log(data)
    } catch (error) {
      console.log(error)
    }
    setisLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isloading) {
    return (
      <section className="jobs-center">
        <Loading />
      </section>
    )
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        tabsData={tabsData}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo tabsData={tabsData} currentItem={currentItem} />
    </section>
  )
}
export default App
