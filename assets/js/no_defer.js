document.addEventListener("DOMContentLoaded", () => {
  const theme = typeof determineComputedTheme === "function" ? determineComputedTheme() : "light";

  document.querySelectorAll("table").forEach((table) => {
    if (theme === "dark") {
      table.classList.add("table-dark");
    } else {
      table.classList.remove("table-dark");
    }

    const insideNews = table.closest('[class*="news"]');
    const insideCard = table.closest('[class*="card"]');
    const insideArchive = table.closest('[class*="archive"]');
    const insideCode = table.closest("code");

    if (!insideNews && !insideCard && !insideArchive && !insideCode) {
      table.setAttribute("data-toggle", "table");
      table.classList.add("table-hover");
    }
  });

  document.querySelectorAll("a").forEach((anchor) => {
    anchor.classList.remove("waves-effect", "waves-light");
  });
});
