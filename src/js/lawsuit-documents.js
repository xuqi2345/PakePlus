// 起诉状数据
const lawsuitData = {
    'will-inheritance': {
        title: '遗嘱继承纠纷起诉状',
        formPage: 'will-inheritance-form.html'
    },
    'will-support': {
        title: '遗赠抚养协议纠纷起诉状',
        formPage: 'will-support-form.html'
    },
    'alimony': {
        title: '抚养费纠纷起诉状',
        formPage: 'alimony-form.html'
    },
    'adoption-confirm': {
        title: '确认收养关系纠纷起诉状',
        formPage: 'adoption-confirm-form.html'
    },
    'adoption-terminate': {
        title: '解除收养关系纠纷起诉状',
        formPage: 'adoption-terminate-form.html'
    },
    'bequest': {
        title: '遗赠纠纷起诉状',
        formPage: 'bequest-form.html'
    },
    'labor': {
        title: '劳动纠纷起诉状',
        formPage: 'labor-form.html'
    },
    'private-lending': {
        title: '民间借贷纠纷起诉状',
        formPage: 'private-lending-form.html'
    },
    'traffic-accident': {
        title: '交通事故纠纷起诉状',
        formPage: 'traffic-accident-form.html'
    },
    'support': {
        title: '赡养纠纷起诉状',
        formPage: 'support-form.html'
    },
    'divorce': {
        title: '离婚纠纷起诉状',
        formPage: 'divorce-form.html'
    },
    'animal-infringement': {
        title: '动物侵权纠纷起诉状',
        formPage: 'animal-infringement-form.html'
    },
    'gift': {
        title: '赠与纠纷起诉状',
        formPage: 'gift-form.html'
    },
    'inheritance': {
        title: '遗产纠纷起诉状',
        formPage: 'inheritance-form.html'
    },
    'property-division': {
        title: '分家析产纠纷起诉状',
        formPage: 'property-division-form.html'
    }
};

// DOM元素
const lawsuitCards = document.querySelectorAll('.lawsuit-card');

// 返回上一页
function goBack() {
    window.history.back();
}

// 事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 为每个起诉状卡片添加点击事件
    lawsuitCards.forEach(card => {
        card.addEventListener('click', function() {
            const lawsuitKey = this.getAttribute('data-lawsuit');
            const lawsuit = lawsuitData[lawsuitKey];
            
            if (lawsuit && lawsuit.formPage) {
                window.location.href = lawsuit.formPage;
            }
        });
    });

    // 为起诉状卡片添加键盘焦点支持
    lawsuitCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', card.querySelector('.lawsuit-title').textContent);
    });

    // 添加键盘导航支持
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('lawsuit-card')) {
                const lawsuitKey = focusedElement.getAttribute('data-lawsuit');
                const lawsuit = lawsuitData[lawsuitKey];
                
                if (lawsuit && lawsuit.formPage) {
                    window.location.href = lawsuit.formPage;
                }
            }
        }
    });
});

// 添加触摸设备支持
if ('ontouchstart' in window) {
    lawsuitCards.forEach(card => {
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

// 添加起诉状卡片点击反馈
lawsuitCards.forEach(card => {
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