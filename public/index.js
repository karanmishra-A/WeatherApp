const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const weather = document.getElementById('tempStatus');
const dataHide = document.querySelector('.middleLayer');


const getInfo = async(event) =>{
    event.preventDefault();
    let cityValue = cityName.value;
    if(cityValue === ""){
        city_name.innerText = `Please write City Name Before Search`;
        dataHide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=25f73ad68fd7f875dda36c9bdbb48578`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const temperatureStatus = arrData[0].weather[0].main;
            if (temperatureStatus == "Clear") {
                weather.innerHTML =
                  "<i class = 'fas fa-sun' style = 'color:#eccc68;'></i>";
              } else if (temperatureStatus == "Clouds") {
                weather.innerHTML =
                  "<i class = 'fas fa-cloud' style = 'color:#dfe4ea;'></i>";
              } else if (temperatureStatus == "Rain") {
                weather.innerHTML =
                  "<i class = 'fas fa-cloud-rain' style = 'color:#a4b0be;'></i>";
              } else {
                weather.innerHTML =
                  "<i class = 'fas fa-sun' style = 'color:#eccc68;'></i>";
              }

              dataHide.classList.remove('data_hide');

        }
        catch{
            city_name.innerText = `Please write City Name properly`;
            dataHide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);