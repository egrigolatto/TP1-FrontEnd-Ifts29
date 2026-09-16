window.AppPages = window.AppPages || {};

window.AppPages.initSkillsPage = function initSkillsPage() {
  const { teamMembers } = window.AppData;
  const { getMemberById, renderMenuButtons, renderPartyList } = window.AppUI;

  const page = document.getElementById("skills-page");
  const subtitle = document.getElementById("skills-page-subtitle");

  if (!page || !subtitle) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const selectedMemberId = params.get("member") || "";
  const activeMember = getMemberById(teamMembers, selectedMemberId);

  subtitle.textContent = `Integrante activo: ${activeMember.name} - Clase ${activeMember.className}`;

  page.innerHTML = `
    <div class="skills-row-1">
      <section class="window panel-main" id="skills-party-panel"></section>
      <aside class="window panel-menu" aria-label="Menu de habilidades">
        <h2 class="window-title">Menu</h2>
        <div class="menu-buttons" id="skills-menu"></div>
      </aside>
    </div>

    <section class="window skills-row-2" aria-label="Listado de habilidades">
      <h2 class="window-title">Lista de Habilidades</h2>
      <ul class="skills-list" id="skills-list"></ul>
    </section>

    <section class="window skills-row-3" aria-label="Descripcion de habilidad">
      <h3 class="window-title">Descripcion</h3>
      <p class="description-text" id="skill-description"></p>
      <a class="back-link" href="index.html">Volver al menu principal</a>
    </section>
  `;

  const partyPanel = document.getElementById("skills-party-panel");
  const menuPanel = document.getElementById("skills-menu");
  const skillsList = document.getElementById("skills-list");
  const description = document.getElementById("skill-description");

  if (!partyPanel || !menuPanel || !skillsList || !description) {
    return;
  }

  let highlightedSkillIndex = 0;

  const renderSkills = () => {
    const currentMember = getMemberById(teamMembers, params.get("member") || "");

    skillsList.innerHTML = "";
    currentMember.skills.forEach((skill, index) => {
      const li = document.createElement("li");
      li.className = "skill-item";

      if (index === highlightedSkillIndex) {
        li.classList.add("is-highlighted");
      }

      li.innerHTML = `
        <p class="skill-name">${skill.name}</p>
        <p class="skill-tags">${skill.tags}</p>
      `;

      li.addEventListener("click", () => {
        highlightedSkillIndex = index;
        renderSkills();
      });

      skillsList.appendChild(li);
    });

    const activeSkill = currentMember.skills[highlightedSkillIndex];
    description.textContent = activeSkill?.description ?? "Sin descripcion disponible.";
    subtitle.textContent = `Integrante activo: ${currentMember.name} - Clase ${currentMember.className}`;
  };

  const renderTopSection = () => {
    const selectedId = params.get("member") || activeMember.id;

    renderPartyList(partyPanel, teamMembers, {
      selectedId,
      selectable: true,
      onMemberClick: (member) => {
        params.set("member", member.id);
        highlightedSkillIndex = 0;
        window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
        renderTopSection();
        renderSkills();
      }
    });

    renderMenuButtons(menuPanel, [{ id: "personal", label: "Personal" }], "personal", () => {
      highlightedSkillIndex = 0;
      renderSkills();
    });
  };

  renderTopSection();
  renderSkills();
};
