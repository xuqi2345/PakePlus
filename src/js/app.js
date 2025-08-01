// 返回功能
function goBack() {
    window.location.href = 'home.html';
}

// 服务数据
const serviceData = {
    'legal-documents': {
        title: '常用法律文书',
        content: `
            <h3>常用法律文书服务</h3>
            <p>本服务提供各类常用法律文书的模板和填写指导，包括：</p>
            <ul>
                <li>民事起诉状</li>
                <li>民事答辩状</li>
                <li>民事上诉状</li>
                <li>离婚协议书</li>
                <li>劳动合同</li>
                <li>房屋租赁合同</li>
                <li>遗嘱</li>
                <li>授权委托书</li>
            </ul>
            <p>所有文书模板均符合最新法律法规要求，并提供详细的填写说明和注意事项。</p>
        `
    },
    'legal-regulations': {
        title: '常用法律法规',
        content: `
            <h3>常用法律法规查询</h3>
            <p>提供最新、最常用的法律法规查询服务：</p>
            <ul>
                <li>《中华人民共和国民法典》</li>
                <li>《中华人民共和国刑法》</li>
                <li>《中华人民共和国劳动法》</li>
                <li>《中华人民共和国婚姻法》</li>
                <li>《中华人民共和国继承法》</li>
                <li>《中华人民共和国合同法》</li>
                <li>《中华人民共和国物权法》</li>
                <li>《中华人民共和国侵权责任法》</li>
            </ul>
            <p>支持关键词搜索和条款精确定位，帮助您快速找到相关法律依据。</p>
        `
    },
    'legal-consultation': {
        title: '法律咨询',
        content: `
            <h3>在线法律咨询</h3>
            <p>提供专业的法律咨询服务：</p>
            <ul>
                <li>婚姻家事咨询</li>
                <li>劳动纠纷咨询</li>
                <li>合同纠纷咨询</li>
                <li>房产纠纷咨询</li>
                <li>交通事故咨询</li>
                <li>知识产权咨询</li>
                <li>公司法律咨询</li>
                <li>刑事法律咨询</li>
            </ul>
            <p>专业律师团队在线解答，提供权威、准确的法律建议。</p>
            <p><strong>咨询时间：</strong>周一至周五 9:00-18:00</p>
        `
    },
    'legal-aid': {
        title: '法律援助',
        content: `
            <h3>法律援助服务</h3>
            <p>为符合条件的困难群众提供免费法律援助：</p>
            <ul>
                <li>免费法律咨询</li>
                <li>免费代写法律文书</li>
                <li>免费代理诉讼</li>
                <li>免费调解服务</li>
                <li>免费公证服务</li>
            </ul>
            <p><strong>申请条件：</strong></p>
            <ul>
                <li>经济困难证明</li>
                <li>案件具有胜诉可能性</li>
                <li>符合法律援助范围</li>
            </ul>
            <p><strong>联系电话：</strong>12348（法律援助热线）</p>
        `
    },
    'legal-theater': {
        title: '普法微剧场',
        content: `
            <h3>普法微剧场</h3>
            <p>通过生动有趣的微视频形式普及法律知识：</p>
            <ul>
                <li>《生活中的法律》系列</li>
                <li>《婚姻家庭法律知识》</li>
                <li>《劳动权益保护》</li>
                <li>《消费者权益保护》</li>
                <li>《交通安全法律知识》</li>
                <li>《网络法律风险防范》</li>
                <li>《老年人权益保护》</li>
                <li>《未成年人保护法》</li>
            </ul>
            <p>每期视频时长3-5分钟，内容通俗易懂，适合各年龄段观看学习。</p>
        `
    },
    'legal-qa': {
        title: '法律知识问答',
        content: `
            <h3>法律知识问答</h3>
            <p>通过问答形式学习法律知识：</p>
            <ul>
                <li>婚姻家庭法律问答</li>
                <li>劳动法律问答</li>
                <li>合同法律问答</li>
                <li>房产法律问答</li>
                <li>交通法律问答</li>
                <li>消费法律问答</li>
                <li>继承法律问答</li>
                <li>侵权法律问答</li>
            </ul>
            <p>提供互动式学习体验，通过答题巩固法律知识，提高法律素养。</p>
        `
    },
    'feedback': {
        title: '群众反馈',
        content: `
            <h3>群众反馈平台</h3>
            <p>欢迎您对我们的服务提出宝贵意见和建议：</p>
            <ul>
                <li>服务满意度评价</li>
                <li>功能改进建议</li>
                <li>问题反馈</li>
                <li>投诉举报</li>
                <li>表扬感谢</li>
            </ul>
            <p><strong>反馈方式：</strong></p>
            <ul>
                <li>在线留言</li>
                <li>电话反馈：12348</li>
                <li>邮箱反馈：feedback@hele-legal.com</li>
                <li>现场反馈：社区法律服务站</li>
            </ul>
            <p>我们将在3个工作日内回复您的反馈。</p>
        `
    }
};

// DOM元素
const modal = document.getElementById('serviceModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');
const serviceCards = document.querySelectorAll('.service-card');

// 显示模态框
function showModal(serviceKey) {
    const service = serviceData[serviceKey];
    if (service) {
        modalTitle.textContent = service.title;
        modalContent.innerHTML = service.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }
}

// 隐藏模态框
function hideModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 恢复背景滚动
}

// 事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 为每个服务卡片添加点击事件
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceKey = this.getAttribute('data-service');
            
            // 如果是常用法律文书，跳转到新页面
            if (serviceKey === 'legal-documents') {
                window.location.href = 'legal-documents.html';
            } else {
                showModal(serviceKey);
            }
        });
    });

    // 关闭按钮事件
    closeBtn.addEventListener('click', hideModal);

    // 点击模态框外部关闭
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            hideModal();
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            hideModal();
        }
    });

    // 添加键盘导航支持
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('service-card')) {
                const serviceKey = focusedElement.getAttribute('data-service');
                showModal(serviceKey);
            }
        }
    });

    // 为服务卡片添加键盘焦点支持
    serviceCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', card.querySelector('.service-title').textContent);
    });
});

// 添加触摸设备支持
if ('ontouchstart' in window) {
    serviceCards.forEach(card => {
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

// 添加服务卡片点击反馈
serviceCards.forEach(card => {
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