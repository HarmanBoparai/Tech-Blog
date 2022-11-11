const updateFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blog-name').value.trim();
    const add_details = document.querySelector('#add-details').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();
  
    if (name && add_details && description) {
      const response = await fetch(`/api/blogs`, {
        method: 'PUT',
        body: JSON.stringify({ name, add_details , description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update a new blog');
      }
    }
  };

  document
  .querySelector('#update_btn')
  .addEventListener('submit', updateFormHandler);

  
