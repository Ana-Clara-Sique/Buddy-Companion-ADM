function uploadFile() {
    const fileInput =document.getElementById('file-upload');
    const fileNameContainer =document.getElementById('file-name');

    const file = fileInput.files[0];

    if (file) {
        fileNameContainer.textContent= `Arquivo selecionado:${file.name}`; 
    }
    else {
        fileNameContainer.textContent= 'nenhum arquivo selecionado';
    }
}

function confirmarAlteracao() {
    const fileInput =document.getElementById('file-upload');
    const fileNameContainer = document.getElementById('file-name');

    const file =file.Input.files[0];

    if(file) {
      alert(`Arquivo ${file.name} selecionado!`);
    }
    else {
        alert(`Por favor, selecione um arquivo.`);
    }
}