
console.log('Client side JS file is loaded');
const renderLoader = ()=>{
    const result = document.querySelector('.result');
const loader  = `<div class="lds-roller">
<div></div><div></div><div></div><div></div><div>

</div><div></div><div></div><div></div></div>`;
    result.insertAdjacentHTML("beforeend",loader );
};

const renderResult = (data)=>{
    const result = document.querySelector('.result');

    if(data.error){
        const errorMessage = `
    <h3>${data.error}</h3>
        `;

        result.insertAdjacentHTML("beforeend", errorMessage);
    }
    else{
        const resultData =`City is : ${data.location} and temperature is : ${data.forecast.temperature}`;

        result.insertAdjacentHTML("beforeend",resultData);
    }
};
const clearResult = ()=>{
    document.querySelector('.result').innerHTML ='';
}
fetch('https://puzzle.mead.io/puzzle')
    .then((response)=>{
 response.json()
     .then((data)=>{
         console.log(data);
     });

    });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
weatherForm.addEventListener('submit',(event)=>{
   event.preventDefault();

   renderLoader();

    fetch(`http://localhost:3000/weather?address=${search.value}`)
        .then((response)=>{

            response.json()
                .then((data)=>{
                    clearResult();
                  renderResult(data);
                  console.log(data);
                })
                .catch((e)=>{
                    console.log(e,'InSide');
                });

        }).catch((e)=>{
        console.log(e, 'OutSide');
    });
    console.log('searching');

});