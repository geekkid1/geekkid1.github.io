document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".jupyter-notebook-iframe-container").forEach((container) => {
    const iframe = container.querySelector("iframe");
    if (!iframe || !iframe.contentWindow) {
      return;
    }

    iframe.addEventListener("load", () => {
      const iframeBody = iframe.contentWindow.document.body;
      if (!iframeBody) {
        return;
      }

      iframeBody.querySelectorAll("a[href]").forEach((link) => {
        link.setAttribute("target", "_blank");
      });
    });
  });
});
