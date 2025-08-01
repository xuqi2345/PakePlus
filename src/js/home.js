// 首页JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    // 搜索按钮点击事件
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault(); // 防止默认行为
        handleSearch();
    });

    // 搜索框回车事件
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault(); // 防止默认行为
            handleSearch();
        }
    });

    // 处理搜索功能
    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        
        // 无论搜索框是否为空，都跳转到index页面
        // 添加搜索按钮加载状态
        searchBtn.textContent = '跳转中...';
        searchBtn.disabled = true;

        // 短暂延迟后跳转，提供视觉反馈
        setTimeout(() => {
            try {
                // 跳转到index页面
                window.location.href = 'index.html';
            } catch (error) {
                // 如果跳转失败，尝试其他方式
                window.location.replace('index.html');
            }
        }, 300);
    }

    // 显示消息提示
    function showMessage(message, type = 'info') {
        // 创建消息元素
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${type}`;
        messageDiv.textContent = message;
        
        // 添加样式
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
            ${type === 'warning' ? 'background: #f39c12;' : 'background: #20B2AA;'}
        `;

        // 添加到页面
        document.body.appendChild(messageDiv);

        // 3秒后自动移除
        setTimeout(() => {
            messageDiv.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 300);
        }, 3000);
    }

    // 添加搜索框焦点效果
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
        this.parentElement.style.boxShadow = '0 6px 25px rgba(32, 178, 170, 0.3)';
    });

    searchInput.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
        this.parentElement.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    });

    // 添加CSS动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}); 