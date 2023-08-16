document.addEventListener('DOMContentLoaded', () => {
    const inputFile = document.getElementById('inputFile');
    const convertButton = document.getElementById('convertButton');
    const downloadLink = document.getElementById('downloadLink');
    const videoPreview = document.getElementById('videoPreview');

    inputFile.addEventListener('change', () => {
        const selectedFile = inputFile.files[0];
        if (selectedFile && selectedFile.type === 'video/mp4') {
            const blobURL = URL.createObjectURL(selectedFile);
            videoPreview.src = blobURL;
            videoPreview.style.display = 'block';
        } else {
            videoPreview.style.display = 'none';
            alert('Por favor selecciona un archivo MP4 válido.');
        }
    });

    convertButton.addEventListener('click', () => {
        if (inputFile.files.length > 0) {
            const selectedFile = inputFile.files[0];
            if (selectedFile.type === 'video/mp4') {
                const blobURL = URL.createObjectURL(selectedFile);
                downloadLink.href = blobURL.replace('video/mp4', 'audio/mp3');
                downloadLink.download = selectedFile.name.replace('.mp4', '.mp3');
                downloadLink.style.display = 'block';
            } else {
                alert('Por favor selecciona un archivo MP4 válido.');
            }
        } else {
            alert('Por favor selecciona un archivo MP4.');
        }
    });
});
