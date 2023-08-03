//vereceğimiz parametrede ki süre tamamlandıktan sonra bir kere çalışması
/*setTimeout(()=>{
console.log("merhaba")
},2000)*/


//her saniye çalışır
/*setInterval(()=>{
console.log("merhaba ben her saniye çalışacağım")
},2000)*/

const sayHi =(cb)=> {
    cb();
};

sayHi(()=>{
    console.log("hello");
});