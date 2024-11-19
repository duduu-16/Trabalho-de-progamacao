const flashcard = document.getElementById('flashcard');
const videoContainer = document.getElementById('videoContainer');
const videoPlayer = document.getElementById('videoPlayer');

flashcard.addEventListener('click', () => {
    flashcard.style.display = 'none'; // Esconde o flashcard
    videoContainer.style.display = 'block'; // Mostra o vídeo
    videoPlayer.play(); // Inicia a reprodução do vídeo
});