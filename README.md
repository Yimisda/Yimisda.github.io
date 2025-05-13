# Yimisda学术主页

这是一个为北京大学学生设计的个人学术主页模板，适合研究生和本科生展示学术成果、分享学术博客和日常感悟。

## 项目结构

```
yourrepository/
├── index.html           # 主页HTML文件
├── css/                 # CSS样式文件夹
│   └── style.css        # 主要样式表
├── js/                  # JavaScript脚本文件夹
│   └── main.js          # 交互功能脚本
├── images/              # 图片资源文件夹
│   └── profile.jpg      # 个人头像等图片
├── README.md            # 项目说明文件
└── .gitignore           # Git忽略文件
```

## 功能特点

- **响应式设计**：适配电脑、平板和手机等各种屏幕尺寸
- **学术博客**：展示你的学术文章和见解
- **研究成果**：展示你的研究论文和项目
- **心情树洞**：类似于社交媒体的功能，可以分享日常感悟和想法
- **个人信息**：展示教育背景、研究方向和联系方式

## 使用说明

1. 克隆或下载此仓库到你的本地环境
2. 替换 `images/profile.jpg` 为你的个人照片
3. 编辑 `index.html` 文件，更新个人信息、学术博客和研究成果等内容
4. 根据需要修改 `css/style.css` 文件，自定义页面样式
5. 将修改后的网站部署到你选择的网络托管服务上

## 自定义

### 更改颜色主题

网站的主色调可以通过修改 `css/style.css` 文件中的以下颜色变量来更改：

```css
/* 在style.css中查找并修改这些颜色值 */
.logo-text {
    color: #122d72; /* 修改为你喜欢的颜色 */
}

.social-links a:hover {
    background-color: #122d72; /* 修改为你喜欢的颜色 */
    color: white;
}

.post-btn {
    background-color: #122d72; /* 修改为你喜欢的颜色 */
}

footer {
    background-color: #122d72; /* 修改为你喜欢的颜色 */
}
```

### 添加新的功能区块

如果你想添加新的内容区块，可以参照现有的部分，在 `index.html` 中添加类似的结构：

```html
<section class="your-new-section" id="section-id">
    <h2>新区块标题</h2>
    
    <div class="card">
        <!-- 卡片内容 -->
    </div>
</section>
```

然后在 `css/style.css` 中添加相应的样式。

## 注意事项

- 请确保图片文件大小适中，以保证网页加载速度
- 定期更新你的学术内容，保持网站的活跃度
- 考虑添加访问统计工具，了解你的网站访问情况

## 许可证

此项目采用 MIT 许可证 - 详情请参阅 LICENSE 文件

## 联系方式

如有问题或建议，请发送邮件至 your.email@pku.edu.cn

---

*此模板由北京大学学生设计，欢迎分享和使用！*
