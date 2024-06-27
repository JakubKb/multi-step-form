document.addEventListener("DOMContentLoaded", (event) => {
  const inputs = document.querySelectorAll(".name, .phoneNum, .email");
  const errorMsg = document.querySelector(".error");
  let allValid = false;

  function validateInputs() {
    allValid = true;
    for (let input of inputs) {
      if (input.value.trim() === "") {
        errorMsg.style.display = "block";
        input.style.border = "1px solid red";
        allValid = false;
      } else {
        input.style.border = "";
      }
    }
    if (allValid) {
      errorMsg.style.display = "none";
    }
  }

  let step = 1;
  const stepContent = document.querySelectorAll(
    ".stepOneContent, .stepTwoContent, .stepThreeContent, .stepFourContent"
  );
  const stageNumbers = document.querySelectorAll(".stageNum");

  function updateStepDisplay() {
    stepContent.forEach((content, index) => {
      if (index === step - 1) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });

    stageNumbers.forEach((stage, index) => {
      if (index === step - 1) {
        stage.classList.add("stageActive");
      } else {
        stage.classList.remove("stageActive");
      }
    });
  }

  updateStepDisplay();

  const nextBtn = document.querySelector(".nextBtn");
  nextBtn.addEventListener("click", () => {
    validateInputs();
    if (allValid && step < stepContent.length) {
      step++;
      updateStepDisplay();
    }
  });

  const goBackBtn = document.querySelector(".goBackBtn");
  goBackBtn.addEventListener("click", () => {
    if (step > 1) {
      step--;
      updateStepDisplay();
    }
  });

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
