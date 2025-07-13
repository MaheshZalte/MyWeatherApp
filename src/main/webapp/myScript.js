var weatherIcon = document.getElementById("weather-icon");
	
	var val = document.getElementById("wc").value;
	  switch (val) {
      case 'Clouds':
          weatherIcon.src = "<%= request.getContextPath() %>/images/cloude.png";
          break;
      case 'Clear':
          weatherIcon.src = "<%= request.getContextPath() %>/images/Clear.png";
          break;
      case 'Rain':
          weatherIcon.src = "<%= request.getContextPath() %>/images/Rain.png";
          break;
      case 'Mist':
          weatherIcon.src = "<%= request.getContextPath() %>/images/Mist.png";
          break;
      case 'Snow':
          weatherIcon.src = "<%= request.getContextPath() %>/images/Snow.png";
          break;
      case 'Haze':
          weatherIcon.src = "<%= request.getContextPath() %>/images/Haze.png";
          break;
  }