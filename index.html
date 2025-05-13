// 等待文档加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    let heroBottom = 0;
    
    if (heroSection) {
        heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    }
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - header.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 树洞发布功能
    const thoughtForm = document.querySelector('.thought-form');
    if (thoughtForm) {
        const textarea = thoughtForm.querySelector('textarea');
        const postBtn = thoughtForm.querySelector('.post-btn');
        const anonymousCheckbox = thoughtForm.querySelector('#anonymous');
        
        postBtn.addEventListener('click', function() {
            const content = textarea.value.trim();
            
            if (!content) {
                alert('请输入内容后再发布！');
                return;
            }
            
            // 创建新的树洞卡片
            createNewThought(content, anonymousCheckbox.checked);
            
            // 清空表单
            textarea.value = '';
            anonymousCheckbox.checked = false;
        });
    }
    
    // 创建新树洞的函数
    function createNewThought(content, isAnonymous) {
        // 获取树洞容器
        const thoughtsSection = document.querySelector('.thoughts-section');
        const formElement = thoughtsSection.querySelector('.thought-form');
        
        // 创建新的树洞卡片元素
        const newThought = document.createElement('div');
        newThought.className = 'card thought-card';
        
        // 获取当前日期
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
        
        // 设置树洞内容
        newThought.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">${isAnonymous ? '匿名用户' : '我'}</h3>
                <span class="card-date">${formattedDate}</span>
            </div>
            <div class="card-body">
                <p>${content}</p>
            </div>
            <div class="card-footer">
                <span class="tag">新发布</span>
                <a href="#" class="read-more">0条评论</a>
            </div>
        `;
        
        // 将新树洞添加到列表的顶部（表单之后）
        thoughtsSection.insertBefore(newThought, formElement.nextSibling);
        
        // 添加动画效果
        setTimeout(() => {
            newThought.style.animation = 'fadeIn 0.5s ease-in-out';
        }, 10);
    }
    
    // 标签筛选功能
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            
            const selectedTag = this.textContent;
            alert(`你选择了标签: ${selectedTag}`);
            
            // 这里可以实现标签筛选逻辑
            // 比如筛选出包含该标签的所有博客文章或树洞
        });
    });
    
    // 响应式导航菜单
    const navToggleButton = document.createElement('button');
    navToggleButton.className = 'nav-toggle';
    navToggleButton.innerHTML = '<span></span><span></span><span></span>';
    
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('nav ul');
    
    if (navContainer && navMenu) {
        navContainer.insertBefore(navToggleButton, navMenu);
        
        navToggleButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // 添加动画效果的CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .thought-card {
            animation: fadeIn 0.5s ease-in-out;
        }
        
        .nav-toggle {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            padding: 10px;
        }
        
        .nav-toggle span {
            display: block;
            width: 25px;
            height: 3px;
            margin: 5px 0;
            background-color: #333;
            transition: all 0.3s ease;
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
        
        @media (max-width: 768px) {
            .nav-toggle {
                display: block;
                position: absolute;
                top: 15px;
                right: 15px;
            }
            
            nav ul {
                display: none;
            }
            
            nav ul.active {
                display: flex;
                flex-direction: column;
                width: 100%;
                text-align: center;
            }
            
            nav ul.active li {
                margin: 10px 0;
            }
        }
    `;
    
    document.head.appendChild(style);
});
