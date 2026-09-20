window.AppPages = window.AppPages || {};

window.AppPages.initIndexPage = function initIndexPage() {
  const { teamMembers } = window.AppData;
  const { renderPartyList } = window.AppUI;

  const partyPanel = document.getElementById("party-panel");

  if (!partyPanel) {
    return;
  }

  renderPartyList(partyPanel, teamMembers, {
    selectable: true,
    onMemberClick: (member) => {
      window.location.href = member.profilePage;
    }
  });
};
