
/* github link */
function redirectToGitHub(url) {
    window.location.href = url;
}

/* to download resume */
document.getElementById('downloadBtn').addEventListener('click', function() {
    // URL of the PDF document
    var pdfUrl = 'https://drive.google.com/file/d/1-Cx00K3Yzk7FC2Y865H8KpVjfdPOF_OJ/view?usp=sharing';

    // Creating an invisible anchor element to trigger the download
    var a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'document.pdf'; // Name of the downloaded file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
