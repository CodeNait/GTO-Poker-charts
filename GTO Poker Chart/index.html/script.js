// Function to handle highlighting the entered hand
function highlightHand() {
  const input = document.getElementById('handInput').value.trim().toUpperCase();
  const hands = document.querySelectorAll('.hand');

  // Remove existing active class
  hands.forEach(hand => hand.classList.remove('active'));

  // Find and highlight the matching hand
  hands.forEach(hand => {
    if (hand.textContent.trim().toUpperCase() === input) {
      hand.classList.add('active');
    }
  });
}
