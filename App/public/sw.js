// console.log("----------------------wwwwj-------------------------------");
self.addEventListener("fecth", (event)=>{
    console.log('fetchin : ', event.request.url);

    // if(event.request.mode === 'navigate')
    // {
    //     event.respondWith((async ()=>{
    //         return new Response("HELLO WORLD")
    //     })());
    // }
});