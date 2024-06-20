// tab script
(function () {
  "use strict";

  const tabGroups = document.querySelectorAll("[data-tab-group]");
  const tablist = document.querySelectorAll("[data-tab-nav] [data-tab]");

  function setActiveTab(tabGroup, tabName) {
    const tabsNav = tabGroup.querySelector("[data-tab-nav]");
    const tabsContent = tabGroup.querySelector("[data-tab-content]");

    tabsNav.querySelectorAll("[data-tab]").forEach((tabNavItem) => {
      tabNavItem.classList.remove("active");
    });
    tabsContent.querySelectorAll("[data-tab-panel]").forEach((tabPane) => {
      tabPane.classList.remove("active");
    });

    const selectedTabNavItem = tabsNav.querySelector(`[data-tab="${tabName}"]`);
    selectedTabNavItem.classList.add("active");
    const selectedTabPane = tabsContent.querySelector(
      `[data-tab-panel="${tabName}"]`
    );
    selectedTabPane.classList.add("active");
  }

  tabGroups.forEach((tabGroup) => {
    const tabsNav = tabGroup.querySelector("[data-tab-nav]");
    const tabsNavItem = tabsNav.querySelectorAll("[data-tab]");
    const activeTabName = tabsNavItem[0].getAttribute("data-tab");

    setActiveTab(tabGroup, activeTabName);

    tabsNavItem.forEach((tabNavItem) => {
      tabNavItem.addEventListener("click", () => {
        const tabName = tabNavItem.dataset.tab;
        setActiveTab(tabGroup, tabName);
      });
    });

    // if (window.innerWidth < 768) {
    //   var parent = document.createElement('select');
    //   parent.name = "tab-nav";
    //   parent.className = "tab-nav";
    //   // var child = document.createElement('');
    //   tabsNavItem.forEach((tabNavItem) => {
    //     var options = document.createElement('option');
    //     options.className = "tab-nav-item";
    //     options.value = tabNavItem.dataset.tab;
    //     options.innerText = tabNavItem.innerText;
    //     parent.appendChild(options);
    //   })
    //   tabsNav.replaceWith(parent);
    // }
  });

  function tabsHandler(event) {
    let index = Array.from(tablist).indexOf(this);
    let numbTabs = tablist.length;
    let nextId;
    if (numbTabs > 1) {
      if (event.key === "ArrowRight") {
        nextId = tablist[(index + 1) % numbTabs];
        if (index === numbTabs - 1) {
          nextId = tablist[0];
        }
        nextId.focus();
        nextId.click();
      }
      if (event.key === "ArrowLeft") {
        nextId = tablist[(index - 1 + numbTabs) % numbTabs];
        if (index === 0) {
          nextId = tablist[numbTabs - 1];
        }
        nextId.focus();
        nextId.click();
      }
    }
  }

  tablist.forEach(function (tab) {
    tab.addEventListener("keydown", tabsHandler);
  });
})();

document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.tab-nav-item');
  const accordionPanels = document.querySelectorAll('.accordion-panel');

  accordionItems.forEach(item => {
    item.addEventListener('click', function () {
      const panelId = this.getAttribute('data-tab');
      const activePanel = document.querySelector(`.accordion-panel[data-accordion-panel="${panelId}"]`);

      if (activePanel) {
        accordionPanels.forEach(panel => {
          panel.classList.remove('active');
        });

        activePanel.classList.add('active');
      } else {
        console.error(`Accordion panel with ID "${panelId}" not found.`);
      }
    });
  });
});


