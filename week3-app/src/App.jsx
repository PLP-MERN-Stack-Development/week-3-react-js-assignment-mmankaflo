import Header from './components/Header'
import './index.css'

function App() {
  return (
    <div className="bg-background min-h-screen text-primary font-sans transition-all duration-300">
      <Header />

      <main className="p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4 animate-fade-in">Welcome to Your Week 3 React App</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-xl text-center">
          This app is styled with Tailwind CSS, features smooth animations, and uses a clean blue-and-white theme.
        </p>

        <button className="bg-accent text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary hover:scale-105 transform transition duration-300 ease-in-out">
          Click Me
        </button>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <FeatureCard title="Reusable Components" description="Build modular UI elements with props and hooks." />
          <FeatureCard title="API Integration" description="Fetch and display live data from external sources." />
        </div>
      </main>
    </div>
  )
}

const FeatureCard = ({ title, description }) => (
  <div className="bg-white border border-blue-100 rounded-lg p-4 shadow-md hover:shadow-xl transition duration-300">
    <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
)

export default App


