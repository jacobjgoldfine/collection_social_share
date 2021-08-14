require('dotenv').config();

let pictureData = {}

  
  cloudinary.applyUploadWidget(document.getElementById('wiget'), 
  { cloudName: process.env.CD_NAME, uploadPreset: process.env.CD_PRESET }, (error, result) => {

    if (result.event === "success") {
      pictureData = result.info
    }
   });

   if (name && description && pictureData) {
    const response = await fetch(`/api/item`, {
      method: 'POST',
      body: JSON.stringify({ name, description, secure_url: pictureData.secure_url }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create item');
    }
  };