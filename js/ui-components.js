window.AppUI = window.AppUI || {};

window.AppUI.getMemberById = function getMemberById(members, id) {
  return members.find((member) => member.id === id) ?? members[0];
};

window.AppUI.renderPartyList = function renderPartyList(container, members, config = {}) {
  const { selectedId = "", selectable = false, onMemberClick } = config;

  container.innerHTML = "";
  const list = document.createElement("div");
  list.className = "party-list";

  members.forEach((member) => {
    const row = document.createElement("article");
    row.className = "party-row";

    if (selectable) {
      row.classList.add("selectable");
    }

    if (member.id === selectedId) {
      row.classList.add("is-active");
    }

    const ageLabel = member.age === "—" || member.age === "" ? "Edad pendiente" : `${member.age} años`;

    row.innerHTML = `
      <div class="party-avatar" aria-hidden="true">
        <img src="${member.avatar}" alt="" class="avatar-img" width="56" height="56" />
      </div>
      <div>
        <p class="party-name">${member.name}</p>
        <p class="party-meta">${member.city} | ${ageLabel}</p>
      </div>
      <p class="party-class">${member.className}</p>
    `;

    if (typeof onMemberClick === "function") {
      row.addEventListener("click", () => onMemberClick(member));
    }

    list.appendChild(row);
  });

  container.appendChild(list);
};
