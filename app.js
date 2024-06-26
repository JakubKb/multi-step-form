document.addEventListener("DOMContentLoaded", (event) => {
  const plans = document.querySelectorAll(".arcade, .advanced, .pro");

  plans.forEach((plan) => {
    plan.addEventListener("click", () => {
      plans.forEach((p) => p.classList.remove("planActive"));
      plan.classList.add("planActive");
    });
  });

  const addOnsDivs = document.querySelectorAll(
    ".onlineService, .largerStorage, .customizableProfile"
  );

  addOnsDivs.forEach((addOnDiv) => {
    const checkbox = addOnDiv.querySelector(".AddOnsCheckbox");

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        addOnDiv.classList.add("planActive");
      } else {
        addOnDiv.classList.remove("planActive");
      }
    });
  });
});
