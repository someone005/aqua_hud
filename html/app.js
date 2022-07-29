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

                    if (item.arm <= 0) {
                        document.getElementById("c6").style.width = "0%";
                    } else if (item.arm <= 5) {
                        document.getElementById("c6").style.width = "5%";
                    } else if (item.arm <= 10) {
                        document.getElementById("c6").style.width = "10%";
                    } else if (item.arm <= 15) {
                        document.getElementById("c6").style.width = "15%";
                    } else if (item.arm <= 20) {
                        document.getElementById("c6").style.width = "20%";
                    } else if (item.arm <= 25) {
                        document.getElementById("c6").style.width = "25%";
                    } else if (item.arm <= 30) {
                        document.getElementById("c6").style.width = "30%";
                    } else if (item.arm <= 35) {
                        document.getElementById("c6").style.width = "35%";
                    } else if (item.arm <= 40) {
                        document.getElementById("c6").style.width = "40%";
                    } else if (item.arm <= 45) {
                        document.getElementById("c6").style.width = "45%";
                    } else if (item.arm <= 50) {
                        document.getElementById("c6").style.width = "50%";
                    } else if (item.arm <= 55) {
                        document.getElementById("c6").style.width = "55%";
                    } else if (item.arm <= 60) {
                        document.getElementById("c6").style.width = "60%";
                    } else if (item.arm <= 65) {
                        document.getElementById("c6").style.width = "65%";
                    } else if (item.arm <= 70) {
                        document.getElementById("c6").style.width = "70%";
                    } else if (item.arm <= 75) {
                        document.getElementById("c6").style.width = "75%";
                    } else if (item.arm <= 80) {
                        document.getElementById("c6").style.width = "80%";
                    } else if (item.arm <= 85) {
                        document.getElementById("c6").style.width = "85%";
                    } else if (item.arm <= 90) {
                        document.getElementById("c6").style.width = "90%";
                    } else if (item.arm <= 95) {
                        document.getElementById("c6").style.width = "95%";
                    } else if (item.arm <= 100) {
                        document.getElementById("c6").style.width = "100%";
                    }
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
