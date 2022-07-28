$(function () {
    window.onload = (e) => {
        window.addEventListener('message', (event) => {
            var item = event.data

            if (item !== undefined && item.typ === "zmiany") {

                if (item.jedzenie <= 0) {
                    document.getElementById("c3").style.width = "0%";
                } else if (item.jedzenie <= 36) {
                    document.getElementById("c3").style.width = "10%";
                } else if (item.jedzenie <= 72) {
                    document.getElementById("c3").style.width = "20%";
                } else if (item.jedzenie <= 108) {
                    document.getElementById("c3").style.width = "30%";
                } else if (item.jedzenie <= 144) {
                    document.getElementById("c3").style.width = "40%";
                } else if (item.jedzenie <= 180) {
                    document.getElementById("c3").style.width = "50%";
                } else if (item.jedzenie <= 216) {
                    document.getElementById("c3").style.width = "60%";
                } else if (item.jedzenie <= 252) {
                    document.getElementById("c3").style.width = "70%";
                } else if (item.jedzenie <= 288) {
                    document.getElementById("c3").style.width = "80%";
                } else if (item.jedzenie <= 324) {
                    document.getElementById("c3").style.width = "90%";
                } else if (item.jedzenie <= 360) {
                    document.getElementById("c3").style.width = "100%";
                }

                if (item.picie <= 0) {
                    document.getElementById("c2").style.width = "0%";
                } else if (item.picie <= 36) {
                    document.getElementById("c2").style.width = "10%";
                } else if (item.picie <= 72) {
                    document.getElementById("c2").style.width = "20%";
                } else if (item.picie <= 108) {
                    document.getElementById("c2").style.width = "30%";
                } else if (item.picie <= 144) {
                    document.getElementById("c2").style.width = "40%";
                } else if (item.picie <= 180) {
                    document.getElementById("c2").style.width = "50%";
                } else if (item.picie <= 216) {
                    document.getElementById("c2").style.width = "60%";
                } else if (item.picie <= 252) {
                    document.getElementById("c2").style.width = "70%";
                } else if (item.picie <= 288) {
                    document.getElementById("c2").style.width = "80%";
                } else if (item.picie <= 324) {
                    document.getElementById("c2").style.width = "90%";
                } else if (item.picie <= 360) {
                    document.getElementById("c2").style.width = "100%";
                }

                if (item.zycie <= 100) {
                    document.getElementById("c1").style.width = "0%";
                } else if (item.zycie <= 105) {
                    document.getElementById("c1").style.width = "5%";
                } else if (item.zycie <= 110) {
                    document.getElementById("c1").style.width = "10%";
                } else if (item.zycie <= 115) {
                    document.getElementById("c1").style.width = "15%";
                } else if (item.zycie <= 120) {
                    document.getElementById("c1").style.width = "20%";
                } else if (item.zycie <= 125) {
                    document.getElementById("c1").style.width = "25%";
                } else if (item.zycie <= 130) {
                    document.getElementById("c1").style.width = "30%";
                } else if (item.zycie <= 135) {
                    document.getElementById("c1").style.width = "35%";
                } else if (item.zycie <= 140) {
                    document.getElementById("c1").style.width = "40%";
                } else if (item.zycie <= 145) {
                    document.getElementById("c1").style.width = "45%";
                } else if (item.zycie <= 150) {
                    document.getElementById("c1").style.width = "50%";
                } else if (item.zycie <= 155) {
                    document.getElementById("c1").style.width = "55%";
                } else if (item.zycie <= 160) {
                    document.getElementById("c1").style.width = "60%";
                } else if (item.zycie <= 165) {
                    document.getElementById("c1").style.width = "65%";
                } else if (item.zycie <= 170) {
                    document.getElementById("c1").style.width = "70%";
                } else if (item.zycie <= 175) {
                    document.getElementById("c1").style.width = "75%";
                } else if (item.zycie <= 180) {
                    document.getElementById("c1").style.width = "80%";
                } else if (item.zycie <= 185) {
                    document.getElementById("c1").style.width = "85%";
                } else if (item.zycie <= 190) {
                    document.getElementById("c1").style.width = "90%";
                } else if (item.zycie <= 195) {
                    document.getElementById("c1").style.width = "95%";
                } else if (item.zycie <= 200) {
                    document.getElementById("c1").style.width = "100%";
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