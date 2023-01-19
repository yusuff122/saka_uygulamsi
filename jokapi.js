class JokeApi{

      constructor() {
          this.baseUrl = 'https://api.chucknorris.io';
          this.axiosNesne = axios.create({
              baseURL:  this.baseUrl,

          })
      }
      async randomSakaGetir(){
         const sakaResponse =  await this.axiosNesne.get('/jokes/random');
         console.log(sakaResponse.data.value);
      }
}
export  function sakaGetir(){
    const getirilenSaka =  new JokeApi().randomSakaGetir();
    return getirilenSaka;
}