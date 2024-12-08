document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".btn-tab");
  const contents = document.querySelectorAll("[id^='content-']");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((btn) => {
        btn.classList.remove("border-neutral-600");
        btn.classList.add("border-neutral-200");
      });

      tab.classList.remove("border-neutral-200");
      tab.classList.add("border-neutral-600");

      contents.forEach((content) => {
        content.classList.add("hidden");
      });

      contents[index].classList.remove("hidden");
    });
  });
});
