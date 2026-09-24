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

  const closeAlbumModal = () => {
    const modal = document.querySelector(".album-modal");
    if (modal?.closeOnEscape) {
      document.removeEventListener("keydown", modal.closeOnEscape);
    }
    modal?.remove();
    document.body.classList.remove("modal-open");
  };

  const openAlbumModal = (album) => {
    if (!album.youtubeUrl) {
      return;
    }

    closeAlbumModal();

    const modal = document.createElement("div");
    modal.className = "album-modal";
    modal.innerHTML = `
      <div class="album-modal-content" role="dialog" aria-modal="true" aria-label="Reproductor de ${album.name}">
        <button class="album-modal-close" type="button" aria-label="Cerrar reproductor">&times;</button>
        <iframe
          src="${album.youtubeUrl}"
          title="Reproductor de ${album.name}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    `;

    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.closest(".album-modal-close")) {
        closeAlbumModal();
      }
    });
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        closeAlbumModal();
      }
    };
    modal.closeOnEscape = closeOnEscape;
    document.addEventListener("keydown", closeOnEscape);

    document.body.appendChild(modal);
    document.body.classList.add("modal-open");
  };

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
            ${member.albums
              .map(
                (album, index) => `
                  <li class="skill-item album-item">
                    <p class="skill-name">${album.name}</p>
                    ${album.portada ? `<img class="album-cover${album.youtubeUrl ? " is-clickable" : ""}" data-album-index="${index}" src="${album.portada}" alt="Portada de ${album.name}" loading="lazy" />` : ""}
                  </li>
                `
              )
              .join("")}
          </ul>
        </section>
      </div>
    `;

    const skillsList = document.getElementById("profile-skills");
    const skillDesc = document.getElementById("profile-skill-desc");

    root.querySelectorAll(".album-cover.is-clickable").forEach((cover) => {
      cover.addEventListener("click", () => openAlbumModal(member.albums[cover.dataset.albumIndex]));
    });

    member.skills.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "skill-item";
      if (index === highlightedSkill) {
        li.classList.add("is-highlighted");
      }
      li.innerHTML = `
        <p class="skill-name">${item.name}</p>
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
