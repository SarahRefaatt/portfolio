
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern online store ",
      type: "Website",
      image: "/api/placeholder/400/300",
      tech: ["Next.js", "Node.js", "SQL"]
    },
    {
      id: 2,
      title: "Customer Support Chatbot",
      description: "AI chatbot handling 10,000+ monthly inquiries",
      type: "Chatbot",
      image: "/api/placeholder/400/300",
      tech: ["Python", "TensorFlow", "React"]
    },
    {
      id: 3,
      title: "Healthcare Portal",
      description: "Secure patient management system with real-time chat",
      type: "Website + Chatbot",
      image: "/api/placeholder/400/300",
      tech: ["TypeScript", "Firebase", "WebRTC"]
    }
  ];

  const services = [
    {
      icon: "💻",
      title: "Full-Stack Development",
      description: "Scalable web applications with modern frameworks and best practices"
    },
    {
      icon: "🤖",
      title: "AI Solutions",
      description: "Intelligent systems and chatbots that automate and enhance user experiences"
    },
    {
      icon: "🎓",
      title: "Technical Mentoring",
      description: "Computer science education and guidance for aspiring developers"
    }
  ];

  const skills = [
    { name: "React/Next.js", level: 90 },
    { name: "Python", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "Node.js", level: 82 },
    { name: "SQL", level: 80 },
    { name: "Machine Learning", level: 75 }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md z-50 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-zinc-900 dark:text-white">
                Sarah Refaat
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
                About
              </Link>
              <Link href="#services" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#projects" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Let's Talk
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                <span></span> Software Engineer & Educator
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight">
                Crafting Digital{" "}
                <span className="text-blue-600 dark:text-blue-400">Excellence</span>{" "}
                Through Code
              </h1>

              <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Software Engineer and Teaching Assistant at Cairo University specializing in
                full-stack development, AI solutions, and creating intuitive user experiences
                that drive real business results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Link href="#projects"> View My Work
                  </Link>

                  <span>→</span>
                </button>
                <button className="border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white px-8 py-3 rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                 <a href="/Sarah-Mahmoud-Resume.pdf" download>
  Download CV
</a>

                </button> 
              

              </div>

              <div className="flex items-center gap-8 pt-4">
                {/* <div className="text-center">
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">50+</div>
                  <div className="text-zinc-600 dark:text-zinc-400">Projects</div>
                </div> */}
                {/* <div className="text-center">
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">98%</div>
                  <div className="text-zinc-600 dark:text-zinc-400">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">1+</div>
                  <div className="text-zinc-600 dark:text-zinc-400">Years Experience</div>
                </div> */}
              </div>
            </div>

            <div className="relative group">
              {/* soft glow on hover */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 blur opacity-0 group-hover:opacity-40 transition duration-500" />

              {/* main card */}
              <div className="relative bg-white rounded-2xl p-10 aspect-square flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300">

                {/* icon / badge */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                {/* headline */}
                <div>
                  <h3 className="text-slate-900 text-3xl font-extrabold leading-tight mb-2">
                    Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Meets</span> Results
                  </h3>
                  <p className="text-slate-600">
                    Practical solutions engineered to accelerate growth and reduce cost.
                  </p>
                </div>


                <button className="mt-6 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold
                       hover:scale-105 active:scale-100 transition-transform duration-200 shadow-md hover:shadow-blue-500/50">
                  Book a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-zinc-50 dark:bg-zinc-800/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                About Me
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                As a Software Engineer and Teaching Assistant at Cairo University, I bridge the gap
                between academic theory and real-world application. My passion lies in creating
                digital solutions that are not only technically robust but also deliver exceptional
                user experiences.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                I specialize in full-stack development with modern technologies, AI integration,
                and mentoring the next generation of developers. Every project is an opportunity
                to solve complex problems with elegant, scalable solutions.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Core Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <span className="text-blue-600 dark:text-blue-400 text-lg">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white">Full-Stack Development</h4>
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                      End-to-end web applications with React, Next.js, Node.js, and modern databases
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                    <span className="text-green-600 dark:text-green-400 text-lg">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white">AI & Machine Learning</h4>
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                      Intelligent systems, chatbots, and data-driven solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                    <span className="text-purple-600 dark:text-purple-400 text-lg">🎓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white">Education & Mentoring</h4>
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                      Computer science instruction and career guidance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Services
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-zinc-50 dark:bg-zinc-800/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Real-world solutions delivering measurable impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white opacity-90">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <p className="font-semibold">{project.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1 group">
                    View Case Study
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-zinc-900 dark:bg-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Whether you need a custom web application, AI solution, or technical guidance,
            I'm here to help bring your vision to life with clean code and exceptional design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              Start a Project
              <span>→</span>
            </button>
            <button className="bg-white text-zinc-900 px-8 py-3 rounded-lg font-medium hover:bg-zinc-100 transition-colors">
              Schedule Consultation
            </button>
          </div>


        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
           
            <div className="flex space-x-6">
              <Link href="https://www.linkedin.com/in/sarah-mahmoud-636324215/" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                LinkedIn
              </Link>
              <Link href="https://github.com/SarahRefaatt" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                GitHub
              </Link>
              {/* <Link href="sarah.mahmoudd24@gmail.com" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                Email
              </Link> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}