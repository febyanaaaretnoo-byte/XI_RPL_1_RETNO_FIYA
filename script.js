function tampilkanNama(){
    document.getElementById("namaAnggota").innerHTML=
    `

    <ol> 
        <style="list-style-type: decimal;
        padding-left:5%;">
        <li>Retno (Feby@gmail.com)</li>
        <li>Fiya (Fiya@gmail.com)</li>
    </ol>

        <button onclick="location.reload()">
            Tutup Kembali
        </button>
 `;
}
function pesan() {
    alert("Akan segera hadir");
}