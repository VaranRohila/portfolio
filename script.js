// Data
const timelineData = [
    {
        year: "2023 - Present",
        title: "Senior Data Scientist",
        company: "SageSure (Jersey City, NJ)",
        desc: "Leading innovation in computer vision for post-hurricane damage detection and LLM-powered structured data extraction pipelines."
    },
    {
        year: "2022",
        title: "Data Science Intern",
        company: "Bombora (New York, NY)",
        desc: "Developed BERT-based topic hierarchy classification models and improved intent scoring algorithms."
    },
    {
        year: "2022",
        title: "Master of Science in Applied AI",
        company: "Stevens Institute of Technology",
        desc: "Specialized in Machine Learning, Deep Learning, and NLP. Provost's Master's Fellow."
    },
    {
        year: "2021",
        title: "B.Tech in Computer Science",
        company: "NIT Hamirpur",
        desc: "Graduated with Honors. Vice President of ISTE Student Chapter."
    },
    {
        year: "2019",
        title: "Research Engineer Intern",
        company: "ezDI (Ahmedabad, India)",
        desc: "Research on Named Entity Recognition (NER) corpus expansion and production API development."
    },
    {
        year: "2018",
        title: "Machine Learning Intern",
        company: "Dyausmed Healthcare (Ghaziabad, India)",
        desc: "Analyzed healthcare market data and implemented market segmentation strategies."
    }
];

const projectsData = [
    // Agentic AI
    {
        title: "MediAgent Orchestrator",
        category: "Agentic AI",
        desc: "Autonomous AI Healthcare Triage & Documentation System using RAG and Multi-Agent Architecture.",
        tech: ["LangChain", "OpenAI", "ChromaDB", "Streamlit"],
        link: "https://github.com/VaranRohila/mediagent"
    },
    {
        title: "FinSight Analyst",
        category: "Agentic AI",
        desc: "Autonomous AI Investment Research Agent performing quantitative analysis and news sentiment tracking.",
        tech: ["GPT-4o", "Pandas", "Matplotlib", "Financial APIs"],
        link: "https://github.com/VaranRohila/finsight"
    },
    {
        title: "BrandPulse Campaign Manager",
        category: "Agentic AI",
        desc: "End-to-end automated marketing suite simulating a creative agency with specialized agents.",
        tech: ["Multi-Agent", "DALL-E 3", "Python", "Automation"],
        link: "https://github.com/VaranRohila/brandpulse"
    },
    {
        title: "Llama-2 Insurance Bot",
        category: "Agentic AI",
        desc: "Secure Slack bot using Llama-2 for answering complex insurance queries for internal teams.",
        tech: ["Llama-2", "Slack API", "LLM", "Security"]
    },
    {
        title: "DocuStream RAG Pipeline",
        category: "Agentic AI",
        desc: "High-throughput asynchronous document ingestion engine for Enterprise RAG systems.",
        tech: ["FastAPI", "AsyncIO", "Vector DB", "Docker"],
        link: "https://github.com/VaranRohila/docustream"
    },
    {
        title: "ModelWatch Eval",
        category: "Agentic AI",
        desc: "Comprehensive LLM Evaluation & Experiment Tracking System for faithfulness and relevance metrics.",
        tech: ["MLOps", "Eval", "Python", "Dashboard"],
        link: "https://github.com/VaranRohila/modelwatch"
    },
    {
        title: "ServeScale Gateway",
        category: "Agentic AI",
        desc: "High-Performance AI Gateway with Semantic Caching & Rate Limiting for production LLM deployment.",
        tech: ["Redis", "Semantic Cache", "API Gateway", "Security"],
        link: "https://github.com/VaranRohila/serve-scale"
    },
    // Computer Vision
    {
        title: "Roof Age Prediction",
        category: "CV",
        desc: "Trained CV model on 50,000+ inspection images to predict roof age for insurance underwriting.",
        tech: ["PyTorch", "CNN", "Computer Vision", "SageSure"]
    },
    {
        title: "ReCOV-101",
        category: "CV",
        desc: "Novel framework for COVID-19 detection from CT scans with 94.9% accuracy using ResNet-101.",
        tech: ["ResNet-101", "Medical Imaging", "Deep Learning"],
        link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7903153/pdf/main.pdf"
    },
    {
        title: "Distracted Driver Detection",
        category: "CV",
        desc: "Real-time detection system using CNNs to identify distracted driver behaviors from dashboard cameras.",
        tech: ["CNN", "VGG-16", "Real-time", "Safety"],
        link: "https://www.igi-global.com/chapter/distracted-driver-detection-system-using-deep-learning-technique/279906"
    },
    // NLP
    {
        title: "Multimodal Fake News Detection",
        category: "NLP",
        desc: "Innovated MEIBS method for detecting fake news using both image and text modalities (Master's Thesis).",
        tech: ["Transformers", "Multimodal", "Research", "NLP"]
    },
    {
        title: "Topic Hierarchy Construction",
        category: "NLP",
        desc: "Built hierarchical topic models using BERT and agglomerative clustering handling 10k+ topics.",
        tech: ["BERT", "Clustering", "NLP", "Bombora"]
    },
    {
        title: "NER Corpus Expansion",
        category: "NLP",
        desc: "Semantic expansion of Named Entity Recognition corpora using noun phrase similarity.",
        tech: ["NER", "Spacy", "Research", "ezDI"]
    },
    // Data Science
    {
        title: "Fasal.ai",
        category: "Data Science",
        desc: "ML-based agricultural tool forecasting rainfall and crop yield to maximize farmer profits.",
        tech: ["XGBoost", "Forecasting", "Data Science"],
        link: "https://github.com/VaranRohila/Fasal.ai"
    }
];

// Typing Effect
const textToType = ["Intelligent Agents", "Scalable ML Systems", "Computer Vision Solutions", "the Future of AI"];
let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing-text');

function typeEffect() {
    const currentText = textToType[typeIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000); // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typeIndex = (typeIndex + 1) % textToType.length;
        setTimeout(typeEffect, 500); // Pause before next word
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

// Render Timeline
function renderTimeline() {
    const container = document.getElementById('timeline-container');
    timelineData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-year">${item.year}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <div class="timeline-company">${item.company}</div>
                <p style="margin-top:10px; font-size:0.9rem; color:#aaa;">${item.desc}</p>
            </div>
        `;
        container.appendChild(div);
    });
}

// Render Projects
function renderProjects(filter = 'all') {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; // Clear existing

    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === filter);

    filteredProjects.forEach((project, index) => {
        const techHtml = project.tech.map(t => `<span>${t}</span>`).join('');
        const linkHtml = project.link 
            ? `<a href="${project.link}" target="_blank" class="external-link" title="View Project"><i class="fas fa-external-link-alt"></i></a>` 
            : '';

        const div = document.createElement('div');
        div.className = 'project-card';
        div.style.animationDelay = `${index * 0.1}s`; // Stagger animation
        div.innerHTML = `
            <div class="project-header">
                <i class="far fa-folder folder-icon"></i>
                <div class="project-links">
                    <span style="font-size:0.8rem; color:var(--accent-primary); border:1px solid var(--accent-primary); padding:2px 8px; border-radius:12px; margin-right: 10px;">${project.category}</span>
                    ${linkHtml}
                </div>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.desc}</p>
            <div class="project-tech">
                ${techHtml}
            </div>
        `;
        container.appendChild(div);
    });
}

// Filter Logic
function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            buttons.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            renderProjects(filterValue);
        });
    });
}

// Navigation Highlighter
function initNavHighlighter() {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
}

// Background Particles
function initParticles() {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.directionX = (Math.random() * 0.4) - 0.2;
            this.directionY = (Math.random() * 0.4) - 0.2;
            this.size = Math.random() * 2 + 1;
            this.color = '#00f3ff';
        }

        update() {
            if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
            if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
            this.x += this.directionX;
            this.y += this.directionY;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = 0.3;
            ctx.fill();
        }
    }

    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 15000;
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            // Connect particles
            for (let j = i; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = '#00f3ff';
                    ctx.globalAlpha = 1 - (distance / 100);
                    ctx.lineWidth = 1;
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    init();
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
    renderTimeline();
    renderProjects();
    initFilters();
    initNavHighlighter();
    initParticles();
});
