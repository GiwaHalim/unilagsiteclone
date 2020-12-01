    var a;
        function firstFunction() {
            var x = document.getElementById("show_hide");
            if (a == 1) {
                x.style.display = "none";
                return a=0;
            } else {
                x.style.display = "block";
                return a=1;
            }
        }

        