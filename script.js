// Get the modal
var modal = document.getElementById('modal');

// Get the form inside the modal
var form = modal.querySelector('.modal__content');

// Get the button that opens the modal
var btn = document.getElementById('openModalBtn');

// Get the <span> element that closes the modal
var span = document.querySelector('.modal__close');

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'flex';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Add event listener to the form submit
form.addEventListener('submit', function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the input values
  var namaInput = form.querySelector('input[name="nama"]').value;
  var titleInput = form.querySelector('input[name="title"]').value;

  // set the values to the profile
  document.querySelector('.profile__name').textContent = namaInput;
  document.querySelector('.profile__title').textContent = titleInput;

  // clear the form values
  form.querySelector('input[name="nama"]').value = '';
  form.querySelector('input[name="title"]').value = '';

  // Close the modal after form submission
  modal.style.display = 'none';
});

// svg

// #1
function toggleSVG(svg_1, svg_2) {
  const svg1 = document.getElementById(svg_1);
  const svg2 = document.getElementById(svg_2);

  if (svg1.classList.contains('active')) {
    svg1.classList.remove('active');
    svg2.classList.add('active');
  } else {
    svg2.classList.remove('active');
    svg1.classList.add('active');
  }
}
