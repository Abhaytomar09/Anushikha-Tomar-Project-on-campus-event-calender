alert("welcome to Swami Vivekanand Subharti University Event Calender");
document.addEventListener('DOMContentLoaded', function () {
  const eventsContainer = document.getElementById('events');

  // Sample event data (you can replace this with real data)
  const events = [
    { date: '2023-11-25', title: 'Swami Vivekanand Chhatra Sansad 2023', description: 'AGENDAS:<br>1. A healthy working environment.<br>2. Strengthening animal welfare law.<br>3. Prohibition of religous propagation by Elected Political Leaders.', dutyleave: 'YES', timing: '09:00 Am Onwards', location: 'https://www.google.co.in/maps/dir//Subharti+Law+College,+Subhartpuram,+Meerut,+Uttar+Pradesh+250002/@28.9559035,77.6360283,18.28z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390c66bc226199f9:0x6464b59b73ccd7c0!2m2!1d77.6370066!2d28.9565575?entry=ttu', venue: 'Subharti LAW College' },
    { date: '2023-12-04', title: 'Intercollegiate Sport events', description: 'University is Organizing the Intercollegiate Sport events. The Faculty of Management and Commerce, FOMC (AVGSCMC) is Hosting the "Kabaddi Tournament"<br>Rules for Participation:<br>1. Registration Starts: 24-Nov-2023 onwards.<br>2. Entry fees for each team is Rs.600.<br>3. Only One team will be considered from each college.<br>4. Maximum members in each team should be not more than 12 players.(Only 7 players per team are allowed on the field of play at one time.)<br>5. Last date of Entry is 01-12-2023.', dutyleave: 'Yes', timing: '09:00 AM Onwards ', location: 'https://www.google.co.in/maps/dir//General+Mohan+Singh+Play+Ground,+Subharti+university,+NH-58,+Delhi-Haridwar,+NH58,+Meerut,+Uttar+Pradesh+250005/@28.9560192,77.6331906,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390c677b6876847b:0x7b6df41207fca90b!2m2!1d77.6357655!2d28.9560192?entry=ttu', venue: 'General Mohan Singh Subharti Play Ground.' },

    { date: '2023-12-07', title: 'Badminton Tournament', description: 'The Faculty of Engineering and Technology,  is Hosting the "Badminton Tournament.<br>Rules for Participation:<br>1. Registration Starts: 01-Dec-2023  onwards.<br>2. Entry fees for each team are Rs.400. (Boys and Girls separately).<br>3. Only One  team of boys and Girls will be considered from each college.<br>4. Maximum members in each team should be not more than 3 to 5 players<br>5. Matches will be singles, Doubles. (No Mix doubles)<br>6. Games will be on Knock out basis.<br>7. Last date of Entry is 05-12-2023.', dutyleave: 'YES', timing: '08:00 AM Onwards ', location: 'https://www.google.co.in/maps/dir//Subharti+Institute+of+Technology+and+Engineering,+Subhartipuram,+NH-58+Delhi-Haridwar,+NH58,+Meerut,+Uttar+Pradesh+250005/@28.9575639,77.6312775,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390c668f40000001:0x9ea5e359307f4608!2m2!1d77.6338524!2d28.9575639?entry=ttu', venue: 'Faculty of Engineering and Technology  (Badminton court)' },

    { date: '2023-12-28', title: 'Subharti Diwas', description: 'Dept. of Public Health Dentistry is organizing activities on the occasion of Veer Bal Diwas (Subharti Diwas) onVEER BAL DIWAS About the Event: We are organizing few Events are as follows:<br>1.Guest Lecture<br> 2. Quiz competition<br> 3. Script Writing competition', dutyleave: 'YES', timing: '9:00 AM Onwards', location: 'https://www.google.co.in/maps/dir//Subharti+Dental+College,+Swami+Vivekanand+Subharti+University+Subharti+Puram,+NH-58,+Delhi+Haridwar,+NH58,+Meerut,+Uttar+Pradesh+250005/@28.9592512,77.6377686,20.36z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390c66bdb931d307:0x3a5198841d7ac87e!2m2!1d77.6378738!2d28.9592695?entry=ttu', venue: 'LT4(SDC&H)' },


    
    {
      date: '2023-12-30', title: 'Essay Competition', description: 'As per the guidelines of the government and the letter received from the U.P. Higher Education Commission to organize Road Safety Pakhwara by the Educational Institutions. In this regard the Keral Verma Subharti College of Science is organizing “Essay Competition" on the topic "Sadak Suraksa”.'
      , dutyleave: 'YES', timing: '12:00 PM onwards', location: 'https://www.google.co.in/maps/dir//XJ4M%2BVQ5+Keral+Verma+Subharti+College+of+Science,+Meerut,+Uttar+Pradesh+250002/@28.957254,77.6340215,19.39z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390c67a5f26aa431:0x6d73ee4d5ea465c6!2m2!1d77.6344846!2d28.9571312?entry=ttu', venue: 'Conference Hall, KVSCOD'
    },
// Add more events here by format given below
// { date: '', title: '', description: '', dutyleave: '', timing: '', location: '', venue: '' },
  ];

  // Function to display events
  function displayEvents() {
    eventsContainer.innerHTML = '';

    events.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('event');
      const eventDate = new Date(event.date);
      const formattedDate = eventDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

      eventElement.innerHTML = `
        <div class='e1'>
       <p class='date'><h2> ${formattedDate}</h2></p>
         
        <p class='title'> ${event.title}</p>
         
         <p class='description'>${event.description}</p>
         
         <p class="dl">Duty Leave:${event.dutyleave}</p>
         
         <p class="time"><img src='https://th.bing.com/th/id/OIP.z1QT7_XPt3d0ympQwdTrZgHaHa?rs=1&pid=ImgDetMain' width='25' height='25' alter='Timing|'>${event.timing}</p>
        
         <p class='location'><a target='_blank' href="${event.location}"><img src='https://1.bp.blogspot.com/-nO3qPOtQJ-A/Xwo_LZEYCBI/AAAAAAAABAU/KDoOKCEW7UYWLsdqqKYwk6D8of93VapgACLcBGAsYHQ/s2048/location%2Bicon.png' width='25' height='25' alter='Venue|'>${event.venue}</a></p>
        
         <p class='details'><a target="_blank" href="https://erp.subharti.org/">click here for more details</a></p></div> 
        

         `;


      eventsContainer.appendChild(eventElement);
    });
  }

  displayEvents();
});
