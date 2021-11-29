var cus_acc = document.getElementsByClassName("custom_accordion_btn");
            var i;

            for (i = 0; i < cus_acc.length; i++) {
                cus_acc[i].addEventListener("click", function () {
                    /* Toggle between adding and removing the "active" class,
                    to highlight the button that controls the panel */
                    this.classList.toggle("active_btn");

                    /* Toggle between hiding and showing the active panel */
                    var panel = this.nextElementSibling;
                    var img = this.firstElementChild;
                    if (panel.style.display === "block") {
                        panel.style.display = "none";

                    } else {
                        panel.style.display = "block";
                        img.style.transform = "rotate('90deg')";
                    }
                });
            }