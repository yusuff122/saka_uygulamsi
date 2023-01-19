class Translate{

    constructor(saka){
       this.baseUrl = 'https://translation.googleapis.com/';
       this.aranacakCumle = saka;
       this.axiosNesne = axios.create({
           baseURL : this.baseUrl,
           params:{
                target: 'tr',
                key : 'AIzaSyB96aDKn8NY3YsArFFLmLLRN2nI_f6HaMY',
                q:this.aranacakCumle
           }
       });

    }
    async ceviriYap(){

       try {
                const ceviri = await this.axiosNesne.get('language/translate/v2');
                console.log(ceviri.data.data.translations[0]);
                return ceviri.data.data.translations[0].translatedText;
       } catch (error) {
         //    console.log(error);
       }

    }
}

export  function ceviriYapmaMethod(cumle){
  const ceviriYapilmisCumle =  new Translate(cumle).ceviriYap();
  return ceviriYapilmisCumle;
}