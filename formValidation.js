// Περιμένουμε να φορτώσει η σελίδα
document.addEventListener("DOMContentLoaded", function() {
    
    // Βρίσκουμε τη φόρμα με βάση το id της
    const form = document.getElementById("contactForm");

    // Όταν κάποιος πατήσει το κουμπί "Send Message"
    form.addEventListener("submit", function(event) {
        
        // Παίρνουμε τις τιμές που έγραψε ο χρήστης
        const name = document.querySelector('input[name="fullname"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        // Έλεγχος 1: Αν κάποιο πεδίο είναι άδειο
        if (name === "" || email === "" || message === "") {
            alert("Παρακαλώ συμπληρώστε όλα τα πεδία!");
            event.preventDefault(); // Σταματάμε την αποστολή της φόρμας
            return;
        }

        // Έλεγχος 2: Αν το email δεν έχει το παπάκι (@)
        if (!email.includes("@")) {
            alert("Παρακαλώ εισάγετε ένα έγκυρο email!");
            event.preventDefault(); // Σταματάμε την αποστολή
            return;
        }

        // Αν όλα είναι σωστά, αφήνουμε τη φόρμα να φύγει
        alert("Επιτυχία! Η φόρμα ελέγχθηκε σωστά.");
    });
});