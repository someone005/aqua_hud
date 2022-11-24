$(function () {
    window.onload = (e) => {
        window.addEventListener('message', (event) => {
            var item = event.data

            if (item !== undefined && item.typ === "zmiany") {
                var jedzenie = item.jedzenie / 3.6;
                var picie = item.picie / 3.6;
                var zycie = item.zycie - 100;
                
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
                    document.getElementById("ox").style.display = "block";

                    if (item.oxo <= 0) {
                        document.getElementById("c5").style.width = "0%";
                    } else if (item.oxo <= 2) {
                        document.getElementById("c5").style.width = "5%";
                    } else if (item.oxo <= 4) {
                        document.getElementById("c5").style.width = "10%";
                    } else if (item.oxo <= 6) {
                        document.getElementById("c5").style.width = "15%";
                    } else if (item.oxo <= 8) {
                        document.getElementById("c5").style.width = "20%";
                    } else if (item.oxo <= 10) {
                        document.getElementById("c5").style.width = "25%";
                    } else if (item.oxo <= 12) {
                        document.getElementById("c5").style.width = "30%";
                    } else if (item.oxo <= 14) {
                        document.getElementById("c5").style.width = "35%";
                    } else if (item.oxo <= 16) {
                        document.getElementById("c5").style.width = "40%";
                    } else if (item.oxo <= 18) {
                        document.getElementById("c5").style.width = "45%";
                    } else if (item.oxo <= 20) {
                        document.getElementById("c5").style.width = "50%";
                    } else if (item.oxo <= 22) {
                        document.getElementById("c5").style.width = "55%";
                    } else if (item.oxo <= 24) {
                        document.getElementById("c5").style.width = "60%";
                    } else if (item.oxo <= 26) {
                        document.getElementById("c5").style.width = "65%";
                    } else if (item.oxo <= 28) {
                        document.getElementById("c5").style.width = "70%";
                    } else if (item.oxo <= 30) {
                        document.getElementById("c5").style.width = "75%";
                    } else if (item.oxo <= 32) {
                        document.getElementById("c5").style.width = "80%";
                    } else if (item.oxo <= 34) {
                        document.getElementById("c5").style.width = "85%";
                    } else if (item.oxo <= 36) {
                        document.getElementById("c5").style.width = "90%";
                    } else if (item.oxo <= 38) {
                        document.getElementById("c5").style.width = "95%";
                    } else if (item.oxo <= 40) {
                        document.getElementById("c5").style.width = "100%";
                    }
                } else if (item.oxo === 40) {
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
