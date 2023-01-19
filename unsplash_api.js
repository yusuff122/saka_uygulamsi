class SplashApi{

                constructor() {
                    this.baseUrl = 'https://api.unsplash.com';
                    this.clientID = 'Client-ID YF042NcPBiow9aFRvwDnCtutNyNn7CgQPe-5y3Mh7M0'
                    this.axiosNesne = axios.create({
                        baseURL:  this.baseUrl,
                        headers:{
                           Authorization: this.clientID
                        }
                    })
                }
                async randomResimGetir(){
                     try {
                           const resimred =  await this.axiosNesne.get('/photos/random');
                           console.log(resimred.data.urls.regular);

                      } catch (error) {
                          console.log(error);
                     }

                }
          }

export  function resimGetir (){
    const geirilenResim =  new SplashApi().randomResimGetir();
    return geirilenResim;
}