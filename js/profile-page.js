window.AppPages = window.AppPages || {};

window.AppPages.initProfilePage = function initProfilePage(memberId) {
  const { teamMembers } = window.AppData;
  const { getMemberById } = window.AppUI;

  const root = document.getElementById("profile-root");
  if (!root) {
    return;
  }

  const member = getMemberById(teamMembers, memberId);
  const ageLabel = member.age === "—" || member.age === "" ? "Edad pendiente" : `${member.age} años`;

  let highlightedSkill = 0;

  const render = () => {
    root.innerHTML = `
      <section class="profile-hero window">
        <img class="profile-avatar" src="${member.avatar}" alt="Avatar de ${member.name}" width="160" height="160" />
        <div class="profile-hero-text">
          <p class="kicker">${member.className}</p>
          <h1>${member.name}</h1>
          <p class="subtitle">${member.city} | ${ageLabel}</p>
          ${
            member.github
              ? `<a class="back-link" href="${member.github}" target="_blank" rel="noopener noreferrer">GitHub</a>`
              : `<p class="helper-text">GitHub: pendiente de completar</p>`
          }
        </div>
      </section>

      <div class="profile-grid">
        <section class="window profile-panel">
          <h2 class="window-title">Habilidades</h2>
          <ul class="skills-list" id="profile-skills"></ul>
          <p class="description-text" id="profile-skill-desc"></p>
        </section>

        <section class="window profile-panel">
          <h2 class="window-title">Peliculas favoritas</h2>
          <ul class="skills-list">
            ${member.movies.map((movie) => `<li class="skill-item"><p class="skill-name">${movie}</p></li>`).join("")}
          </ul>
        </section>

        <section class="window profile-panel">
          <h2 class="window-title">Discos favoritos</h2>
          <ul class="skills-list">
            ${member.albums.map((album) => `<li class="skill-item"><p class="skill-name">${album}</p></li>`).join("")}
          </ul>
        </section>
      </div>

      <nav class="page-nav window profile-nav">
        <a class="back-link" href="index.html">Menu principal</a>
        <a class="back-link" href="index.html#perfiles">Perfiles</a>
        <a class="back-link" href="bitacora.html">Bitacora</a>
      </nav>
    `;

    const skillsList = document.getElementById("profile-skills");
    const skillDesc = document.getElementById("profile-skill-desc");

    member.skills.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "skill-item";
      if (index === highlightedSkill) {
        li.classList.add("is-highlighted");
      }
      li.innerHTML = `
        <p class="skill-name">${item.name}</p>
        <p class="skill-tags">${item.tags}</p>
      `;
      li.addEventListener("click", () => {
        highlightedSkill = index;
        render();
      });
      skillsList.appendChild(li);
    });

    skillDesc.textContent = member.skills[highlightedSkill]?.description || "";
  };

  render();
};

(function bootProfilePage() {
  const root = document.getElementById("profile-root");
  if (!root) {
    return;
  }

  const memberId = root.dataset.member;
  if (!memberId) {
    return;
  }

  window.AppPages.initProfilePage(memberId);
})();
