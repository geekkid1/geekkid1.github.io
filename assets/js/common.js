document.addEventListener("DOMContentLoaded", () => {
  // add toggle functionality to abstract, award and bibtex buttons
  document.querySelectorAll("a.abstract").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const scope = link.closest("li, .card-body, article, .post, .row") || link.parentElement;
      if (!scope) {
        return;
      }
      scope.querySelectorAll(".abstract.hidden").forEach((panel) => panel.classList.toggle("open"));
      scope.querySelectorAll(".award.hidden.open").forEach((panel) => panel.classList.toggle("open"));
      scope.querySelectorAll(".bibtex.hidden.open").forEach((panel) => panel.classList.toggle("open"));
    });
  });

  document.querySelectorAll("a.award").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const scope = link.closest("li, .card-body, article, .post, .row") || link.parentElement;
      if (!scope) {
        return;
      }
      scope.querySelectorAll(".abstract.hidden.open").forEach((panel) => panel.classList.toggle("open"));
      scope.querySelectorAll(".award.hidden").forEach((panel) => panel.classList.toggle("open"));
      scope.querySelectorAll(".bibtex.hidden.open").forEach((panel) => panel.classList.toggle("open"));
    });
  });

  document.querySelectorAll("a.bibtex").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const scope = link.closest("li, .card-body, article, .post, .row") || link.parentElement;
      if (!scope) {
        return;
      }
      scope.querySelectorAll(".abstract.hidden.open").forEach((panel) => panel.classList.toggle("open"));
      scope.querySelectorAll(".award.hidden.open").forEach((panel) => panel.classList.toggle("open"));
      scope.querySelectorAll(".bibtex.hidden").forEach((panel) => panel.classList.toggle("open"));
    });
  });

  document.querySelectorAll("a").forEach((anchor) => {
    anchor.classList.remove("waves-effect", "waves-light");
  });

  // bootstrap-toc
  const tocSidebar = document.querySelector("#toc-sidebar");
  if (tocSidebar) {
    document.querySelectorAll(".publications h2").forEach((heading) => {
      heading.setAttribute("data-toc-skip", "");
    });
    if (window.tocbot && typeof window.tocbot.init === "function") {
      window.tocbot.init({
        tocSelector: "#toc-sidebar",
        contentSelector: '[role="main"]',
        headingSelector: "h2, h3",
        ignoreSelector: "[data-toc-skip]",
        hasInnerContainers: true,
        collapseDepth: 3,
        orderedList: false,
        activeLinkClass: "is-active-link",
        scrollSmooth: true,
        scrollSmoothOffset: -80,
        headingsOffset: 80,
      });
    }
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  const jupyterTheme = determineComputedTheme();

  document.querySelectorAll(".jupyter-notebook-iframe-container iframe").forEach((iframe) => {
    iframe.addEventListener("load", () => {
      const iframeDocument = iframe.contentDocument;
      if (!iframeDocument) {
        return;
      }

      iframeDocument.head.appendChild(cssLink.cloneNode(true));

      if (jupyterTheme === "dark") {
        iframeDocument.body?.setAttribute("data-jp-theme-light", "false");
        iframeDocument.body?.setAttribute("data-jp-theme-name", "JupyterLab Dark");
      }
    });
  });

  document.querySelectorAll('[data-bs-toggle="popover"], [data-toggle="popover"]').forEach((element) => {
    if (window.bootstrap && typeof window.bootstrap.Popover === "function") {
      new window.bootstrap.Popover(element, { trigger: "hover" });
    }
  });
});
