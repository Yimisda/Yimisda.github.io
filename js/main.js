// 等待文档加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 全局变量用于存储树洞数据
    let thoughtsData = [];
    
    // 生成唯一ID的函数
    function generateId() {
        return Date.now() + Math.floor(Math.random() * 1000);
    }
    
    // 初始化从本地存储加载树洞数据
    function initThoughtsData() {
        const savedThoughts = localStorage.getItem('treeHollowData');
        if (savedThoughts) {
            try {
                thoughtsData = JSON.parse(savedThoughts);
            } catch (e) {
                console.error('解析本地存储的树洞数据失败', e);
                thoughtsData = [];
            }
        }
    }
    
    // 保存树洞数据到本地存储
    function saveThoughtsData() {
        localStorage.setItem('treeHollowData', JSON.stringify(thoughtsData));
    }
    
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
    
    // 创建确认对话框
    function createConfirmDialog(message, onConfirm) {
        const overlay = document.createElement('div');
        overlay.className = 'dialog-overlay';
        
        const dialog = document.createElement('div');
        dialog.className = 'dialog';
        
        const dialogContent = document.createElement('div');
        dialogContent.className = 'dialog-content';
        
        const messageElem = document.createElement('p');
        messageElem.textContent = message;
        
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'dialog-buttons';
        
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'dialog-btn cancel-btn';
        cancelBtn.textContent = '取消';
        
        const confirmBtn = document.createElement('button');
        confirmBtn.className = 'dialog-btn confirm-btn';
        confirmBtn.textContent = '确认';
        
        // 组装对话框
        buttonsContainer.appendChild(cancelBtn);
        buttonsContainer.appendChild(confirmBtn);
        
        dialogContent.appendChild(messageElem);
        dialogContent.appendChild(buttonsContainer);
        
        dialog.appendChild(dialogContent);
        overlay.appendChild(dialog);
        
        document.body.appendChild(overlay);
        
        // 添加事件处理
        cancelBtn.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
        
        confirmBtn.addEventListener('click', function() {
            onConfirm();
            document.body.removeChild(overlay);
        });
        
        return overlay;
    }
    
    // 创建通知提示
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // 显示通知
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // 3秒后隐藏通知
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // 渲染单个树洞
    function renderThought(thought) {
        const thoughtElem = document.createElement('div');
        thoughtElem.className = 'card thought-card';
        thoughtElem.dataset.id = thought.id;
        
        // 是否是当前用户发布的（非匿名或者匿名但是是自己发的）
        const isCurrentUser = !thought.isAnonymous || (thought.isAnonymous && thought.isCurrentUser);
        
        thoughtElem.innerHTML = `
            <div class="card-header">
                <h3 class="card-title">${thought.isAnonymous ? '匿名用户' : '我'}</h3>
                <span class="card-date">${thought.date}</span>
                ${isCurrentUser ? '<div class="thought-actions"><button class="edit-btn">编辑</button><button class="delete-btn">删除</button></div>' : ''}
            </div>
            <div class="card-body">
                <p class="thought-content">${thought.content}</p>
                ${isCurrentUser ? '<textarea class="edit-textarea" style="display: none;">' + thought.content + '</textarea>' : ''}
                ${isCurrentUser ? '<div class="edit-actions" style="display: none;"><button class="save-btn">保存</button><button class="cancel-btn">取消</button></div>' : ''}
            </div>
            <div class="card-footer">
                <div class="tag-container">
                    <span class="tag">${thought.tag || '树洞'}</span>
                    <span class="like-counter" title="点赞数"><i class="like-icon">♥</i> <span class="like-count">${thought.likes || 0}</span></span>
                </div>
                <div class="action-links">
                    <a href="#" class="like-btn">${thought.liked ? '取消点赞' : '点赞'}</a>
                    <a href="#" class="comment-toggle">${thought.comments ? thought.comments.length : 0}条评论</a>
                </div>
            </div>
            <div class="comments-section" style="display: none;">
                <div class="comments-list">
                    ${thought.comments ? thought.comments.map(comment => `
                        <div class="comment">
                            <div class="comment-header">
                                <span class="comment-author">${comment.author}</span>
                                <span class="comment-date">${comment.date}</span>
                            </div>
                            <div class="comment-content">${comment.content}</div>
                        </div>
                    `).join('') : ''}
                </div>
                <div class="comment-form">
                    <textarea placeholder="写下你的评论..."></textarea>
                    <button class="post-comment-btn">发布评论</button>
                </div>
            </div>
        `;
        
        return thoughtElem;
    }
    
    // 渲染所有树洞
    function renderAllThoughts() {
        const thoughtsSection = document.querySelector('.thoughts-section');
        const formElement = thoughtsSection.querySelector('.thought-form');
        
        // 移除现有的树洞（除了表单）
        document.querySelectorAll('.thought-card').forEach(card => card.remove());
        
        // 按照日期降序排序树洞
        const sortedThoughts = thoughtsData.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // 渲染每个树洞
        sortedThoughts.forEach(thought => {
            const thoughtElem = renderThought(thought);
            thoughtsSection.insertBefore(thoughtElem, formElement.nextSibling);
            
            // 添加动画效果
            setTimeout(() => {
                thoughtElem.style.animation = 'fadeIn 0.5s ease-in-out';
            }, 10);
        });
        
        // 添加事件监听器
        addThoughtEventListeners();
    }
    
    // 添加树洞的事件监听器
    function addThoughtEventListeners() {
        // 删除按钮事件
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card = this.closest('.thought-card');
                const thoughtId = card.dataset.id;
                
                createConfirmDialog('确定要删除这条树洞吗？', function() {
                    // 从数据中删除
                    thoughtsData = thoughtsData.filter(t => t.id != thoughtId);
                    saveThoughtsData();
                    
                    // 从DOM中删除，带动画效果
                    card.style.animation = 'fadeOut 0.3s ease-in-out forwards';
                    setTimeout(() => {
                        card.remove();
                    }, 300);
                    
                    showNotification('树洞已成功删除！');
                });
            });
        });
        
        // 编辑按钮事件
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card = this.closest('.thought-card');
                const contentP = card.querySelector('.thought-content');
                const textarea = card.querySelector('.edit-textarea');
                const editActions = card.querySelector('.edit-actions');
                
                // 显示编辑界面
                contentP.style.display = 'none';
                textarea.style.display = 'block';
                editActions.style.display = 'flex';
                textarea.focus();
            });
        });
        
        // 保存编辑事件
        document.querySelectorAll('.save-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card = this.closest('.thought-card');
                const thoughtId = card.dataset.id;
                const contentP = card.querySelector('.thought-content');
                const textarea = card.querySelector('.edit-textarea');
                const editActions = card.querySelector('.edit-actions');
                
                const newContent = textarea.value.trim();
                if (!newContent) {
                    showNotification('内容不能为空！', 'error');
                    return;
                }
                
                // 更新数据
                const thoughtIndex = thoughtsData.findIndex(t => t.id == thoughtId);
                if (thoughtIndex !== -1) {
                    thoughtsData[thoughtIndex].content = newContent;
                    saveThoughtsData();
                    
                    // 更新显示
                    contentP.textContent = newContent;
                    contentP.style.display = 'block';
                    textarea.style.display = 'none';
                    editActions.style.display = 'none';
                    
                    showNotification('树洞已成功更新！');
                }
            });
        });
        
        // 取消编辑事件
        document.querySelectorAll('.cancel-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card = this.closest('.thought-card');
                const contentP = card.querySelector('.thought-content');
                const textarea = card.querySelector('.edit-textarea');
                const editActions = card.querySelector('.edit-actions');
                
                // 还原编辑前状态
                contentP.style.display = 'block';
                textarea.style.display = 'none';
                editActions.style.display = 'none';
                
                // 还原文本内容
                const thoughtId = card.dataset.id;
                const thought = thoughtsData.find(t => t.id == thoughtId);
                if (thought) {
                    textarea.value = thought.content;
                }
            });
        });
        
        // 点赞按钮事件
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                const card = this.closest('.thought-card');
                const thoughtId = card.dataset.id;
                const likeCount = card.querySelector('.like-count');
                
                // 更新数据
                const thoughtIndex = thoughtsData.findIndex(t => t.id == thoughtId);
                if (thoughtIndex !== -1) {
                    const thought = thoughtsData[thoughtIndex];
                    thought.liked = !thought.liked;
                    thought.likes = thought.likes || 0;
                    
                    if (thought.liked) {
                        thought.likes++;
                        this.textContent = '取消点赞';
                    } else {
                        thought.likes = Math.max(0, thought.likes - 1);
                        this.textContent = '点赞';
                    }
                    
                    likeCount.textContent = thought.likes;
                    saveThoughtsData();
                }
            });
        });
        
        // 评论切换事件
        document.querySelectorAll('.comment-toggle').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                const card = this.closest('.thought-card');
                const commentsSection = card.querySelector('.comments-section');
                
                // 切换评论区显示状态
                if (commentsSection.style.display === 'none') {
                    commentsSection.style.display = 'block';
                } else {
                    commentsSection.style.display = 'none';
                }
            });
        });
        
        // 发布评论事件
        document.querySelectorAll('.post-comment-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const card = this.closest('.thought-card');
                const thoughtId = card.dataset.id;
                const commentTextarea = card.querySelector('.comment-form textarea');
                const commentsList = card.querySelector('.comments-list');
                const commentToggle = card.querySelector('.comment-toggle');
                
                const content = commentTextarea.value.trim();
                if (!content) {
                    showNotification('评论内容不能为空！', 'error');
                    return;
                }
                
                // 创建新评论
                const currentDate = new Date();
                const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
                
                const newComment = {
                    id: generateId(),
                    author: '我',
                    date: formattedDate,
                    content: content
                };
                
                // 更新数据
                const thoughtIndex = thoughtsData.findIndex(t => t.id == thoughtId);
                if (thoughtIndex !== -1) {
                    if (!thoughtsData[thoughtIndex].comments) {
                        thoughtsData[thoughtIndex].comments = [];
                    }
                    
                    thoughtsData[thoughtIndex].comments.push(newComment);
                    saveThoughtsData();
                    
                    // 更新评论数量显示
                    commentToggle.textContent = `${thoughtsData[thoughtIndex].comments.length}条评论`;
                    
                    // 添加新评论到DOM
                    const commentElem = document.createElement('div');
                    commentElem.className = 'comment';
                    commentElem.innerHTML = `
                        <div class="comment-header">
                            <span class="comment-author">${newComment.author}</span>
                            <span class="comment-date">${newComment.date}</span>
                        </div>
                        <div class="comment-content">${newComment.content}</div>
                    `;
                    
                    commentsList.appendChild(commentElem);
                    commentTextarea.value = '';
                    
                    showNotification('评论已发布！');
                }
            });
        });
    }
    
    // 树洞发布功能
    const thoughtForm = document.querySelector('.thought-form');
    if (thoughtForm) {
        const textarea = thoughtForm.querySelector('textarea');
        const postBtn = thoughtForm.querySelector('.post-btn');
        const anonymousCheckbox = thoughtForm.querySelector('#anonymous');
        
        postBtn.addEventListener('click', function() {
            const content = textarea.value.trim();
            
            if (!content) {
                showNotification('请输入内容后再发布！', 'error');
                return;
            }
            
            // 创建新的树洞数据
            const currentDate = new Date();
            const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
            
            const newThought = {
                id: generateId(),
                content: content,
                date: formattedDate,
                isAnonymous: anonymousCheckbox.checked,
                isCurrentUser: true, // 标记为当前用户发布
                tag: '新发布',
                likes: 0,
                liked: false,
                comments: []
            };
            
            // 添加到数据中
            thoughtsData.unshift(newThought);
            saveThoughtsData();
            
            // 重新渲染所有树洞
            renderAllThoughts();
            
            // 清空表单
            textarea.value = '';
            anonymousCheckbox.checked = false;
            
            showNotification('树洞发布成功！');
        });
    }
    
    // 标签筛选功能
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('tag')) {
            e.preventDefault();
            
            const selectedTag = e.target.textContent;
            
            // 如果点击的是已选中的标签，则取消筛选
            if (e.target.classList.contains('tag-selected')) {
                document.querySelectorAll('.thought-card').forEach(card => {
                    card.style.display = 'block';
                });
                e.target.classList.remove('tag-selected');
                showNotification('已显示所有树洞');
            } else {
                // 移除其他标签的选中状态
                document.querySelectorAll('.tag').forEach(tag => {
                    tag.classList.remove('tag-selected');
                });
                
                // 添加当前标签的选中状态
                e.target.classList.add('tag-selected');
                
                // 筛选树洞
                document.querySelectorAll('.thought-card').forEach(card => {
                    const cardTags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent);
                    
                    if (cardTags.includes(selectedTag)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                showNotification(`已筛选标签: ${selectedTag}`);
            }
        }
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
    
    // 添加动画效果和新增样式的CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(20px); }
        }
        
        .thought-card {
            animation: fadeIn 0.5s ease-in-out;
            position: relative;
        }
        
        .thought-actions {
            display: flex;
            gap: 10px;
        }
        
        .edit-btn, .delete-btn, .save-btn, .cancel-btn {
            background: none;
            border: none;
            cursor: pointer;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
            transition: all 0.2s ease;
        }
        
        .edit-btn {
            color: #1e88e5;
        }
        
        .delete-btn {
            color: #e53935;
        }
        
        .edit-btn:hover, .save-btn:hover {
            background-color: #e3f2fd;
        }
        
        .delete-btn:hover, .cancel-btn:hover {
            background-color: #ffebee;
        }
        
        .save-btn {
            color: #43a047;
        }
        
        .cancel-btn {
            color: #e53935;
        }
        
        .edit-textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            min-height: 80px;
            margin-bottom: 10px;
            font-family: inherit;
        }
        
        .edit-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 10px;
        }
        
        .dialog-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        }
        
        .dialog {
            background-color: white;
            border-radius: 8px;
            max-width: 400px;
            width: 90%;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        
        .dialog-content {
            padding: 20px;
        }
        
        .dialog-buttons {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 20px;
        }
        
        .dialog-btn {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
        }
        
        .cancel-btn {
            background-color: #f5f5f5;
            color: #333;
        }
        
        .confirm-btn {
            background-color: #e53935;
            color: white;
        }
        
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 6px;
            color: white;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 0.3s ease, transform 0.3s ease;
            z-index: 1001;
        }
        
        .notification.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .notification.success {
            background-color: #43a047;
        }
        
        .notification.error {
            background-color: #e53935;
        }
        
        .comments-section {
            margin-top: 10px;
            padding: 15px;
            background-color: #f9f9f9;
            border-top: 1px solid #eaeaea;
        }
        
        .comments-list {
            margin-bottom: 15px;
        }
        
        .comment {
            padding: 10px;
            border-bottom: 1px solid #eeeeee;
        }
        
        .comment:last-child {
            border-bottom: none;
        }
        
        .comment-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
        }
        
        .comment-author {
            font-weight: 600;
            color: #1e88e5;
        }
        
        .comment-date {
            font-size: 0.8rem;
            color: #666;
        }
        
        .comment-form textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            min-height: 60px;
            margin-bottom: 10px;
        }
        
        .post-comment-btn {
            background-color: #1e88e5;
            color: white;
            border: none;
            padding: 6px 15px;
            border-radius: 4px;
            cursor: pointer;
            float: right;
        }
        
        .tag-container {
            display: flex;
            align-items: center;
        }
        
        .tag-selected {
            background-color: #1e88e5;
            color: white;
        }
        
        .like-counter {
            display: inline-flex;
            align-items: center;
            margin-left: 10px;
            font-size: 0.8rem;
            color: #e91e63;
        }
        
        .like-icon {
            margin-right: 3px;
        }
        
        .action-links {
            display: flex;
            gap: 15px;
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
            
            .action-links {
                flex-direction: column;
                gap: 5px;
            }
        }
    `;
    
    document.head.appendChild(style);
    
    // 加载本地存储中的树洞数据
    initThoughtsData();
    
    // 加载已有的树洞
    renderAllThoughts();
    
    // 初始化已有的树洞卡片
    const existingThoughtCards = document.querySelectorAll('.thought-card');
    existingThoughtCards.forEach(card => {
        // 把初始树洞数据加入到thoughtsData中
        const title = card.querySelector('.card-title').textContent;
        const date = card.querySelector('.card-date').textContent;
        const content = card.querySelector('.card-body p').textContent;
        const tagElem = card.querySelector('.tag');
        const tag = tagElem ? tagElem.textContent : '树洞';
        const commentsText = card.querySelector('.read-more').textContent;
        const commentCount = parseInt(commentsText) || 0;
        
        // 创建初始树洞数据
        const thought = {
            id: generateId(),
            content: content,
            date: date,
            isAnonymous: title === '匿名用户',
            isCurrentUser: title !== '匿名用户', // 非匿名的都假设是当前用户
            tag: tag,
            likes: 0,
            liked: false,
            comments: []
        };
        
        // 添加到数据中（如果不存在）
        if (!thoughtsData.some(t => t.content === content && t.date === date)) {
            thoughtsData.push(thought);
        }
    });
    
    // 保存初始数据
    saveThoughtsData();
});
