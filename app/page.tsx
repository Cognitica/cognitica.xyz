import CogniticaLogo from "@/src/icons/cogniticia-logo";
import { Button } from "@/src/ui/button";
import { ArrowRight, FlaskConical, Cpu, Braces } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Experimental AI
              <br />
              <span className="gradient-text">Beyond Boundaries</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
              Cognitica pushes the frontiers of artificial intelligence with
              experimental products that challenge conventional thinking and
              explore new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Explore our lab
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="mb-6">
                <FlaskConical className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Experimental Models</h3>
              <p className="text-gray-400 mb-4">
                Access cutting-edge AI models still in research phase. Test
                capabilities beyond what&apos;s commercially available.
              </p>
              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="bg-gray-800 rounded-md p-4 text-xs font-mono text-gray-300">
                  <pre>{`const result = await cognitica.experimental.run({
  model: "neural-diffusion-v3",
  input: conceptDescription
})`}</pre>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="mb-6">
                <Cpu className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Research Sandbox</h3>
              <p className="text-gray-400 mb-4">
                A safe environment to experiment with emerging AI capabilities
                and prototype novel applications.
              </p>
              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="bg-gray-800 rounded-md p-4 text-xs font-mono text-gray-300">
                  <pre>{`// Create a new sandbox environment
const sandbox = cognitica.createSandbox({
  resources: ["gpu-cluster", "dataset-access"],
  safetyGuards: true
})`}</pre>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <div className="mb-6">
                <Braces className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Open Research API</h3>
              <p className="text-gray-400 mb-4">
                Integrate experimental AI capabilities directly into your
                applications with our flexible API.
              </p>
              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="bg-gray-800 rounded-md p-4 text-xs font-mono text-gray-300">
                  <pre>{`// Access experimental capabilities
fetch('https://api.cognitica.ai/v1/experimental', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer ${"{token}"}' },
  body: JSON.stringify({ query })
})`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Experimental AI Products
            </h2>
            <p className="text-lg text-gray-400">
              Explore our suite of cutting-edge AI experiments pushing the
              boundaries of what's possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product cards - simplified to 3 for faster processing */}
            <div className="bg-black p-8 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-3">NeuroSynth</h3>
              <p className="text-gray-400 mb-4">
                An experimental neural network that generates novel concepts by
                combining disparate knowledge domains.
              </p>
              <Button variant="link" className="text-blue-400 p-0">
                Try the beta <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-black p-8 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-3">Quantum Thought</h3>
              <p className="text-gray-400 mb-4">
                Exploring quantum computing principles to create AI models that
                can process multiple states simultaneously.
              </p>
              <Button variant="link" className="text-blue-400 p-0">
                Join research preview <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-black p-8 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-3">Creative Catalyst</h3>
              <p className="text-gray-400 mb-4">
                An AI system designed to enhance human creativity through
                collaborative ideation and unexpected connections.
              </p>
              <Button variant="link" className="text-blue-400 p-0">
                Request access <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join the AI experimentation community
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Get early access to our experimental AI products and be part of
              shaping the future of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Apply for early access
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                Subscribe to updates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - simplified */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <div>
            <div className="flex items-center gap-2 mx-auto mb-4 w-[160px]">
              <CogniticaLogo size={40} />
              <p className="text-white font-bold text-2xl">Cognitica</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            {
              "Creating experimental AI products that push the boundaries of what's possible."
            }
          </p>
          <div className="border-t border-gray-800 mt-8 pt-8 text-gray-500">
            <p className="text-sm">
              © {new Date().getFullYear()} Cognitica. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
