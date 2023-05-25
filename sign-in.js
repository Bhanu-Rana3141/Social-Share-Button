function calculateAge() {
    var dobInput = document.getElementById('dob');
    var dobValue = dobInput.value;

    if (dobValue) {
        var dobDate = new Date(dobValue);
        var today = new Date();
        var age = today.getFullYear() - dobDate.getFullYear();

        if (
            today.getMonth() < dobDate.getMonth() ||
            (today.getMonth() === dobDate.getMonth() && today.getDate() < dobDate.getDate())
        ) {
            age--;
        }

        var ageCounter = document.getElementById('age-counter');
        ageCounter.textContent = 'Age: ' + age;

        // Show recommended section based on age
        if (age < 18) {
            document.querySelector('.recommended-section1').style.display = 'block';
        } else if (age >= 18 && age < 35) {
            document.querySelector('.recommended-section2').style.display = 'block';
        } else if (age >= 35 && age < 50) {
            document.querySelector('.recommended-section3').style.display = 'block';
        } else if (age >= 50 && age < 60) {
            document.querySelector('.recommended-section4').style.display = 'block';
        } else if (age >= 60 && age < 70) {
            document.querySelector('.recommended-section5').style.display = 'block';
        } else if (age >= 70) {
            document.querySelector('.recommended-section6').style.display = 'block';
        }
    } else {
        // Hide all sections if age is not defined
        var recommendedSections = document.querySelectorAll('.recommended-section');
        recommendedSections.forEach(function(section) {
            section.style.display = 'none';
        });
    }
}

// Update age counter on date change
var dobInput = document.getElementById('dob');
dobInput.addEventListener('input', calculateAge);