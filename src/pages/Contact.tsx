import { Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {

  return (
    <>
      <SEO 
        title="Contact Us - Software Consultants & Developers in Guelph"
        description="Contact Flex Consulting for custom software development, cloud solutions, and API integrations. Software consultants based in Guelph, Ontario. Email: info@flexconsulting.ca | Phone: +1 (289) 221-4738"
        canonical="/contact/"
      />
      <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Start
              <span className="block text-cyan-400">A Conversation</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Ready to transform your software systems and cloud infrastructure? Get in touch with our Guelph-based software consultants and let's discuss how we can help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Whether you have a question about our services, pricing, or anything else, our team is ready to answer.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a href="mailto:info@flexconsulting.ca" className="text-slate-600 hover:text-cyan-600 transition-colors">
                      info@flexconsulting.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <a href="tel:+12892214738" className="text-slate-600 hover:text-orange-600 transition-colors">
                      +1 (289) 221-4738
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office</h3>
                    <p className="text-slate-600">
                      Guelph, Ontario<br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-slate-300">
                  <p className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span className="font-semibold text-white">Emergencies Only</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-200 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Ready to Get Started?</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Send us an email and we'll get back to you within 24 hours to discuss your project.
                </p>
                <a
                  href="mailto:info@flexconsulting.ca?subject=Project Inquiry"
                  className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Email Us Now
                </a>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <div className="p-6 bg-slate-50 border-b border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900">Find Us</h2>
                  <p className="text-slate-600 mt-2">Guelph, Ontario, Canada</p>
                </div>
                <div className="relative h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92584.83577940935!2d-80.32487768671875!3d43.54593345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9ad88e7a9915%3A0x5037b28c7231d60!2sGuelph%2C%20ON!5e0!3m2!1sen!2sca!4v1734536400000!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Guelph, Ontario Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-2">How quickly can you start a project?</h3>
              <p className="text-slate-600">
                We can typically kick off new projects within 1-2 weeks, depending on scope and team availability.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Do you offer ongoing support?</h3>
              <p className="text-slate-600">
                Yes, we provide 24/7 support packages and managed services for all our cloud solutions.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-2">What cloud platforms do you work with?</h3>
              <p className="text-slate-600">
                We specialize in AWS, Azure, and Google Cloud Platform, with certified experts in each.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-2">How do you price your services?</h3>
              <p className="text-slate-600">
                We offer flexible pricing including fixed-price projects, time & materials, and retainer arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
