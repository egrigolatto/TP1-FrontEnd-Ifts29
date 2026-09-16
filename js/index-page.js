window.AppPages = window.AppPages || {};

window.AppPages.initIndexPage = function initIndexPage() {
  const { categoryMenu, teamMembers } = window.AppData;
  const { renderMenuButtons, renderPartyList } = window.AppUI;

  const partyPanel = document.getElementById("party-panel");
  const menuPanel = document.getElementById("category-menu");
  const menuHint = document.getElementById("menu-hint");

  if (!partyPanel || !menuPanel || !menuHint) {
    return;
  }

  const state = {
    selectedCategory: ""
  };

  const updateHint = (text, isWarning = false) => {
    menuHint.textContent = text;
    menuHint.classList.toggle("warning", isWarning);
  };

  const syncView = () => {
    renderPartyList(partyPanel, teamMembers, {
      selectable: Boolean(state.selectedCategory),
      onMemberClick: (member) => {
        if (!state.selectedCategory) {
          updateHint("Primero selecciona una categoria del menu.", true);
          return;
        }

        const selectedItem = categoryMenu.find((item) => item.id === state.selectedCategory);

        if (!selectedItem || !selectedItem.route) {
          updateHint("Categoria sin ruta asignada.", true);
          return;
        }

        if (selectedItem.id !== "skills") {
          return;
        }

        window.location.href = `${selectedItem.route}?member=${member.id}`;
      }
    });

    renderMenuButtons(menuPanel, categoryMenu, state.selectedCategory, (item) => {
      state.selectedCategory = item.id;
      updateHint(`Categoria activa: ${item.label}. Ahora selecciona un integrante.`);
      syncView();
    });
  };

  syncView();
};
