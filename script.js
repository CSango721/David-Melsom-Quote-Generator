const quotes = [
    { quote: "If Coach Doesn't play me, I wont play." },
    { quote: "The tee box is level and un-level and i'm just trying to find same spot turf." },
    { quote: "I play good if I putt it in." },
    { quote: "I'm trying to sneeze. stop giving me laugh!"},
    { quote: "What is the junior rate on the kangaroo?},
    { quote: "Mid sauce from 180"}
]

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex].quote;
}

// Generate an initial quote on page load
window.onload = generateQuote;
