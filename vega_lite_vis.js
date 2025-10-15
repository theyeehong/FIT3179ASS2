var vg1 = "js/map.vg.json";
var vg2 = "js/heatmap.vg.json";
var vg3 = "js/treemap.vg.json";
var vg4 = "js/radar.vg.json";
var vg5 = "js/doughnut.vg.json";
var vg6 = "js/gbar.vg.json";

let vg1View = null;
let vg2View = null;
let vg3View = null;
let vg4View = null;
let vg5View = null;
let vg6View = null;

document.addEventListener("DOMContentLoaded", function () {
  function renderCharts(year) {
    if (!vg1View) {
      vegaEmbed("#vg1", vg1, { actions: false }).then((result) => {
        vg1View = result.view;
        vg1View.signal("YearSelection", year).runAsync();
      });
    } else {
      vg1View.signal("YearSelection", year).runAsync();
    }
    if (!vg2View) {
      vegaEmbed("#vg2", vg2, { actions: false }).then((result) => {
        vg2View = result.view;
        vg2View.signal("YearSelection", year).runAsync();
      });
    } else {
      vg2View.signal("YearSelection", year).runAsync();
    }
    if (!vg3View) {
      vegaEmbed("#vg3", vg3, { actions: false }).then((result) => {
        vg3View = result.view;
        vg3View.signal("YearSelection", year).runAsync();
      });
    } else {
      vg3View.signal("YearSelection", year).runAsync();
    }
    if (!vg4View) {
      vegaEmbed("#vg4", vg4, { actions: false }).then((result) => {
        vg4View = result.view;
        vg4View.signal("YearSelection", year).runAsync();
      });
    } else {
      vg4View.signal("YearSelection", year).runAsync();
    }
    if (!vg5View) {
      vegaEmbed("#vg5", vg5, { actions: false }).then((result) => {
        vg5View = result.view;
        vg5View.signal("YearSelection", year).runAsync();
      });
    } else {
      vg5View.signal("YearSelection", year).runAsync();
    }
    if (!vg6View) {
      vegaEmbed("#vg6", vg6, { actions: false }).then((result) => {
        vg6View = result.view;
        vg6View.signal("YearSelection", year).runAsync();
      });
    } else {
      vg6View.signal("YearSelection", year).runAsync();
    }
  }

  renderCharts(2014);

  const yearSlider = document.getElementById("year-slider");
  const yearValue = document.getElementById("year-value");

  yearSlider.addEventListener("input", function () {
    const selectedYear = parseInt(this.value);
    yearValue.textContent = selectedYear;
    renderCharts(selectedYear);
  });

  const sections = document.querySelectorAll(".section");

  function getCurrentSectionIndex() {
    let maxIntersection = 0;
    let currentIndex = 0;
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      if (visibleHeight > maxIntersection) {
        maxIntersection = visibleHeight;
        currentIndex = index;
      }
    });
    return currentIndex;
  }

  let currentSection = getCurrentSectionIndex();

  function scrollToSection(index) {
    if (index >= 0 && index < sections.length && index !== currentSection) {
      currentSection = index;
      sections[index].scrollIntoView({ behavior: "smooth" });
      updateButtonStates();
    }
  }

  function updateButtonStates() {
    document.getElementById("nav-up").disabled = currentSection === 0;
    document.getElementById("nav-down").disabled =
      currentSection === sections.length - 1;
  }

  document.getElementById("nav-up").addEventListener("click", () => {
    scrollToSection(currentSection - 1);
  });

  document.getElementById("nav-down").addEventListener("click", () => {
    scrollToSection(currentSection + 1);
  });

  updateButtonStates();

  window.addEventListener("scroll", () => {
    const newSection = getCurrentSectionIndex();
    if (newSection !== currentSection) {
      currentSection = newSection;
      updateButtonStates();
    }
  });
});
