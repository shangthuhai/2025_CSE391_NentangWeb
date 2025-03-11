document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");
  
    // Thêm công việc mới
    addBtn.addEventListener("click", function () {
      let taskText = taskInput.value.trim();
      if (taskText === "") return;
  
      let li = document.createElement("li");
      li.innerHTML = `<span>${taskText}</span> 
                      <button class="delete-btn">Xóa</button>`;
      
      // Đánh dấu hoàn thành khi click vào tên công việc
      li.querySelector("span").addEventListener("click", function () {
        this.classList.toggle("completed");
      });
  
      // Xóa công việc
      li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
      });
  
      taskList.appendChild(li);
      taskInput.value = ""; // Xóa input sau khi nhập
    });
  });
  