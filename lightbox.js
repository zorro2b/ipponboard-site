// Simple lightbox for screenshots
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox elements
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
        <div class="lightbox-content">
            <img src="" alt="Screenshot" class="lightbox-image">
            <button class="lightbox-close">&times;</button>
        </div>
    `;
    document.body.appendChild(overlay);

    const lightboxImage = overlay.querySelector('.lightbox-image');
    const closeBtn = overlay.querySelector('.lightbox-close');

    // Add click handlers to all screenshots
    document.querySelectorAll('.screenshot').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            lightboxImage.src = this.src;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close handlers
    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeLightbox();
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

    function closeLightbox() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});
