const list = document.getElementById('list');
const resetBtn = document.getElementById('resetBtn');
let draggedItem = null;


// When user starts dragging an item
list.addEventListener('dragstart', function(e) {
  draggedItem = e.target;
  e.target.classList.add('dragging');
});


// When user stops dragging
list.addEventListener('dragend', function(e) {
  e.target.classList.remove('dragging');
  updateNumbers();
});


// When dragging over the list
list.addEventListener('dragover', function(e) {
  e.preventDefault();
  const afterElement = getDragAfterElement(list, e.clientY);
  
  if (afterElement == null) {
    list.appendChild(draggedItem);
  } else {
    list.insertBefore(draggedItem, afterElement);
  }
});


// Add highlight when mouse enters an item
list.addEventListener('dragenter', function(e) {
  if (e.target.classList.contains('list-item') && e.target !== draggedItem) {
    e.target.classList.add('drag-over');
  }
});


// Remove highlight when mouse leaves an item
list.addEventListener('dragleave', function(e) {
  if (e.target.classList.contains('list-item')) {
    e.target.classList.remove('drag-over');
  }
});


// When item is dropped
list.addEventListener('drop', function(e) {
  e.preventDefault();
  const items = list.querySelectorAll('.list-item');
  items.forEach(item => {
    item.classList.remove('drag-over');
  });
});


// Find the correct position to insert the dragged item
function getDragAfterElement(container, mouseY) {
  const items = [...container.querySelectorAll('.list-item:not(.dragging)')];
  let closestItem = null;
  let closestOffset = Number.NEGATIVE_INFINITY;
  
  items.forEach(item => {
    const box = item.getBoundingClientRect();
    const offset = mouseY - box.top - box.height / 2;
    
    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestItem = item;
    }
  });
  
  return closestItem;
}


// Update item numbers after reordering
function updateNumbers() {
  const items = list.querySelectorAll('.list-item');
  for (let i = 0; i < items.length; i++) {
    const numberSpan = items[i].querySelector('.number');
    numberSpan.textContent = i + 1;
  }
}


// Reset to original order
resetBtn.addEventListener('click', function() {
  location.reload();
});