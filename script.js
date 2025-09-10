// script.js

// Data: major milestones in computer history with required fields.
// Each entry: id, name, year, description (2-3 sentences), impact (3-5 sentences), eraTag, readMore (optional link)
const milestones = [
  {
    id: 'pascaline',
    name: 'Pascaline (Mechanical Calculator)',
    year: 1642,
    description: "Blaise Pascal's Pascaline was one of the earliest mechanical calculators capable of addition and subtraction using geared wheels. It automated basic arithmetic that previously required manual calculation with pen and paper or counting tools.",
    impact: "The Pascaline reduced human calculation time and error for arithmetic tasks, paving the way for mechanical computation. While not high-throughput, it demonstrated that mechanical systems could reliably perform arithmetic operations which inspired future mechanical computing designs. Its concrete performance improvement was in reducing error rates and operator time for repeated arithmetic tasks compared to manual computation.",
    era: "pre1900",
    readMore: "https://en.wikipedia.org/wiki/Pascaline"
  },
  {
    id: 'analytical-engine',
    name: "Babbage's Analytical Engine",
    year: 1837,
    description: "Charles Babbage's Analytical Engine was a proposed mechanical general-purpose computer with separate memory and a processing unit and using punch cards for programs. Although never fully built in his lifetime, it laid out many principles of modern computing architecture.",
    impact: "The Analytical Engine introduced the core idea of programmability and separation of data and instructions, giving a conceptual performance benefit: once automated, sequences of tasks could run without reconfiguration by humans. Its influence was conceptual — the model enabled later electronic machines to be designed for faster, repeatable computation, which ultimately increased throughput and lowered per-operation costs compared to manual processes.",
    era: "pre1900",
    readMore: "https://en.wikipedia.org/wiki/Analytical_Engine"
  },
  {
    id: 'eniac',
    name: 'ENIAC (Electronic Numerical Integrator and Computer)',
    year: 1945,
    description: "ENIAC was among the first large-scale electronic digital computers, using vacuum tubes to perform calculations at electronic speeds. It automated complex numerical tasks (like ballistic calculations) that previously took many human-hours or slower electromechanical machines.",
    impact: "ENIAC produced orders-of-magnitude speedup over manual or electromechanical computation: run times for large numerical simulations dropped from days or weeks to hours. Using vacuum tubes allowed per-operation latency to fall dramatically and throughput to increase, enabling more complex problems to be solved in practical time. Its electronic architecture set the stage for subsequent architectures emphasizing clocked sequential logic and parallel pipelines for performance gains.",
    era: "1900-1949",
    readMore: "https://en.wikipedia.org/wiki/ENIAC"
  },
  {
    id: 'transistor',
    name: 'Transistor',
    year: 1947,
    description: "The transistor replaced vacuum tubes as the fundamental electronic switching device. It was smaller, more reliable, used far less power, and could be mass-produced.",
    impact: "Transistors dramatically reduced size and power consumption, allowing computers to become smaller, faster, and more reliable. Switching speeds rose and mean-time-between-failures improved drastically compared to vacuum tubes, enabling longer continuous computation and denser circuits. In concrete terms, transistorized machines achieved higher clock rates and enabled the miniaturization required for real-world deployment and scaling of performance through integration.",
    era: "1900-1949",
    readMore: "https://en.wikipedia.org/wiki/Transistor"
  },
  {
    id: 'ic',
    name: 'Integrated Circuit (IC)',
    year: 1958,
    description: "Integrated circuits combined multiple transistors and passive components onto a single semiconductor substrate, greatly increasing component density. They replaced discrete transistor circuits that required more space and wiring.",
    impact: "ICs enabled exponential increases in circuit density (Moore’s Law era), increasing computing performance by allowing more logic on a chip, reducing interconnection delays and improving energy efficiency. By lowering cost per transistor and shortening signal paths, ICs directly improved clock speeds and parallelism on chips, enabling multi-functional processors rather than single-purpose hardware.",
    era: "1950-1969",
    readMore: "https://en.wikipedia.org/wiki/Integrated_circuit"
  },
  {
    id: 'microprocessor',
    name: 'Microprocessor (Intel 4004)',
    year: 1971,
    description: "The Intel 4004 was the first commercially available microprocessor — a complete CPU on a single chip. It integrated arithmetic, control, and registers that traditionally required multiple chips.",
    impact: "Putting a CPU on a single chip reduced latency between components and lowered manufacturing cost, enabling inexpensive, small computers. Performance improved through faster instruction execution and easier replication of designs; it also allowed rapid scaling of system performance by increasing clock speeds and instruction-level improvements. Microprocessors made personal computing and embedded systems practical, massively increasing computational availability per dollar.",
    era: "1970-1989",
    readMore: "https://en.wikipedia.org/wiki/Intel_4004"
  },
  {
    id: 'personal-computer',
    name: 'Personal Computer (Altair / Apple II era)',
    year: 1975,
    description: "The personal computer brought computing to individuals and small offices, replacing access-limited mainframes and minicomputers for many tasks. Machines like the Altair and Apple II offered affordable, interactive computing.",
    impact: "Personal computers democratized computing resources and created a huge new demand for software, which in turn drove performance optimizations in both hardware and software. Rather than centralized batch workloads, many concurrent interactive workloads required improved I/O responsiveness and faster single-user throughput. The PC era commoditized performance gains and encouraged rapid iteration by competitive markets, accelerating CPU and memory improvements.",
    era: "1970-1989",
    readMore: "https://en.wikipedia.org/wiki/Home_computer"
  },
  {
    id: 'gui',
    name: 'Graphical User Interface & Mouse (Xerox Alto / Macintosh)',
    year: 1984,
    description: "GUIs made computers usable via windows, icons, and pointing devices, replacing text-only command-line interfaces for many users. The mouse enabled direct manipulation of on-screen objects.",
    impact: "GUIs shifted performance priorities: responsiveness and frame update rates became important to perceived performance. Systems needed faster graphics primitives, more memory for buffering, and efficient event handling to maintain fluid UX. While a GUI can add overhead, it improved user productivity and enabled more complex, interactive software that leveraged available CPU and GPU improvements.",
    era: "1970-1989",
    readMore: "https://en.wikipedia.org/wiki/Graphical_user_interface"
  },
  {
    id: 'gpu',
    name: 'GPU (Graphics Processing Unit)',
    year: 1999,
    description: "GPUs are specialized processors optimized for highly parallel arithmetic operations originally targeted at graphics workloads. They supplement general-purpose CPUs for data-parallel tasks.",
    impact: "GPUs increased throughput for parallel workloads by orders of magnitude compared to CPUs for certain classes of problems (e.g., matrix math, rendering). This allowed real-time 3D graphics and later accelerated machine learning and scientific computations. Concretely, throughput for parallel vector operations rose dramatically (many cores executing simultaneously), enabling tasks that were previously impractical or too slow.",
    era: "1990-2009",
    readMore: "https://en.wikipedia.org/wiki/Graphics_processing_unit"
  },
  {
    id: 'internet',
    name: 'Internet & TCP/IP',
    year: 1983,
    description: "The adoption of TCP/IP as a standard protocol allowed disparate networks to interconnect, forming the modern Internet. It replaced many incompatible networking protocols and enabled the global exchange of data.",
    impact: "TCP/IP enabled scale and reliability improvements for distributed computing by standardizing packetized communications and routing, greatly increasing the effective throughput and reach of connected systems. Performance impact includes enabling client-server models, remote computation, and distributed resource utilization, shifting performance considerations to network latency, bandwidth, and scalability of services. The networked model also enabled offloading and distributed workloads across machines.",
    era: "1970-1989",
    readMore: "https://en.wikipedia.org/wiki/Internet_protocol_suite"
  },
  {
    id: 'worldwideweb',
    name: 'World Wide Web',
    year: 1991,
    description: "Tim Berners-Lee’s World Wide Web popularized hypertext and gave a universal, linkable resource model on top of the Internet. Browsers replaced more specialized access methods like Gopher or FTP for many information tasks.",
    impact: "The Web dramatically increased access to information and shifted many workflows online, changing where computation and storage occur. Performance implications included the need for scalable servers, caching, and optimized protocols (e.g., HTTP/2, CDN adoption) to reduce latency and increase throughput for content delivery. Concrete improvements included global caching and CDNs that reduced page load times from seconds to fractions of a second for many end users.",
    era: "1990-2009",
    readMore: "https://en.wikipedia.org/wiki/World_Wide_Web"
  },
  {
    id: 'smartphone',
    name: 'Smartphone (iPhone)',
    year: 2007,
    description: "The smartphone combined powerful mobile processors, compact sensors, and touch interfaces into a single consumer device. It replaced many single-purpose devices (cameras, phones, MP3 players) with a portable general-purpose computer.",
    impact: "Smartphones increased the importance of energy-efficient high-performance processors and integrated radios, pushing advances in mobile SoC design and power/thermal management. Performance improvements included better single-thread responsiveness, efficient multimedia acceleration, and integrated cellular networking leading to low-latency always-connected experiences. The net result is far more compute per watt in pocket-sized devices enabling continuous background services and rich interactive apps.",
    era: "2000-2009",
    readMore: "https://en.wikipedia.org/wiki/Smartphone"
  },
  {
    id: 'cloud',
    name: 'Cloud Computing (IaaS / SaaS)',
    year: 2006,
    description: "Cloud computing provided on-demand compute and storage services over the Internet, replacing the need for organizations to provision all hardware locally. It offered scalable resources billed as services.",
    impact: "Cloud computing improved effective computing performance by enabling rapid scaling (elasticity) — systems could provision many instances to increase throughput or use specialized hardware (GPUs, FPGAs) on demand. This changed cost-performance tradeoffs: instead of large capital expense to scale, organizations could pay for incremental capacity, improving utilization and reducing time-to-solution for bursty workloads. Concrete performance benefits include horizontal scalability and low-latency autoscaling for peak demands.",
    era: "2010-",
    readMore: "https://en.wikipedia.org/wiki/Cloud_computing"
  }
];

// Utilities
const cardsContainer = document.getElementById('cardsContainer');
const searchInput = document.getElementById('searchInput');
const eraFilter = document.getElementById('eraFilter');
const sortSelect = document.getElementById('sortSelect');
const countBadge = document.getElementById('countBadge');
const randomBtn = document.getElementById('randomBtn');

const detailModal = new bootstrap.Modal(document.getElementById('detailModal'));
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
const modalDesc = document.getElementById('modalDesc');
const modalImpact = document.getElementById('modalImpact');
const modalReadMore = document.getElementById('modalReadMore');

function eraMatchesFilter(m, filter){
  if(filter === 'all') return true;
  return m.era === filter;
}

function renderCards(data){
  cardsContainer.innerHTML = '';
  if(!data.length){
    cardsContainer.innerHTML = `<div class="col-12"><div class="alert alert-warning mb-0">No milestones found.</div></div>`;
    countBadge.textContent = 0;
    return;
  }
  countBadge.textContent = data.length;
  data.forEach(m => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    col.innerHTML = `
      <article class="card card-milestone h-100">
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <div>
              <div class="milestone-title">${m.name}</div>
              <div class="kicker small mt-1">${m.description.split('.').slice(0,1).join('.')}. <span class="milestone-year ms-2">${m.year}</span></div>
            </div>
            <div class="text-end">
              <div class="badge-era">${m.era.replace('-', ' ').toUpperCase()}</div>
            </div>
          </div>

          <p class="small-desc flex-grow-1">${m.description}</p>

          <div class="mt-3">
            <button class="btn btn-sm btn-outline-primary view-btn" data-id="${m.id}">View Performance Impact</button>
            <a class="btn btn-sm btn-primary ms-2" href="${m.readMore || '#'}" target="_blank" rel="noopener">Read more</a>
          </div>
        </div>
      </article>
    `;
    cardsContainer.appendChild(col);
  });

  // attach listeners
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      showDetail(id);
    });
  });
}

function showDetail(id){
  const m = milestones.find(x => x.id === id);
  if(!m) return;
  modalTitle.textContent = m.name;
  modalYear.textContent = `Year: ${m.year}`;
  modalDesc.textContent = m.description;
  modalImpact.textContent = m.impact;
  modalReadMore.href = m.readMore || '#';
  detailModal.show();
}

function applyFilters(){
  const q = searchInput.value.trim().toLowerCase();
  const era = eraFilter.value;
  const sort = sortSelect.value;

  let filtered = milestones.filter(m => {
    // era filter
    if(!eraMatchesFilter(m, era)) return false;
    // search: check name, description, impact, year
    if(!q) return true;
    return (
      m.name.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.impact.toLowerCase().includes(q) ||
      String(m.year).includes(q)
    );
  });

  // sorting
  if(sort === 'year-asc') filtered.sort((a,b)=>a.year - b.year);
  else if(sort === 'year-desc') filtered.sort((a,b)=>b.year - a.year);
  else if(sort === 'name-asc') filtered.sort((a,b)=>a.name.localeCompare(b.name));

  renderCards(filtered);
}

// initial render
applyFilters();

// event listeners
searchInput.addEventListener('input', debounce(applyFilters, 180));
eraFilter.addEventListener('change', applyFilters);
sortSelect.addEventListener('change', applyFilters);
randomBtn.addEventListener('click', ()=>{
  const idx = Math.floor(Math.random()*milestones.length);
  showDetail(milestones[idx].id);
});

// utility: debounce to avoid too many renders
function debounce(fn, wait){
  let t;
  return function(...args){
    clearTimeout(t);
    t = setTimeout(()=>fn.apply(this,args), wait);
  }
}
