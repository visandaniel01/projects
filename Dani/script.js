document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addButton");
    const sortButton = document.getElementById("sortButton");
    const nameInput = document.getElementById("nameInput");
    const listTextarea = document.getElementById("listTextarea");
    const fileInput = document.getElementById("fileInput");
    const sortedList = document.getElementById("sortedList");
    const count = document.getElementById("count");
  
    let names = [];
  
    addButton.addEventListener("click", function() {
      const name = nameInput.value.trim();
      if (name !== "") {
        names.push(name);
        nameInput.value = "";
      }
    });
  
    listTextarea.addEventListener("input", function() {
      const list = listTextarea.value.trim();
      names = list !== "" ? list.split("\n") : [];
    });
  
    fileInput.addEventListener("change", function(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = function(event) {
        const content = event.target.result.trim();
        names = content !== "" ? content.split("\n") : [];
      };
  
      reader.readAsText(file);
    });
  
    sortButton.addEventListener("click", function() {
        const sortedNames = names.slice().sort();
        sortedList.innerHTML = "";
        
        sortedNames.forEach(function(name) {
          const listItem = document.createElement("p");
          listItem.textContent = name;
          sortedList.appendChild(listItem);
        });
        
        count.textContent = "Numărul de nume sortate: " + sortedNames.length;
        
        // Creare fișier TXT pentru descărcare
        const content = sortedNames.join("\n");
        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        
        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = "sorted_names.txt";
        downloadLink.textContent = "Descărcați lista sortată";
        
        sortedList.appendChild(downloadLink);
      });
    });

    
  