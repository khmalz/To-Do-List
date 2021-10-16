const buttonTambah = document.querySelector(".button-tambah");
const inputTambah = document.querySelector(".inputby");
var minChar = 3;

inputTambah.addEventListener("keypress", function (e) {
   // Menambahkan list nya
   if (e.key === "Enter") {
      if (inputTambah.value == null || inputTambah.value == "") {
         alert("Isi dulu");
         inputTambah.value = "";
      } else if (inputTambah.value.length < minChar) {
         alert("Minimal isi dengan 3 huruf");
      } else {
         let list = "";
         list += listB();
         const ul = document.querySelector(".list-group");
         ul.insertAdjacentHTML("afterbegin", list);
         //   Menghapus teks dalam input
      }
      inputTambah.value = "";
   }
});

buttonTambah.addEventListener("click", function () {
   if (inputTambah.value == null || inputTambah.value == "") {
      alert("Isi dulu");
   } else if (inputTambah.value.length < minChar) {
      alert("Minimal isi dengan 3 huruf");
   } else {
      let list = "";
      list += listB();
      const ul = document.querySelector(".list-group");
      ul.insertAdjacentHTML("afterbegin", list);
      //   Menghapus teks dalam input
   }
   inputTambah.value = "";
});

function remove(el) {
   el.parentElement.remove();
}

function listB() {
   return `<li class="list-group-item d-flex justify-content-between align-items-start">
   <div class="ms-2 my-auto me-auto judul">
      <div class="fw-bold">${inputTambah.value}</div>
   </div>
   <button class="btn btn-danger hapus" onclick="remove(this)" type="button" id="button-addon2"><i class="bi bi-trash-fill"></i></button>
</li>`;
}
