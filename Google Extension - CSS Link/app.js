const categories = document.querySelectorAll('.category');

categories.forEach(function(category) {
    const btn = category.querySelector('.category-btn');
    btn.addEventListener('click', function() {
        
        categories.forEach(function(item) {
            if (item !== category) {
                item.classList.remove('show-links');
            }
        })

        category.classList.toggle('show-links');
    })
})