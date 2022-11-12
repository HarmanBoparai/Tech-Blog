const updateFormHandler = async (event) => {
    event.preventDefault();
    console.log(event.target);
  
    const name = document.querySelector('#blog-name').value.trim();
    const add_details = document.querySelector('#add-details').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();
    let blog_id=event.target.dataset.blog_id
    console.log(blog_id);
    if (name && add_details && description) {
      const response = await fetch(`/api/blogs`, {
        method: 'PUT',
        body: JSON.stringify({ name, add_details , description ,blog_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update a new blog');
      }
     }
  };

  document
  .querySelector('#update_btn')
  .addEventListener('click', updateFormHandler);

  
