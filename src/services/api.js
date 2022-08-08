const KEY = '2ed634b23fe34b9889f131121220808';

const fetchData = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`
    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();
    return data;
};

export default fetchData;