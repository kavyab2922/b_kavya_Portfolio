import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Phone, MapPin, Linkedin, Download, Code, Database, Cloud, Award, Briefcase, GraduationCap, User, FolderOpen, Calendar, ArrowRight, Shield, Link2, Package, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "AWS Security Monitoring System",
      description: "Comprehensive security monitoring system integrating AWS CloudWatch, CloudTrail, and GuardDuty to detect and respond to threats. Implemented IAM policy validation and automated alerts.",
      tech: ["AWS CloudWatch", "AWS CloudTrail", "AWS GuardDuty", "Java", "AWS Lambda", "REST API"],
      github: "https://github.com/kavyab2922/AWS_SECURITY_MONITORING_SYSTEM",
      icon: Shield,
      gradient: "from-orange-400 to-red-500",
      features: ["Real-time threat detection", "IAM policy validation", "Automated incident response"]
    },
    {
      title: "Fake Product Identification System",
      description: "Blockchain-based system for product authenticity verification, combating counterfeit goods with secure API communication and enhanced supply chain transparency.",
      tech: ["React", "Blockchain", "Java", "SQL", "REST API"],
      github: "https://github.com/kavyab2922/Fake-product-Identification-using-blockchain",
      icon: Link2,
      gradient: "from-green-400 to-emerald-500",
      features: ["Blockchain verification", "Supply chain transparency", "Counterfeit prevention"]
    },
    {
      title: "Inventory Management System",
      description: "Full-stack inventory management application with React frontend and Spring Boot backend. Deployed on GoDaddy with Cloudflare Tunnel integration.",
      tech: ["React Vite", "Spring Boot", "PostgreSQL", "REST API", "Tailwind CSS", "Cloudflare"],
      demo: "#",
      icon: Package,
      gradient: "from-blue-400 to-purple-500",
      features: ["Stock management", "Multi-tenant support", "Payment integration"]
    }
  ];

  const skills = {
    "Programming": {
      items: ["Java", "JavaScript", "SQL"],
      icon: Code,
      color: "text-blue-500"
    },
    "Frameworks": {
      items: ["Spring Boot", "ReactJS", "REST APIs"],
      icon: Database,
      color: "text-green-500"
    },
    "Tools": {
      items: ["IntelliJ IDEA", "VS Code", "Git & GitHub", "Postman", "Maven", "Swagger"],
      icon: Cloud,
      color: "text-purple-500"
    },
    "Cloud & DB": {
      items: ["AWS", "MySQL", "PostgreSQL", "Lambda"],
      icon: Cloud,
      color: "text-orange-500"
    }
  };

  const experience = {
    title: "Software Engineer Intern",
    company: "Smaatix India Private Limited",
    location: "Bengaluru",
    duration: "April 2025 - Present",
    responsibilities: [
      "Developing end-to-end web applications using SpringBoot, ReactJS, and MySQL",
      "Designed and deployed RESTful APIs improving performance and scalability",
      "Collaborated in Agile teams delivering features in sprints",
      "Leveraged Git and GitHub for version control and collaboration"
    ]
  };

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Science and Engineering",
      school: "M S Ramaiah University of Applied Sciences",
      location: "Bangalore, Karnataka",
      duration: "2021 - 2025",
      grade: "CGPA: 8.0/10",
      status: "current"
    },
    {
      degree: "Pre University College",
      school: "Narayana PU College",
      location: "Bangalore, Karnataka",
      duration: "2020 - 2021",
      grade: "84.8%"
    },
    {
      degree: "High School (CBSE)",
      school: "Kendriya Vidyalaya",
      location: "Kolar, Karnataka",
      duration: "2018 - 2019",
      grade: "72.6%"
    }
  ];

  const FloatingElements = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );

  const NavigationMenu = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              BK
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              B Kavya
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {[
              { id: 'about', label: 'About', icon: User },
              { id: 'projects', label: 'Projects', icon: FolderOpen },
              { id: 'experience', label: 'Experience', icon: Briefcase },
              { id: 'education', label: 'Education', icon: GraduationCap }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <Icon size={16} />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {[
                { id: 'about', label: 'About', icon: User },
                { id: 'projects', label: 'Projects', icon: FolderOpen },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'education', label: 'Education', icon: GraduationCap }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveTab(id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <Icon size={16} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HeroSection = () => (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      <FloatingElements />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div 
          className="transform transition-all duration-1000"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold shadow-2xl">
              BK
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            B Kavya
          </h1>
          
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Full Stack Developer & Software Engineer
          </p>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Passionate about creating innovative solutions with modern technologies.
            Currently building scalable web applications and cloud-based systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setActiveTab('projects')}
              className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>View My Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex space-x-4">
              <a 
                href="mailto:bkavyashree2003@gmail.com"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://github.com/kavyab2922"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/b-kavya-044b4b288/"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/70" />
      </div>
    </div>
  );

  const AboutTab = () => (
    <div className="space-y-12">
      {/* Profile Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold">
              BK
            </div>
            <h2 className="text-2xl font-bold mb-2">B Kavya</h2>
            <p className="text-purple-100 mb-6">B.Tech in Information Science & Engineering</p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Mail size={16} />
                <span>bkavyashree2003@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone size={16} />
                <span>+91 8050769822</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin size={16} />
                <span>Bengaluru, Karnataka</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <a 
                href="#"
                className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a motivated and detail-oriented B.Tech graduate in Information Science and Engineering with hands-on experience in full-stack development, scalable web applications, and backend API design.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Proficient in Java, SQL, Spring Boot, and ReactJS, with a strong foundation in data structures, algorithms, and object-oriented programming. I'm passionate about solving real-world problems and developing secure, efficient software solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently seeking an entry-level Full Stack Developer or Software Engineer role to contribute to innovative teams and impactful projects.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="text-yellow-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">Certification</h3>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-semibold text-gray-800">Machine Learning Specialization</h4>
              <p className="text-purple-600 font-medium">Stanford University (Coursera)</p>
              <p className="text-gray-500 text-sm">2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, { items, icon: Icon, color }]) => (
            <div key={category} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Icon className={`${color} bg-gray-50 p-2 rounded-lg`} size={32} />
                <h3 className="font-semibold text-gray-800">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium hover:from-purple-200 hover:to-pink-200 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectsTab = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in full-stack development, cloud technologies, and innovative problem-solving.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
            >
              <div className="grid lg:grid-cols-3 gap-0">
                <div className={`lg:col-span-1 bg-gradient-to-br ${project.gradient} p-8 flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <Icon size={64} className="mb-4 relative z-10" />
                  <h3 className="text-xl font-bold text-center relative z-10">{project.title}</h3>
                  <div className="absolute top-4 right-4 opacity-20">
                    <Icon size={120} />
                  </div>
                </div>
                
                <div className="lg:col-span-2 p-8">
                  <div className="mb-6">
                    <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-sm">{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const ExperienceTab = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Professional Experience
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          My journey in software development and the experiences that have shaped my technical expertise.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
        
        <div className="relative pl-12 md:pl-20">
          <div className="absolute left-2 md:left-6 w-4 h-4 bg-purple-500 rounded-full shadow-lg transform -translate-x-1/2"></div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{experience.title}</h3>
                <p className="text-purple-600 font-semibold text-lg">{experience.company}</p>
                <div className="flex items-center space-x-4 text-gray-500 mt-1">
                  <span className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{experience.duration}</span>
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Current
                </span>
              </div>
            </div>
            
            <div className="space-y-3">
              {experience.responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 leading-relaxed">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const EducationTab = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Education
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          My academic journey and educational achievements that built the foundation for my technical career.
        </p>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden ${
              edu.status === 'current' ? 'ring-2 ring-purple-200' : ''
            }`}
          >
            <div className={`h-2 bg-gradient-to-r ${
              edu.status === 'current' ? 'from-purple-500 to-pink-500' : 'from-gray-300 to-gray-400'
            }`}></div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                  {edu.field && (
                    <p className="text-purple-600 font-semibold">{edu.field}</p>
                  )}
                  <p className="text-gray-600 font-medium">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.location}</p>
                </div>
                
                <div className="mt-4 md:mt-0 text-right">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full font-semibold mb-2">
                    {edu.grade}
                  </div>
                  <p className="text-gray-500 text-sm">{edu.duration}</p>
                  {edu.status === 'current' && (
                    <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium mt-1">
                      Current
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const tabComponents = {
    about: AboutTab,
    projects: ProjectsTab,
    experience: ExperienceTab,
    education: EducationTab
  };

  const ActiveComponent = tabComponents[activeTab];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationMenu />
      <HeroSection />
      
      <div className="relative bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <ActiveComponent />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
            <p className="text-gray-300 mb-6">
              I'm always open to discussing new opportunities and innovative projects.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:bkavyashree2003@gmail.com"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com/kavyab2922"
                className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/b-kavya-044b4b288/"
                className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2025 B Kavya. Built with React and ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
