export const sendContactForm = async data => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to send message');
    const contactData = await response.json();
    return contactData;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to send message');
  }
};
