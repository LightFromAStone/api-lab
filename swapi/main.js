const getResidents = document.querySelector('button');

getResidents.addEventListener('click', (evt) => {
   console.log('Button Clicked');
   axios.get('https://swapi.dev/api/planets/?search=alderaan')
      .then(res => {
         const residents = res.data.results[0].residents;
         // console.log(residents);
         residents.forEach(resident => {
            // console.log(resident);
            axios.get(resident)
               .then(res => {
                  let name = document.createElement('h2');
                  name.innerText = res.data.name;
                  // console.log(res.data.name);
                  document.querySelector('body').appendChild(name);
               })
               .catch(error => console.log(error))
         });
      })
      .catch(error => console.log(error))
});