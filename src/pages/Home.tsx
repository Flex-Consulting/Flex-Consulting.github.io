import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Cloud, Zap, Shield, ArrowRight, Code, Cog, Network } from 'lucide-react';
import SEO from '../components/SEO';
import './Home.css';

export default function Home() {
  const [dbLoad, setDbLoad] = useState(65);
  const [queueLoad, setQueueLoad] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setDbLoad(prev => {
        const change = (Math.random() - 0.5) * 15;
        const newValue = prev + change;
        return Math.max(5, Math.min(98, newValue));
      });
      
      setQueueLoad(prev => {
        const change = (Math.random() - 0.5) * 20;
        const newValue = prev + change;
        return Math.max(5, Math.min(98, newValue));
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const getLoadColor = (percentage: number) => {
    if (percentage > 80) return '#ef4444'; // red
    if (percentage > 60) return '#f97316'; // orange
    if (percentage < 20) return '#ffffff'; // white
    return null; // use default CSS class color
  };

  return (
    <>
      <SEO 
        title="Software Development & Cloud Consulting Guelph"
        description="Leading software consultants in Guelph, Ontario. Expert cloud architecture, custom software development, API integrations, and infrastructure solutions across AWS, Azure, and GCP. Transform your business with our agile development team."
        canonical="/"
      />
      <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">Cloud Solutions That Scale</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Software Development &
                <span className="block text-cyan-400">Cloud Solutions</span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">
                Guelph's trusted software consultants specializing in custom software development, API integrations, and cloud solutions.
                Let us transform your infrastructure into a competitive advantage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-all backdrop-blur-sm"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="cloud-architecture">
                <div className="cloud-architecture-glow"></div>
                
                <div className="cloud-tier pb-2">
                  <div className="api-gateway">
                    <Network className="w-6 h-6 text-white" />
                    <span className="api-gateway-text">API</span>
                  </div>
                </div>

                <div className="connection-line"></div>

                <div className="services-tier">
                  <div className="service-box">
                    <Code className="w-6 h-6 text-orange-400 service-icon" />
                    <div className="service-label">Compute</div>
                  </div>
                  <div className="service-box">
                    <Cloud className="w-6 h-6 text-green-400 service-icon" />
                    <div className="service-label">Storage</div>
                  </div>
                  <div className="service-box">
                    <Cog className="w-6 h-6 text-purple-400 service-icon" />
                    <div className="service-label">Functions</div>
                  </div>
                </div>

                <div className="connection-line"></div>

                <div className="data-tier">
                  <div className="data-box">
                    <Shield className="w-6 h-6 text-cyan-400 data-icon" />
                    <div className="data-label">Database</div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill cyan" 
                        style={{ 
                          width: `${dbLoad}%`, 
                          transition: 'width 0.8s ease-out, background 0.8s ease-out',
                          ...(getLoadColor(dbLoad) && { background: `linear-gradient(90deg, transparent, ${getLoadColor(dbLoad)})` })
                        }}>
                      </div>
                    </div>
                  </div>
                  <div className="data-box">
                    <Zap className="w-6 h-6 text-green-400 data-icon" />
                    <div className="data-label">Queue</div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill green" 
                        style={{ 
                          width: `${queueLoad}%`, 
                          transition: 'width 0.8s ease-out, background 0.8s ease-out',
                          ...(getLoadColor(queueLoad) && { background: `linear-gradient(90deg, transparent, ${getLoadColor(queueLoad)})` })
                        }}>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="floating-dot dot-1"></div>
                <div className="floating-dot dot-2"></div>
                <div className="floating-dot dot-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 mb-4 tracking-wider uppercase">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16">
            <img src="/logo-uofg.png" alt="University of Guelph" className="h-12 object-contain" />
            <img src="/logo-gbads.webp" alt="GBADs" className="h-16 object-contain" />
            <img src="/logo-bucknelluniversity.png" alt="Bucknell University" className="h-12 object-contain" />
            <img src="/logo-cwrc.png" alt="CWRC" className="h-10 object-contain" />
            <img src="/logo-goingductless.webp" alt="Going Ductless" className="h-10 object-contain" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Specialized expertise in cloud infrastructure and modern integrations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 group hover:border-cyan-400">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cloud className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Public Cloud Solutions</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Expert architecture and implementation across AWS, Azure, and GCP. We design scalable,
                cost-effective cloud infrastructure tailored to your needs.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 group hover:border-orange-400">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">API Integrations</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Seamless integration between your systems and third-party services. From REST to GraphQL,
                we connect your ecosystem efficiently.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-200 group hover:border-green-400">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Network className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Infrastructure as Code</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Automate and version control your infrastructure with Terraform, CloudFormation, and modern
                DevOps practices.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Flex Consulting?
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We're not your typical consulting firm. Our agile approach combines technical expertise
                with practical business understanding.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Rapid Delivery</h3>
                    <p className="text-slate-300">
                      Our agile methodology ensures quick iterations and faster time to value.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cog className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                    <p className="text-slate-300">
                      Certified cloud architects and integration specialists with proven track records.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Security First</h3>
                    <p className="text-slate-300">
                      Built-in security and compliance from day one, not as an afterthought.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-green-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                    <div className="text-slate-300">Projects Delivered</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-4xl font-bold text-orange-400 mb-2">99.9%</div>
                    <div className="text-slate-300">Uptime SLA</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-slate-300">Support Available</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                    <div className="text-slate-300">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Cloud Infrastructure?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's discuss how we can help you achieve your goals with modern cloud solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
