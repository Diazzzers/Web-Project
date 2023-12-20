let rating = 0;

    function rate(stars) {
        rating = stars;
        updateStars();
    }

    function updateStars() {
        for (let i = 1; i <= 5; i++) {
            const starElement = document.getElementById(`star${i}`);
            if (i <= rating) {
                starElement.classList.add('active');
            } else {
                starElement.classList.remove('active');
            }
        }
    }