// function a(){
//     var tot=parseInt(document.getElementById('tot').value);
//     var bunga=parseInt(document.getElementById('bunga').value);
//     // var durasi=parseInt(document.getElementById('durasi').value);
//     var persen=(tot*bunga)/100;
//     var hasil=tot*persen;
//     document.getElementById('hasil').innerHTML=hasil;
// }



function a(){
    var tot=parseInt(document.getElementById('tot').value);
    var bunga=parseInt(document.getElementById('bunga').value);
    // var durasi=parseInt(document.getElementById('durasi').value);
    var persen=(tot/1000000);
    var hasil=persen*15000;
    document.getElementById('hasil').innerHTML=hasil;
    
}

