
        // Add event listeners to each feature
        document.getElementById('art').addEventListener('click', function() {
            window.location.href = 'personal.html'; // Replace 'art.html' with the actual URL of the art page
        });

        document.getElementById('music').addEventListener('click', function() {
            window.location.href = 'education.html'; // Replace 'music.html' with the actual URL of the music page
        });

        document.getElementById('traditions').addEventListener('click', function() {
            window.location.href = 'experience.html'; // Replace 'traditions.html' with the actual URL of the traditions page
        });

        document.getElementById('cuisine').addEventListener('click', function() {
            window.location.href = 'myprojects.html'; // Replace 'cuisine.html' with the actual URL of the cuisine page
        });
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            const slides = document.getElementsByClassName("slides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 2000); // Change slide every 2 seconds
        }
    
