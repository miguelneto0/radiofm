function toggleMenu(){
    console.log('menu clicado')
    var lis = document.getElementsByClassName('li-normal')
    console.log(lis)
    // if (lis[0].style.display = "none"){
    //     console.log('esta escondido')
    //     for(let i=0;i<lis.length;i++)
    //         lis[i].style.display = "inline-block"
    // }else if(lis[0].style.display = "inline-block"){
    //     console.log('esta visivel')
    //     for(let i=0;i<lis.length;i++)
    //         lis[i].style.display = "none"
    // }

    switch (lis[0].style.display) {
        case "none":
            console.log('esta escondido')
            for(let i=0;i<lis.length;i++)
                lis[i].style.display = "inline-block"
            break;
        case "inline-block":
            console.log('esta visivel')
            for(let i=0;i<lis.length;i++)
                lis[i].style.display = "none"
            break;
        default:
            break;
    }
}