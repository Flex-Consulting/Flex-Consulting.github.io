import { Users, Target, Zap, Heart, Award, Globe } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  const values = [
    {
      icon: Zap,
      title: 'Agility',
      description: 'We move fast and adapt quickly to deliver value in short iterations.',
      color: 'cyan'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every decision we make is focused on delivering measurable business outcomes.',
      color: 'orange'
    },
    {
      icon: Heart,
      title: 'Client-First',
      description: 'Your success is our success. We treat your projects as our own.',
      color: 'red'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We never compromise on quality and always strive for technical excellence.',
      color: 'green'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Goldman Sachs Engineering Program',
    'JPMorgan Chase Software Engineering Program',
    'UiPath RPA Developer Foundation'
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'from-cyan-400 to-cyan-600',
      orange: 'from-orange-400 to-orange-600',
      red: 'from-red-400 to-red-600',
      green: 'from-green-400 to-green-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <>
      <SEO 
        title="About Us - Software Consultants & Developers in Guelph, Ontario"
        description="Learn about Flex Consulting Solutions Inc., software development and cloud consulting company in Guelph, Ontario. Our team of certified software consultants and cloud architects has delivered 50+ successful projects since 2023."
        canonical="/about/"
      />
      <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About
              <span className="block text-cyan-400">Flex Consulting</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We're a young, dynamic team of software developers and cloud experts in Guelph, passionate about helping businesses leverage modern technology and custom software solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded in 2023, Flex Consulting Solutions Inc. emerged from a simple observation: businesses in Guelph and beyond needed software consultants and cloud experts who were both technically excellent and genuinely agile.
                </p>
                <p>
                  Traditional consulting firms were too slow, too expensive, and too rigid. We knew there was a better way to deliver custom software development and cloud solutions.
                </p>
                <p>
                  Today, as a lean team of certified software developers, cloud architects, and integration specialists based in Guelph, we've delivered 50+ successful projects. We work with companies ranging from fast-growing startups to established enterprises, all looking to modernize their infrastructure and software systems.
                </p>
                <p>
                  Our approach combines deep technical expertise in software development with practical business understanding. We don't just build systems—we build competitive advantages through custom software solutions.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-green-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-slate-50 rounded-xl">
                    <div className="text-4xl font-bold text-cyan-600 mb-2">2023</div>
                    <div className="text-slate-600 font-medium">Founded</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 rounded-xl">
                    <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
                    <div className="text-slate-600 font-medium">Projects</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 rounded-xl">
                    <div className="text-4xl font-bold text-green-600 mb-2">24hr</div>
                    <div className="text-slate-600 font-medium">Response Time</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 rounded-xl">
                    <div className="text-4xl font-bold text-violet-600 mb-2">100%</div>
                    <div className="text-slate-600 font-medium">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(value.color)} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Certifications & Expertise</h2>
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-slate-200">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Globe className="w-16 h-16 text-cyan-400 mb-6" />
              <h2 className="text-4xl font-bold mb-6">Based in Guelph, Serving Everywhere</h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Proudly headquartered in Guelph, Ontario, our software consultants leverage modern cloud technologies and custom software development practices to serve clients across North America and beyond. Our lean, focused team brings deep software development expertise without the overhead of traditional consulting firms.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Being a small, dedicated team of software developers means you work directly with the founders—experienced professionals who are personally invested in your success.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-10 text-center">
              <div className="text-6xl font-bold text-cyan-400 mb-4">🇨🇦</div>
              <div className="text-2xl font-bold text-white mb-2">Guelph, Ontario</div>
              <div className="text-slate-300 mb-6">Canada</div>
              <div className="border-t border-slate-700 pt-6 mt-6">
                <p className="text-slate-300 text-sm">
                  Remote-first approach • Global collaboration • Local roots
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
