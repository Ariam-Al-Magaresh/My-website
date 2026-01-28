function welkomBericht() {
    alert("Bedankt voor het bezoeken van mijn website!");
}

function welkomBerichtEN() {
    alert("Thank you for visiting my website!");
}

function verstuurBericht(lang) {
    const naam = document.getElementById('naam').value;
    const bericht = document.getElementById('bericht').value;

    if (naam === "" || bericht === "") {
        alert(lang === 'nl' ? "Vul alles in!" : "Please fill in everything!");
        return;
    }

    const box = document.getElementById('bevestiging');
    const display = document.getElementById('weergaveBericht');

    box.style.display = "block";
    if (lang === 'nl') {
        display.innerHTML = `<strong>Bericht van ${naam}:</strong> ${bericht}`;
    } else {
        display.innerHTML = `<strong>Message from ${naam}:</strong> ${bericht}`;
    }
    
    document.getElementById('contactForm').reset();
}