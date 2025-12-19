import { Cloud, Code, Network, Database, Shield, Zap, CheckCircle, Server, GitBranch } from 'lucide-react';
import SEO from '../components/SEO';

export default function Services() {
  return (
    <>
      <SEO 
        title="Software Development Services - Guelph Cloud & API Experts"
        description="Custom software development, cloud architecture, API integrations, and infrastructure as code services in Guelph. Our software consultants deliver scalable solutions across AWS, Azure, and GCP tailored to your business needs."
        canonical="/services/"
      />
      <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Software Development
              <span className="block text-cyan-400">& Cloud Services</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              From custom software development to cloud architecture and seamless API integrations, our Guelph-based team delivers solutions that scale with your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Public Cloud Solutions</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Transform your infrastructure with enterprise-grade cloud solutions across AWS, Azure, and Google Cloud Platform.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Cloud Architecture Design</h4>
                    <p className="text-slate-600">Scalable, resilient architectures tailored to your business needs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Cloud Migration</h4>
                    <p className="text-slate-600">Seamless migration from on-premise to cloud with zero downtime</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Multi-Cloud Strategy</h4>
                    <p className="text-slate-600">Optimize costs and performance across multiple cloud providers</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Cost Optimization</h4>
                    <p className="text-slate-600">Reduce cloud spend by up to 40% without sacrificing performance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-xl border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">API Integrations</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Connect your systems seamlessly with robust, secure API integrations that power your digital ecosystem.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">REST & GraphQL APIs</h4>
                    <p className="text-slate-600">Modern API development with industry best practices</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Third-Party Integrations</h4>
                    <p className="text-slate-600">Connect with Salesforce, HubSpot, Stripe, and more</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">API Gateway Management</h4>
                    <p className="text-slate-600">Secure, scalable API gateways with rate limiting and auth</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Webhook Implementation</h4>
                    <p className="text-slate-600">Real-time event-driven integrations for instant updates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Network className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Infrastructure as Code</h3>
              <p className="text-slate-600 leading-relaxed">
                Automate infrastructure provisioning with Terraform, CloudFormation, and Pulumi for consistent, repeatable deployments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <GitBranch className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">CI/CD Pipelines</h3>
              <p className="text-slate-600 leading-relaxed">
                Streamline your deployment process with automated testing, building, and deployment pipelines using modern DevOps tools.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <Server className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Containerization</h3>
              <p className="text-slate-600 leading-relaxed">
                Modern application deployment with Docker, Kubernetes, and container orchestration for maximum portability and scalability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Database Solutions</h3>
              <p className="text-slate-600 leading-relaxed">
                Design and optimize database architectures with SQL and NoSQL solutions, ensuring performance and reliability at scale.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Security & Compliance</h3>
              <p className="text-slate-600 leading-relaxed">
                Implement security best practices, compliance frameworks, and monitoring solutions to protect your infrastructure.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Performance Optimization</h3>
              <p className="text-slate-600 leading-relaxed">
                Optimize application and infrastructure performance with monitoring, auto-scaling, and caching strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-slate-300 mb-12">
              A proven methodology that delivers results
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">Discovery</h3>
                <p className="text-slate-300 text-sm">
                  Understand your goals, challenges, and requirements
                </p>
              </div>

              <div className="relative">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Design</h3>
                <p className="text-slate-300 text-sm">
                  Architect the optimal solution for your needs
                </p>
              </div>

              <div className="relative">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Implement</h3>
                <p className="text-slate-300 text-sm">
                  Build and deploy with agile iterations
                </p>
              </div>

              <div className="relative">
                <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-bold text-lg mb-2">Support</h3>
                <p className="text-slate-300 text-sm">
                  Ongoing maintenance and optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
