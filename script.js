function openTab(event, tabName) {
    // 1. Знаходимо всі блоки з контентом (div з класом .tab-content)
    const contents = document.getElementsByClassName("tab-content");
    
    // 2. Робимо їх всі невидимими (прибираємо клас 'active')
    for (let content of contents) {
        content.classList.remove("active");
    }

    // 3. Знаходимо всі кнопки вкладок
    const buttons = document.getElementsByClassName("tab-btn");
    
    // 4. Прибираємо підсвічування з усіх кнопок
    for (let btn of buttons) {
        btn.classList.remove("active");
    }

    // 5. Вмикаємо контент тієї вкладки, на яку натиснули (за ID)
    document.getElementById(tabName).classList.add("active");
    
    // 6. Додаємо підсвічування кнопці, на яку натиснули
    event.currentTarget.classList.add("active");
}