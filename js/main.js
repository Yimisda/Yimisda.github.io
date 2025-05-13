// 树洞发布功能
document.addEventListener('DOMContentLoaded', function() {
    const thoughtForm = document.querySelector('.thought-form');
    const thoughtTextarea = thoughtForm.querySelector('textarea');
    const postButton = thoughtForm.querySelector('.post-btn');
    const anonymousCheckbox = document.getElementById('anonymous');
    const thoughtsSection = document.querySelector('.thoughts-section');
    
    // 模拟树洞发布功能
    postButton.addEventListener('click', function() {
        const thoughtText = thoughtTextarea.value.trim();
        if (!thoughtText) return;
        
        // 获取当前日期
        const now = new Date();
        const dateString = now.getFullYear() + '-' + 
                          String(now.getMonth() + 1).padStart(2, '0') + '-' + 
                          String(now.getDate()).padStart(2, '0');
        
        // 创建新树洞卡片
        const newThought = document.createElement('div');
        newThought.className = 'card thought-card';
        
        // 设置树洞内容
        newThought.innerHTML = `
            
                ${anonymousCheckbox.checked ? '匿名用户' : '你的姓名'}
                ${dateString}
            
            
                ${thoughtText}
            
            
                新发布
                0条评论
            
        `;
        
        // 插入到树洞区域的最上方（除了表单之外）
        thoughtsSection.insertBefore(newThought, thoughtsSection.children[1].nextSibling);
        
        // 清空输入框
        thoughtTextarea.value = '';
    });
});

// 平滑滚动效果
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
});
