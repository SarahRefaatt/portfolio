"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openContactModal, setOpenContactModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern online store ",
      type: "Website",
      image: "/sakina.png",
      tech: ["Next.js", "Node.js", "SQL"],
            link  :"https://sakina-seven.vercel.app/"

    },
    {
      id: 2,
      title: "Customer Support Chatbot",
      description: "AI chatbot handling 10,000+ monthly inquiries",
      type: "Chatbot",
      image: "/chatbot.png",
      tech: ["Python", "TensorFlow", "React"],
            link  :"https://chat-bot-tau-eight.vercel.app/"
    },
    {
      id: 3,
      title: "AI-Powered Automation Maintenance",
      description: "Streamline your business operations with intelligent automation. Monitor, maintain, and optimize your systems in real-time.",
      type: "Website",
      image: "/tumaticy.png",
      tech: ["React", "java script"],
      link:"https://tumaticy.vercel.app/"

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
    { name: "Machine Learning", level: 75 },
    { name: "GitHub", level: 75 },
    { name: "Java SpringBoot", level: 75 },
    { name: "Restful APIs", level: 90}


  ];
return (
  <div className="min-h-screen bg-black text-zinc-200 font-sans tracking-tight">

    {/* NAVIGATION */}
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/70 border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white tracking-wide hover:text-blue-400 transition">Sarah Refaat</h1>

        <div className="hidden md:flex space-x-8">
          {["Home","About","Services","Projects","Contact"].map((item)=>(
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-zinc-400 hover:text-white transition-colors">{item}</a>
          ))}
        </div>

        {/* <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg font-medium">
          Let's Talk
        </button> */}
        <button 
  onClick={() => setOpenContactModal(true)}
  className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg font-medium"
>
  Let's Talk
</button>

      </div>
    </nav>

    {/* HERO */}
    <section id="home" className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <div className="space-y-6">
          <span className="px-4 py-2 text-sm bg-blue-600/10 text-blue-400 rounded-full">
           AI & Software Engineer • Educator
          </span>

          <h1 className="text-5xl font-extrabold text-white leading-tight">
            Crafting Digital Experiences with 
            <span className="text-blue-500"> Precision</span> & Creativity
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
           AI & Software Engineer | ML, Chatbots, Web Development.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 transition px-7 py-3 rounded-lg text-white font-medium">
              View Projects →
            </a>
            <a download href="/Sarah-Mahmoud-Resume.pdf" 
              className="border border-zinc-700 hover:bg-zinc-800 transition px-7 py-3 rounded-lg">
              Download CV
            </a>
          </div>
        </div>

        {/* Profile card visual */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-blue-600 blur-lg opacity-0 group-hover:opacity-40 transition duration-500 rounded-2xl"></div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 shadow-xl relative flex flex-col justify-between h-[420px]">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-2 text-white">Ideas → Reality</h2>
              <p className="text-zinc-400">High-impact solutions designed for performance & growth.</p>
            </div>
 <a 
          href="mailto:sarah.mahmoudd24@gmail.com"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition px-6 py-3 rounded-lg font-semibold text-white"
        >
  Book a Consultation        </a>
            {/* <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition px-6 py-3 rounded-lg font-semibold text-white">
              Book a Consultation
            </button> */}
          </div>
        </div>
      </div>
    </section>


    {/* ABOUT */}
    <section id="about" className="py-20 px-6 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          {/* <p className="text-zinc-300 leading-relaxed mb-6">
            I build modern web applications and AI-powered tools as a Software Engineer & Teaching Assistant at Cairo University.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Passionate about education, clean code, and building innovative user-centric products.
          </p> */}
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                 As a Software Engineer and Teaching Assistant at Cairo University, I bridge the gap
                 between academic theory and real-world application. My passion lies in creating
                 digital solutions that are not only technically robust but also deliver exceptional
                user experiences.
               </p>
               <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
            I help businesses turn ideas into smart, scalable solutions using AI and modern web technologies. With hands-on experience in machine learning, backend systems, and full-stack development, I focus on building practical products that deliver real results.

Built ML models to predict platform occupancy using passenger flow and weather data
Developed AI chatbots using Llama 3.1 (Node.js + Python)
Integrated AI services and automated workflows using n8n and RESTful APIs
Strong web development background (Next.js, full-stack apps)

I’m also a Teaching Assistant in Machine Learning at Cairo University, which keeps me deeply grounded in both theory and real-world application.
               </p>

          <div className="mt-8 grid grid-cols-2 gap-5">
            {skills.map(skill=>(
              <div key={skill.name}>
                <div className="flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full mt-2">
                  <div className="h-full bg-blue-600 rounded-full" style={{width:`${skill.level}%`}} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-6">Core Expertise</h3>
          <div className="space-y-5 text-zinc-300">
            <p>⚡ Full-Stack Development (Next.js, Node.js)</p>
            <p>🤖 AI & Machine Learning Solutions</p>
            <p>🎓 Teaching & Mentorship Programs</p>
          </div>
        </div>
      </div>
    </section>


    {/* SERVICES */}
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
        <p className="text-zinc-400 mb-14">Building products that scale beautifully.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s)=>(
            <div key={s.title} className="bg-zinc-900 border border-zinc-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition p-8 rounded-2xl">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{s.title}</h3>
              <p className="text-zinc-400">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* PROJECTS */}
    <section id="projects" className="py-20 px-6 bg-zinc-900/60">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-3">Featured Projects</h2>
        <p className="text-zinc-400">Some things I built with passion.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map(p=>(
          <a key={p.id} href={p.link} target="_blank" className="group block bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition">
            <div className="aspect-video relative bg-zinc-800">
              <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition">{p.title}</h3>
              <p className="text-zinc-400 text-sm mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tech.map(t=>(
                  <span key={t} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300">{t}</span>
                ))}
              </div>
              <span className="text-blue-400 font-medium">View Case Study →</span>
            </div>
          </a>
        ))}
      </div>
    </section>


    {/* CONTACT */}
    <section id="contact" className="py-20 text-center bg-black">
      <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
      <p className="text-zinc-400 max-w-lg mx-auto mb-8">Reach out — let's build something exceptional.</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium text-white">Start Project →</button>
        {/* <button className="px-8 py-3 rounded-lg border border-zinc-700 hover:bg-zinc-900 transition">Book Call</button> */}
         <a 
          href="mailto:sarah.mahmoudd24@gmail.com"
          className="px-8 py-3 rounded-lg border border-zinc-700 hover:bg-zinc-900 transition"
        >
          Send Email 
        </a>
     
      </div>
    </section>

    {/* CONTACT MODAL */}
{openContactModal && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[999]">
    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 w-[90%] max-w-md text-center shadow-xl">

      <h2 className="text-2xl font-bold text-white mb-4">Contact Me</h2>
      <p className="text-zinc-400 mb-6">Choose how you'd like to reach out</p>

      <div className="flex flex-col gap-4">

        {/* Email */}
        <a 
          href="mailto:sarah.mahmoudd24@gmail.com"
          className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium transition"
        >
          Send Email 
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/201099013212"   // change to your phone number
          target="_blank"
          className="w-full border border-zinc-600 hover:bg-zinc-800 px-6 py-3 rounded-lg font-medium text-zinc-200 transition"
        >
          WhatsApp Message 
        </a>

      </div>

      {/* CLOSE BUTTON */}
      <button 
        onClick={() => setOpenContactModal(false)}
        className="mt-6 text-zinc-400 hover:text-white transition"
      >
        Close
      </button>
    </div>
  </div>
)}


    {/* FOOTER */}
    <footer className="py-8 border-t border-zinc-800 text-center">
      <div className="flex justify-center gap-6 text-zinc-500">
        <a href="https://www.linkedin.com/in/sarah-mahmoud-636324215/" className="hover:text-white">LinkedIn</a>
        <a href="https://github.com/SarahRefaatt" className="hover:text-white">GitHub</a>
      </div>
    </footer>

  </div>
);


}