// ── Renders the portfolio from PORTFOLIO data object ──

document.addEventListener('DOMContentLoaded', () => {
  const d = PORTFOLIO;

  // Title
  document.title = `${d.name} — ${d.title}`;

  // Nav
  document.getElementById('nav-logo').textContent = d.name;

  // Hero
  const heroEyebrow = document.getElementById('hero-eyebrow');
  if (heroEyebrow) heroEyebrow.textContent = d.heroEyebrow;
  
  const heroTagline = document.getElementById('hero-tagline');
  if (heroTagline) heroTagline.innerHTML = `${d.tagline}<br/><em>${d.taglineEmphasis}</em>`;
  
  const heroDesc = document.getElementById('hero-desc');
  if (heroDesc) heroDesc.textContent = d.heroDescription;

  // Glance card
  const glanceContainer = document.getElementById('glance-stats');
  glanceContainer.innerHTML = d.glance.map(g =>
    `<div class="hc-stat">
       <span class="hc-key">${g.label}</span>
       <span class="hc-val">${g.value}</span>
     </div>`
  ).join('');

  const pillsContainer = document.getElementById('glance-pills');
  pillsContainer.innerHTML = d.glancePills.map(p =>
    `<span class="hc-pill">${p}</span>`
  ).join('');

  // Skills
  const skillsTitle = document.getElementById('skills-title');
  if (skillsTitle) skillsTitle.innerHTML = `${d.skillsSectionTitle}<br/><em>${d.skillsSectionEmphasis}</em>`;
  
  const skillsDesc = document.getElementById('skills-desc');
  if (skillsDesc) skillsDesc.textContent = d.skillsSectionDesc;

  const skillsGrid = document.getElementById('skills-grid');
  skillsGrid.innerHTML = d.skills.map((s, i) =>
    `<div class="skill-block">
       <div class="skill-num">0${i + 1}</div>
       <h3>${s.title}</h3>
       <p>${s.description}</p>
       <div class="tag-list">
         ${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}
       </div>
     </div>`
  ).join('');

  // AI Projects
  const aiTimeline = document.getElementById('ai-timeline');
  if (aiTimeline && d.aiProjects) {
    aiTimeline.innerHTML = d.aiProjects.map(p =>
      `<div class="tl-row">
         <div class="tl-period">${p.period}</div>
         <div>
           <div class="tl-co">${p.title}</div>
           <div class="tl-title">${p.domain}</div>
           <ul class="tl-points">
             ${p.points.map(pt => `<li>${pt}</li>`).join('')}
           </ul>
         </div>
       </div>`
    ).join('');
  }

  // Experience
  const expTitle = document.getElementById('exp-title');
  if (expTitle) expTitle.innerHTML = `${d.experienceSectionTitle}<br/><em>${d.experienceSectionEmphasis}</em>`;

  const timeline = document.getElementById('timeline');
  timeline.innerHTML = d.experience.map(e =>
    `<div class="tl-row">
       <div class="tl-period">${e.period.join('<br/>')}</div>
       <div>
         <div class="tl-co">${e.company}</div>
         <div class="tl-title">${e.role}</div>
         <ul class="tl-points">
           ${e.points.map(p => `<li>${p}</li>`).join('')}
         </ul>
       </div>
     </div>`
  ).join('');

  // Projects
  const projTitle = document.getElementById('proj-title');
  if (projTitle) projTitle.innerHTML = `${d.projectsSectionTitle}<br/><em>${d.projectsSectionEmphasis}</em>`;
  
  const projDesc = document.getElementById('proj-desc');
  if (projDesc) projDesc.textContent = d.projectsSectionDesc;

  const projGrid = document.getElementById('projects-grid');
  projGrid.innerHTML = d.projects.map(p =>
    `<div class="project-card">
       <div class="pc-top">
         <span class="pc-badge">${p.badge}</span>
         <span class="pc-glyph">${p.glyph}</span>
       </div>
       <div class="pc-body">
         <h3>${p.title}</h3>
         <p>${p.description}</p>
         <div class="pc-stack">
           ${p.stack.map(s => `<span>${s}</span>`).join('')}
         </div>
       </div>
     </div>`
  ).join('');

  // Certifications
  const certsTitle = document.getElementById('certs-title');
  if (certsTitle) certsTitle.innerHTML = `${d.certsSectionTitle}<br/><em>${d.certsSectionEmphasis}</em>`;

  const certsGrid = document.getElementById('certs-grid');
  certsGrid.innerHTML = d.certifications.map(c =>
    `<div class="cert-row">
       <div>
         <h4>${c.title}</h4>
         <p>${c.issuer}</p>
       </div>
       <span class="cert-badge">${c.status}</span>
     </div>`
  ).join('');

  // Contact
  const contactHeading = document.getElementById('contact-heading');
  if (contactHeading) contactHeading.innerHTML = `${d.contactHeadline}<br/><em style="color:#555">${d.contactEmphasis}</em>`;
  
  const contactDesc = document.getElementById('contact-desc');
  if (contactDesc) contactDesc.textContent = d.contactDescription;
  
  const contactEmail = document.getElementById('contact-email');
  if (contactEmail) contactEmail.href = `mailto:${d.email}`;
  
  const contactWhatsapp = document.getElementById('contact-whatsapp');
  if (contactWhatsapp) contactWhatsapp.href = `https://wa.me/${d.whatsapp.replace('+', '')}`;
  
  const contactLinkedin = document.getElementById('contact-linkedin');
  if (contactLinkedin) contactLinkedin.href = d.linkedin;
  
  const contactCv = document.getElementById('contact-cv');
  if (contactCv) contactCv.href = d.cvLink;

  // Footer
  const footerCopy = document.getElementById('footer-copy');
  if (footerCopy) footerCopy.textContent = `© ${d.footerYear} ${d.name}`;
  
  const footerTag = document.getElementById('footer-tag');
  if (footerTag) footerTag.textContent = d.footerTagline;

  // ── Scroll reveal animations ──
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(
          () => e.target.classList.add('visible'),
          parseInt(e.target.dataset.delay) || 0
        );
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  document.querySelectorAll('.tl-row, .project-card').forEach((el, i) => {
    el.dataset.delay = (i % 3) * 120;
    io.observe(el);
  });
});
