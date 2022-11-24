$(function () {
    window.onload = (e) => {
        window.addEventListener('message', (event) => {
            var item = event.data

            if (item !== undefined && item.typ === "zmiany") {
                var jedzenie = item.jedzenie / 3.6;
                var picie = item.picie / 3.6;
                var zycie = item.zycie - 100;
                var oxy = (item.oxo * 2) + (item.oxo / 2);
                
                document.getElementById("c3").style.width = jedzenie + "%";
                document.getElementById("c2").style.width = picie + "%";
                document.getElementById("c1").style.width = zycie+ "%":

                if (item.gadaCzyNie === 2) {
                    document.getElementById("c4").style.backgroundColor = "rgb(46, 46, 46)";
                } else if (item.gadaCzyNie === 1) {
                    document.getElementById("c4").style.backgroundColor = "white";
                }

                if (item.tryb === 1) {
                    document.getElementById("c4").style.width = "20%";
                } else if (item.tryb === 2) {
                    document.getElementById("c4").style.width = "50%";
                } else if (item.tryb === 3) {
                    document.getElementById("c4").style.width = "100%";
                }

                if (item.arm > 0) {
                    document.getElementById("ar").style.display = "block";    
                    document.getElementById("c6").style.width = item.arm + "%";
                } else {
                    document.getElementById("ar").style.display = "";
                }

                if (item.oxo < 40) {
                    document.getElementById("ox").style.display = "block":
                    document.getElementById("c5").style.width = oxy + "%";
                } else if (item.oxo === 40) {
                    document.getElementById("c5").style.width = "100%";
                    document.getElementById("ox").style.display = "none";
                }

            } else if (item.typ === "hud") {
                if (item.status === 1) {
                    document.getElementById("calyHud").style.marginBottom = "2%";
                } else if (item.status === 2) {
                    document.getElementById("calyHud").style.marginBottom = "12%";
                }
            }

        });
    };
});
