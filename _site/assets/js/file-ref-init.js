(function () {
  var FILE_PATTERN =
    /(^|\/|_posts\/|_layouts\/|assets\/).+|(?:^|\/)[^/\s]+\.(?:c|cc|cpp|cxx|h|hpp|py|md|txt|f90|toml|ya?ml|json|js|css|html|asdl)$|^(?:CMakeLists\.txt|Makefile)$/i;

  function markFileRefs() {
    document.querySelectorAll(".prose code").forEach(function (code) {
      if (code.closest("pre")) return;

      var text = code.textContent.trim();
      if (!text) return;

      if (FILE_PATTERN.test(text)) {
        code.classList.add("file-ref");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", markFileRefs);
  } else {
    markFileRefs();
  }
})();
