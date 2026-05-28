(function () {
  function initMermaid() {
    document.querySelectorAll("pre > code.language-mermaid").forEach(function (code) {
      var pre = code.parentElement;
      var diagram = document.createElement("div");
      diagram.className = "mermaid";
      diagram.textContent = code.textContent.trim();
      pre.replaceWith(diagram);
    });

    document.querySelectorAll(".mermaid").forEach(function (el) {
      el.textContent = el.textContent.trim();
    });

    if (!document.querySelector(".mermaid") || !window.mermaid) return;

    window.mermaid.initialize({
      startOnLoad: false,
      theme: "neutral",
      securityLevel: "loose",
      themeVariables: {
        fontSize: "18px",
        fontFamily: "Inter, sans-serif"
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        nodeSpacing: 40,
        rankSpacing: 40,
        padding: 16
      }
    });

    window.mermaid.run({ querySelector: ".mermaid" });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMermaid);
  } else {
    initMermaid();
  }
})();
