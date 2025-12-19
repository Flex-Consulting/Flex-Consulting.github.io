import { ExternalLink, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function OurWork() {
  const projects = [
    {
      title: 'Public Cloud Management',
      client: 'Global Burden of Animal Diseases',
      client_url: 'https://gbadske.org',
      category: 'Cloud Architecture',
      description: 'Architected a scalable cloud infrastructure for APIs, web applications, and data modeling.',
      results: [
        '45% reduction in infrastructure costs',
        '25+ applications deployed',
        '100% Infrastructure as Code',
        '99.9% uptime achieved'
      ],
      tech: ['AWS', 'CloudFormation', 'Github Actions', 'Docker', 'FastAPI'],
      color: 'orange'
    },
    {
      title: 'Website Redesign & SEO Improvements',
      client: 'Going Ductless Ltd.',
      client_url: 'https://goingductless.ca',
      category: 'Website Development',
      description: 'Redesigned and optimized the company website to improve user experience and search engine rankings.',
      results: [
        '78% reduction in infrastructure costs',
        '50% increase in organic traffic',
        'Top 3 ranking for key search terms',
        'Improved company presence online'
      ],
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Google Analytics', 'Google Search Console'],
      color: 'cyan'
    },
    {
      title: 'XML Data Transformation API',
      client: 'Bucknell University',
      category: 'API Integration',
      description: 'Developed an API to transform and validate XML data for academic document processing.',
      results: [
        'Enabled seamless XML data transformation',
        'Improved data validation accuracy'
      ],
      tech: ['Python', 'FastAPI', 'XML', 'XSLT'],
      color: 'green'
    },
    {
      title: 'Course Content Delivery Solution',
      client: 'TN Consulting',
      category: 'Software Solutions',
      description: 'Built a chat bot integrated with Discord to deliver course content and quizzes to clients.',
      results: [
        'Automated content delivery',
        'Enabled interactive learning via Discord',
      ],
      tech: ['Node.js', 'Discord API', 'MongoDB'],
      color: 'violet'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'from-cyan-400 to-cyan-600 group-hover:shadow-cyan-500/50',
      orange: 'from-orange-400 to-orange-600 group-hover:shadow-orange-500/50',
      green: 'from-green-400 to-green-600 group-hover:shadow-green-500/50',
      violet: 'from-violet-400 to-violet-600 group-hover:shadow-violet-500/50',
      blue: 'from-blue-400 to-blue-600 group-hover:shadow-blue-500/50',
      red: 'from-red-400 to-red-600 group-hover:shadow-red-500/50'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <>
      <SEO 
        title="Our Work - Software Development & Cloud Projects Portfolio"
        description="View our successful software development projects, cloud infrastructure solutions, and API integrations from our Guelph-based team. Real results for clients including GBADs, Bucknell University, and more."
        canonical="/our-work/"
      />
      <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Work Speaks
              <span className="block text-cyan-400">For Itself</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Real projects, real results. See how our software consultants in Guelph have helped businesses transform their software systems, cloud infrastructure, and custom integrations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden group hover:shadow-2xl transition-all"
              >
                <div className="grid lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full">
                        {project.category}
                      </span>
                      <span className="text-slate-400 text-sm">
                        {project.client_url ? (
                          <a href={project.client_url}>{project.client}</a>
                        ) : (
                          project.client
                        )}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      {project.title}
                    </h2>

                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="font-semibold text-slate-900 mb-3 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                        Key Results
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-8 lg:p-10 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${getColorClasses(project.color)} shadow-xl group-hover:scale-110 transition-transform flex items-center justify-center`}>
                        <ExternalLink className="w-16 h-16 text-white" />
                      </div>
                      <button className="inline-flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all">
                        View Case Study
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              By The Numbers
            </h2>
            <p className="text-xl text-slate-600">
              Results that matter to your business
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">50+</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Projects</h3>
              <p className="text-slate-600">Successfully delivered</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">40%</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Cost Savings</h3>
              <p className="text-slate-600">Average reduction</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">99.9%</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Uptime</h3>
              <p className="text-slate-600">Across all systems</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-20 bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">24/7</h3>
              <p className="text-slate-600">Support available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
