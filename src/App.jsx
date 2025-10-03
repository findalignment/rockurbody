import Hero from './components/Hero'
import ChatInterface from './components/ChatInterface'

function App() {
  return (
    <div className="bg-slate-900 min-h-screen py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Rock Your Body
        </h1>
        <ChatInterface />
      </div>
    </div>
  )
}

export default App
