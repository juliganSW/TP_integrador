
  const dateInput1 = document.getElementById('dateInput1');
  const dateInput2 = document.getElementById('dateInput2');
  
  flatpickr(dateInput1, {
    enableTime: false,
    dateFormat: 'Y-m-d',
    locale: 'es', // Configura el idioma a español.
    // Otras opciones personalizadas para el primer campo.
  });

  flatpickr(dateInput2, {
    enableTime: false,
    dateFormat: 'Y-m-d',
    locale: 'es', // Configura el idioma a español.
    // Otras opciones personalizadas para el segundo campo.
  });

