// =================================================
// POPUP SERTIFIKAT
// =================================================


function openCertificate(imageSource) {

    const modal =
        document.getElementById("certificateModal");

    const image =
        document.getElementById("certificateImage");


    image.src = imageSource;

    modal.style.display = "flex";

}


// =================================================
// TUTUP POPUP
// =================================================


function closeCertificate() {

    const modal =
        document.getElementById("certificateModal");


    modal.style.display = "none";

}


// =================================================
// KLIK DI LUAR GAMBAR
// =================================================


window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("certificateModal");


    if (event.target === modal) {

        modal.style.display = "none";

    }

});


// =================================================
// TOMBOL ESC UNTUK MENUTUP SERTIFIKAT
// =================================================


window.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeCertificate();

    }

});