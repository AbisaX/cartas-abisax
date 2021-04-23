
const appOne = async (url, message = null) => {
    if (url != null) {
        try {
            const ax = await axios(url);
            console.log(ax.data[0].numero);
        } catch (error) {
            if (message != null) {
                console.log(message);
            } else {
                console.log(`Error Not File Url: ${url}`);
            }
        }
    }
}

const login = async (url, id, ic) => {
    try {
        let user = document.getElementById(id).value;
        let clave = document.getElementById(ic).value;
        let yoo = await axios(url);
        if (Array.isArray(yoo.data)) {
            yoo.data.forEach((e, i) => {
                if (e.usuario === user) {
                    if (e.clave === clave) {
                        localStorage.setItem("usuario", e);
                        window.location = "contenido.html";
                    }else{
                        alert("error de clave");
                    }
                }else{
                    alert("error de usuario");
                }
            });
        }
    }catch(error){
console.log("se totio");
    }
}

const butonLogin = (url, id, ic, ib) => {
    let comoquiere = document.getElementById(ib);
    comoquiere.addEventListener("click", () => {
        login(url,id,ic);
    });
}

const yaLogin = ()=>{
if(localStorage.getItem("usuario")==null){
    window.location="index.html";
}
}
