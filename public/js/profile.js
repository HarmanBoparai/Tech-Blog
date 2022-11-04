const newFormHandler = async (event) => {
  event.preventDefault();
console.log("hello");
  const name = document.querySelector('#blog-name').value.trim();
  const add_details = document.querySelector('#add-details').value.trim();
  const description = document.querySelector('#blog-desc').value.trim();
 console.log(name,add_details,description)
  if (name && add_details && description) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ name, add_details, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create a new blog');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

// document
  // .querySelector('.blog-list')
  // .addEventListener('click', delButtonHandler);
