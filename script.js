// ===============================
// WEBSITE AJAK JALAN ❤️
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("music");
    const musicBtn = document.querySelector(".music-btn");

    let musicPlaying = false;
    let noCount = 0;


    // ===============================
    // MUSIK
    // ===============================

    window.toggleMusic = function () {

        if (!music) return;

        if (musicPlaying) {

            music.pause();

            if (musicBtn) {
                musicBtn.textContent = "🎵";
            }

            musicPlaying = false;

        } else {

            music.play()
                .then(function () {

                    musicPlaying = true;

                    if (musicBtn) {
                        musicBtn.textContent = "🔊";
                    }

                })
                .catch(function () {

                    alert("Klik tombol musik untuk memulai musik 🎵");

                });

        }
    };


    // ===============================
    // SCROLL KE PERTANYAAN
    // ===============================

    window.scrollToQuestion = function () {

        const question = document.getElementById("question");

        if (question) {

            question.scrollIntoView({
                behavior: "smooth"
            });

        }

    };


    // ===============================
    // TOMBOL "NANTI DULU"
    // ===============================

    window.sayNo = function () {

        noCount++;

        const response = document.getElementById("response");
        const noBtn = document.getElementById("noBtn");
        const yesBtn = document.querySelector(".yes-btn");

        const messages = [
            "Yakin? 😭",
            "Coba pikir-pikir lagi... 🥺",
            "Masa nggak mau 😭",
            "Aku traktir deh 😭",
            "Satu kali aja...",
            "Tombolnya kok masih dipencet 😭",
            "Aku tunggu jawaban yang lain ❤️"
        ];

        if (response) {

            const index = Math.min(
                noCount - 1,
                messages.length - 1
            );

            response.textContent = messages[index];

        }


        // Tombol Nanti Dulu mengecil

        if (noBtn) {

            const scale = Math.max(
                0.45,
                1 - noCount * 0.08
            );

            noBtn.style.transform =
                "scale(" + scale + ")";

        }


        // Tombol Mau membesar

        if (yesBtn) {

            const scale = 1 + noCount * 0.06;

            yesBtn.style.transform =
                "scale(" + scale + ")";

        }

    };


    // ===============================
    // TOMBOL "MAU ❤️"
    // ===============================

    window.sayYes = function () {

        const question =
            document.querySelector(".question-section");

        const success =
            document.getElementById("success");


        if (question) {

            question.style.display = "none";

        }


        if (success) {

            success.style.display = "flex";

            createHearts(30);

            setTimeout(function () {

                success.scrollIntoView({
                    behavior: "smooth"
                });

            }, 100);

        }

    };


    // ===============================
    // MEMBUAT HATI
    // ===============================

    function createHeart() {

        const container =
            document.querySelector(".hearts");

        if (!container) return;


        const heart =
            document.createElement("span");


        const heartList = [
            "❤️",
            "💕",
            "💗",
            "💖",
            "🌷",
            "✨"
        ];


        const randomHeart =
            Math.floor(
                Math.random() * heartList.length
            );


        heart.textContent =
            heartList[randomHeart];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";


        heart.style.fontSize =
            (12 + Math.random() * 20) + "px";


        container.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 8000);

    }


    // ===============================
    // HATI OTOMATIS
    // ===============================

    setInterval(function () {

        createHeart();

    }, 700);


    // ===============================
    // BANYAK HATI
    // ===============================

    function createHearts(amount) {

        for (let i = 0; i < amount; i++) {

            setTimeout(function () {

                createHeart();

            }, i * 100);

        }

    }


    // ===============================
    // RESTART
    // ===============================

    window.restart = function () {

        location.reload();

    };


    // ===============================
    // MUSIK SAAT USER KLIK
    // ===============================

    document.addEventListener("click", function () {

        if (!music || musicPlaying) return;


        music.play()
            .then(function () {

                musicPlaying = true;

                if (musicBtn) {
                    musicBtn.textContent = "🔊";
                }

            })
            .catch(function () {

                // Browser bisa menolak autoplay.
                // Tidak masalah, tombol musik tetap bisa digunakan.

            });

    });


});