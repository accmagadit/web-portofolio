self.addEventListener("instal",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["./",'192.jpg']);
        })
    );
});