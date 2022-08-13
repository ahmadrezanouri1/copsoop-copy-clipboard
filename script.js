const copybtn =  document.querySelector('button');
const textarea=    document.querySelector('textarea');

copybtn.addEventListener('click',function () {
    textarea.select();
    let textvalue = textarea.value;
    

    navigator.clipboard.writeText(textvalue);
    copybtn.innerText = "کپی شد";
    copybtn.style.backgroundColor = "#DBDFFD"
    copybtn.style.color = "#242F9B"
    setTimeout(() => {
        copybtn.innerText = "کپی کن";
        copybtn.style.backgroundColor ="#646FD4"
        copybtn.style.color = "#DBDFFD"
    }, 1500);
})
