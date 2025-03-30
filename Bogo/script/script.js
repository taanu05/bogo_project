const dropdowns = document.querySelectorAll('.dropdown');
    const options = ['S', 'M', 'L', 'XL'];
    dropdowns.forEach(dropdown => {
      options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        dropdown.appendChild(optionElement);
      });
    });
    dropdowns.forEach(dropdown => {
      dropdown.value = "S";
    });

    const colorDropdowns = document.querySelectorAll('.colorDropdown');
    const colorOptions = ['Black', 'Blue', 'Daffodil', 'Evergreen'];
    colorDropdowns.forEach(dropdown => {
      colorOptions.forEach(color => {
        const optionElement = document.createElement('option');
        optionElement.value = color;
        optionElement.textContent = color;
        dropdown.appendChild(optionElement);
      });
    });
    colorDropdowns.forEach(dropdown => {
      dropdown.value = "Black";
    });

    document.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".template-div, .template-div-2");

        cards.forEach(card => {
            const sizeAndColorDiv = card.querySelector(".sizeandcolour-div");

            if (!sizeAndColorDiv) return;

            card.addEventListener("mouseenter", () => {
                card.style.height = "174.11px";
                card.style.borderColor = "rgb(255, 107, 130)";
                card.style.backgroundColor = "rgb(255,249,250)";
                sizeAndColorDiv.style.display = "block";
                card.style.cursor = "pointer";
            });

            card.addEventListener("mouseleave", () => {
                card.style.height = "80px";
                card.style.borderColor = "rgba(0,0,0,0.4)";
                sizeAndColorDiv.style.display = "none";
                card.style.cursor = "normal";
                card.style.backgroundColor = "white";
            });
        });
    });