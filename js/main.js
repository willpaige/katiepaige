

function showContact() {
  const contact = document.getElementById('contact');
  const activeClassName = 'is-active';

  if (contact.classList.contains(activeClassName)) {
    contact.classList.remove(activeClassName);
  } else {
    contact.classList.add(activeClassName);
  }

}
