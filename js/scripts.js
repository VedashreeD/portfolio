        //update contact information based on the selection
        function changeContactInfo(contactType) {
            var email = document.querySelector('.gmail');
            var phone = document.querySelector('.phone');
            var linkedin = document.querySelector('.linkedin');
	    var youtube = document.querySelector('.youtube');

            //reset all to hidden
            email.classList.add('hidden');
            phone.classList.add('hidden');
            linkedin.classList.add('hidden');
	    youtube.classList.add('hidden');

            //show only clicked contact detail
            if (contactType === 'email') {
                email.innerHTML = 'dasaraveda@gmail.com';
                email.classList.remove('hidden');
		phone.innerHTML = 'Phone';
		linkedin.innerHTML = 'LinkedIn';
		youtube.innerHTML = 'Youtube';
            } else if (contactType === 'phone') {
                phone.innerHTML = '+1(614)568-3032';
		phone.classList.remove('hidden');
		email.innerHTML = 'Email';
		linkedin.innerHTML = 'LinkedIn';
		youtube.innerHTML = 'Youtube';
            } else if (contactType === 'linkedin') {
                linkedin.innerHTML = '<a href="https://www.linkedin.com/in/veda-dasara-97a137121/" target="_blank" rel="noopener noreferrer">Visit Linkedin Page</a>';
                linkedin.classList.remove('hidden');
		email.innerHTML = 'Email';
		phone.innerHTML = 'Phone';
		youtube.innerHTML = 'Youtube';
            } else {
                youtube.innerHTML = '<a href="https://www.youtube.com/@vevedee" target="_blank" rel="noopener noreferrer">Checkout youtube channel</a>';
                youtube.classList.remove('hidden');
		email.innerHTML = 'Email';
		phone.innerHTML = 'Phone';
		linkedin.innerHTML = 'LinkedIn';
	    }
        }

        //close all contact info when clicked outside
        document.addEventListener('click', function(event) {
            var contactBox = document.querySelector('.contact-box');
            if (!contactBox.contains(event.target)) {
                var email = document.querySelector('.gmail');
                var phone = document.querySelector('.phone');
                var linkedin = document.querySelector('.linkedin');
		var youtube = document.querySelector('.youtube');

                //reset to initial state
                email.innerHTML = 'Email';
                phone.innerHTML = 'Phone';
                linkedin.innerHTML = 'LinkedIn';
		youtube.innerHTML = 'Youtube';

                //hide all details
                email.classList.add('hidden');
                phone.classList.add('hidden');
                linkedin.classList.add('hidden');
		youtube.classList.add('hidden');
            }
        });
