document.addEventListener("DOMContentLoaded", (event) => {
  const plans = document.querySelectorAll(".arcade, .advanced, .pro");

  plans.forEach((plan) => {
    plan.addEventListener("click", () => {
      plans.forEach((p) => p.classList.remove("planActive"));
      plan.classList.add("planActive");
    });
  });
});
