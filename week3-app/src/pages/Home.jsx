import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Loader from '../components/Loader'

const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.example.com/items')
      .then(res => res.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
  }, [])

  return (
    <div className="p-6 bg-background min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-4">Cool Dashboard</h1>
      {loading ? <Loader /> : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map(item => (
            <Card key={item.id} title={item.title} description={item.description} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
