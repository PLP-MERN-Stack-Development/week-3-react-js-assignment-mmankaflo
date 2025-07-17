const Card = ({ title, description }) => (
  <div className="bg-white shadow-md rounded p-4">
    <h2 className="text-xl font-semibold text-primary">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
)
