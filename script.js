document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('touchstart', function() {
      document.body.classList.add('tactile-interaction');
      document.documentElement.style.setProperty('--building-color1', '#000');
      document.documentElement.style.setProperty('--building-color2', '#000');
      document.documentElement.style.setProperty('--building-color3', '#000');
      document.documentElement.style.setProperty('--building-color4', '#000');
      document.documentElement.style.setProperty('--window-color1', '#b3ab46');
      document.documentElement.style.setProperty('--window-color2', '#b3ab46');
      document.documentElement.style.setProperty('--window-color3', '#b3ab46');
      document.documentElement.style.setProperty('--window-color4', '#b3ab46');
    });
  
    document.addEventListener('touchend', function() {
      document.body.classList.remove('tactile-interaction');
      document.documentElement.style.setProperty('--building-color1', '#aa80ff');
      document.documentElement.style.setProperty('--building-color2', '#66cc99');
      document.documentElement.style.setProperty('--building-color3', '#cc6699');
      document.documentElement.style.setProperty('--building-color4', '#538cc6');
      document.documentElement.style.setProperty('--window-color1', '#bb99ff');
      document.documentElement.style.setProperty('--window-color2', '#8cd9b3');
      document.documentElement.style.setProperty('--window-color3', '#d98cb3');
      document.documentElement.style.setProperty('--window-color4', '#8cb3d9');
    });
  });