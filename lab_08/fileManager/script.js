let files = []; 
        let categories = {
            "Documents": [
                { name: "Document1.txt", type: "text/plain" },
                { name: "Document2.txt", type: "text/plain" },
                { name: "Document3.txt", type: "text/plain" }
            ],
            "Files": [
                { name: "File1.zip", type: "application/zip" },
                { name: "File2.zip", type: "application/zip" },
                { name: "File3.zip", type: "application/zip" }
            ],
            "Photos": [
                { name: "Photo1.jpg", type: "image/jpeg" },
                { name: "Photo2.jpg", type: "image/jpeg" },
                { name: "Photo3.jpg", type: "image/jpeg" }
            ]
        };
 
        function uploadFiles() { 
            const input = document.getElementById('fileInput'); 
            for (let i = 0; i < input.files.length; i++) { 
                files.push(input.files[i]); 
            } 
            displayFiles(files); 
            input.value = ''; 
        } 
 
        function displayFiles(fileArray) { 
            const fileList = document.getElementById('fileList'); 
            fileList.innerHTML = ''; 
            fileArray.forEach((file, index) => { 
                const fileItem = document.createElement('div'); 
                fileItem.className = 'file-item'; 
                fileItem.innerHTML = ` 
                    <span>${file.name}</span> 
                    <button onclick="deleteFile(${index})">Delete</button> 
                    <button onclick="renameFile(${index})">Rename</button> 
                `; 
                fileList.appendChild(fileItem); 
            }); 
        } 
 
        function deleteFile(index) { 
            files.splice(index, 1); 
            displayFiles(files); 
        } 
 
        function renameFile(index) { 
            const newName = prompt("Enter new name:", files[index].name); 
            if (newName) { 
                const file = new File([files[index]], newName, { type: files[index].type }); 
                files[index] = file; 
                displayFiles(files); 
            } 
        } 

        function showCategory(category) {
            if (categories[category]) {
                displayFiles(categories[category]);
            } else {
                alert("No files found for this category.");
            }
        }