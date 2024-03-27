if("serviceWorker" in navigator){
    navigator.serviceWorker.register("service_worker.js").then(registration=>{
        console.log("SW registered!");
    }).catch(error=>{
        console.log("SW Registration failed");
    });
}
else{
    console.log("not supported");
}