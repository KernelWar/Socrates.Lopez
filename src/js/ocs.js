import './common'
import './../scss/ocs.scss'


fetch("https://api.github.com/repos/KernelWar/OneConnection-server/releases/latest")
.then(function(response){
    var element = document.getElementById("link-download")    
    response.json().then(data=>{
        if(data.assets){            
            element.href = data.assets[1].browser_download_url
        }else{
            document.getElementById("btn-download").innerText = "De momento no hay una versión disponible"
            element.href = "https://github.com/KernelWar/OneConnection-server/releases"
        }
    })
})