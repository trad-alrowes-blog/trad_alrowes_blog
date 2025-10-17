// =========================================
// وظيفة تبديل الوضع بين الفاتح والمظلم
// =========================================

function toggleDarkMode() {
    // 1. تحديد وسم body (الهيكل الرئيسي للصفحة)
    const body = document.body;
    const toggleButton = document.getElementById('mode-toggle');
    const lightIcon = toggleButton.querySelector('.light-icon');
    const darkIcon = toggleButton.querySelector('.dark-icon');

    // 2. تبديل فئة 'dark-mode'
    // إذا كانت الفئة موجودة يتم إزالتها، وإذا لم تكن موجودة يتم إضافتها.
    body.classList.toggle('dark-mode');

    // 3. تحديث الأيقونة وحفظ التفضيل
    const isDarkMode = body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        // الوضع المظلم نشط: اعرض القمر
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline';
        localStorage.setItem('mode', 'dark'); 
    } else {
        // الوضع الفاتح نشط: اعرض الشمس
        lightIcon.style.display = 'inline';
        darkIcon.style.display = 'none';
        localStorage.setItem('mode', 'light');
    }
}

// 4. ربط الوظيفة بزر التبديل
// عند النقر على الزر، يتم تنفيذ وظيفة toggleDarkMode
document.getElementById('mode-toggle').addEventListener('click', toggleDarkMode);


// 5. التحقق من التفضيل المحفوظ عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode');
    
    // إذا كان الوضع المحفوظ هو "dark"
    if (savedMode === 'dark') {
        const body = document.body;
        const toggleButton = document.getElementById('mode-toggle');
        
        // يجب أن نتحقق من وجود الزر قبل محاولة التلاعب بأيقوناته
        if (toggleButton) {
            const lightIcon = toggleButton.querySelector('.light-icon');
            const darkIcon = toggleButton.querySelector('.dark-icon');
            
            // إضافة الفئة وتحديث الأيقونة بدون تشغيل التبديل الكامل
            body.classList.add('dark-mode');
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'inline';
        }
    }
});
