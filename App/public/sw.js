self.addEventListener("fecth", (event)=>{
    console.log('fetchin : ', event.request.url)
});