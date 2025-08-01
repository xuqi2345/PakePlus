// 文档数据
const documentData = {
    'lawsuit-documents': {
        title: '起诉状文书',
        url: 'lawsuit-documents.html'
    },
    'legal-regulations': {
        title: '常用法律法规',
        content: `
            <h3>常用法律法规</h3>
            <p>提供常用的法律法规查询，包括：</p>
            <ul>
                <li>《中华人民共和国民法典》</li>
                <li>《中华人民共和国刑法》</li>
                <li>《中华人民共和国民事诉讼法》</li>
                <li>《中华人民共和国刑事诉讼法》</li>
                <li>《中华人民共和国行政诉讼法》</li>
                <li>《中华人民共和国劳动法》</li>
                <li>《中华人民共和国婚姻法》</li>
                <li>《中华人民共和国继承法》</li>
            </ul>
            <p><strong>功能特点：</strong></p>
            <ul>
                <li>全文检索</li>
                <li>条款查询</li>
                <li>相关案例</li>
                <li>司法解释</li>
            </ul>
        `
    },
    'legal-consultation': {
        title: '法律咨询',
        content: `
            <h3>法律咨询</h3>
            <p>提供专业的法律咨询服务，包括：</p>
            <ul>
                <li>民事法律咨询</li>
                <li>刑事法律咨询</li>
                <li>行政法律咨询</li>
                <li>劳动法律咨询</li>
                <li>婚姻家庭咨询</li>
                <li>房产法律咨询</li>
                <li>合同法律咨询</li>
                <li>知识产权咨询</li>
            </ul>
            <p><strong>服务方式：</strong></p>
            <ul>
                <li>在线咨询</li>
                <li>电话咨询</li>
                <li>面对面咨询</li>
                <li>预约服务</li>
            </ul>
        `
    }
};

// DOM元素
const documentCards = document.querySelectorAll('.document-card');

// 返回上一页
function goBack() {
    window.history.back();
}

// 事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 为每个文档卡片添加点击事件
    documentCards.forEach(card => {
        card.addEventListener('click', function() {
            const documentKey = this.getAttribute('data-document');
            const document = documentData[documentKey];
            
            if (document && document.url) {
                // 如果有URL，跳转到对应页面
                window.location.href = document.url;
            } else if (document) {
                // 如果没有URL但有内容，显示提示信息
                alert(`${document.title}功能正在开发中，敬请期待！`);
            }
        });
    });

    // 为文档卡片添加键盘焦点支持
    documentCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', card.querySelector('.document-title').textContent);
    });
});

// 添加触摸设备支持
if ('ontouchstart' in window) {
    documentCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// 添加文档卡片点击反馈
documentCards.forEach(card => {
    card.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    card.addEventListener('mouseup', function() {
        this.style.transform = '';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
}); 