import Button from './components/Button'

function App() {
  return (
    <div className="min-h-screen bg-neutralLight p-12">
      {/* Typography Test */}
      <div className="mb-16">
        <h1 className="text-primary mb-4">Rock Your Body</h1>
        <h2 className="text-neutralDark mb-4">Heading Level 2</h2>
        <h3 className="text-neutralDark mb-4">Heading Level 3</h3>
        <p className="text-lg mb-4">
          Fascial release and movement patterns that transform how you feel.
        </p>
        <p className="text-base text-neutralDark/80">
          This is body text using Source Sans Pro. It should feel clean, 
          readable, and professional without being sterile.
        </p>
      </div>

      {/* Color Palette Test */}
      <div className="mb-16">
        <h3 className="mb-6">Color Palette</h3>
        <div className="grid grid-cols-5 gap-4">
          <div className="text-center">
            <div className="h-24 bg-primary rounded-lg mb-2"></div>
            <p className="text-sm">Primary</p>
          </div>
          <div className="text-center">
            <div className="h-24 bg-secondary rounded-lg mb-2"></div>
            <p className="text-sm">Secondary</p>
          </div>
          <div className="text-center">
            <div className="h-24 bg-accent rounded-lg mb-2"></div>
            <p className="text-sm">Accent</p>
          </div>
          <div className="text-center">
            <div className="h-24 bg-neutralLight border border-neutralDark/20 rounded-lg mb-2"></div>
            <p className="text-sm">Light</p>
          </div>
          <div className="text-center">
            <div className="h-24 bg-neutralDark rounded-lg mb-2"></div>
            <p className="text-sm">Dark</p>
          </div>
        </div>
      </div>

      {/* Button System Test */}
      <div className="mb-16">
        <h3 className="mb-6">Button System</h3>
        
        <div className="space-y-6">
          <div className="space-x-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="accent">Accent Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
          
          <div className="space-x-4">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
          
          <div>
            <Button disabled>Disabled Button</Button>
          </div>
        </div>
      </div>

      {/* Sample Chat Bubble */}
      <div className="max-w-2xl">
        <h3 className="mb-6">Chat Bubble Preview</h3>
        <div className="space-y-4">
          <div className="flex justify-end">
            <div className="bg-accent text-white rounded-2xl rounded-tr-sm px-6 py-3 max-w-[70%]">
              What brings you here today?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-white text-neutralDark rounded-2xl rounded-tl-sm px-6 py-3 max-w-[70%] shadow-sm">
              I'm interested in learning about structural integration.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
