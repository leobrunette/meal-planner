

function getUploadedFile(){
    var fileUpload = document.getElementById("file-upload");
    var file = fileUpload.files;
    if (file){
        console.log("file is not null.");
        var fileReader = new FileReader();
        fileReader.onload(ev) {
            var data = ev.target.result;
        };

        var workbook = XLXS.read()
    }
}