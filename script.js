async function loadData() {
  alert('hi')
  // Load all JSONs
  const [studentsRes, teachersRes, experienceRes] = await Promise.all([  
    fetch('data/experience.json')
  ]);

  const [ experiences] = await Promise.all([
    experienceRes.json()
  ]);

  // Populate Experience
  const expContainer = document.getElementById('experience-timeline');
  experiences.forEach(exp => {
    console.log(exp.company)
    const block = document.createElement('div');
    block.className = 'timeline__block';
    block.innerHTML = `
      <div class="timeline__bullet"></div>
      <div class="timeline__header">
        <h4 class="timeline__title">${exp.company}</h4>
        <h5 class="timeline__meta">${exp.role}</h5>
        <p class="timeline__timeframe">${exp.startDate} - ${exp.endDate}</p>
      </div>
      <div class="timeline__desc">
        <p>${exp.descriptions}</p>
      </div>
    `;
    expContainer.appendChild(block);
  });
}

loadData();
