(() => {
    fetch("https://api.github.com/repos/techstackbr/LadingPage/commits/main")
        .then(res => res.json())
        .then(data => {
            console.log('Message->', data.commit.message);
            document.getElementById("versao").textContent = 'Versão: '+data.sha.substring(0, 7);
        }).catch((err) => {
            console.log(err);
            document.getElementById("versao").textContent = '';
        });
})();
