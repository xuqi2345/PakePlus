// 劳动纠纷起诉状填写表单处理
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('lawsuitForm');
    const modal = document.getElementById('documentModal');
    const closeBtn = document.querySelector('.close');
    const generatedDocument = document.getElementById('generatedDocument');

    // 返回上一页
    window.goBack = function() {
        window.history.back();
    };

    // 表单提交处理
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // 生成起诉状文书
        const document = generateLawsuitDocument(data);
        
        // 显示生成的文书
        generatedDocument.innerHTML = document;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // 关闭模态框
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // 点击模态框外部关闭
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // 生成起诉状文书
    function generateLawsuitDocument(data) {
        const currentDate = new Date().toLocaleDateString('zh-CN');
        
        return `
            <div class="lawsuit-document">
                <h2 style="text-align: center; margin-bottom: 30px;">民事起诉状</h2>
                
                <div style="margin-bottom: 20px;">
                    <strong>原告：</strong>${data.plaintiff || '（请填写原告信息）'}
                </div>
                
                <div style="margin-bottom: 20px;">
                    <strong>被告：</strong>${data.defendant || '（请填写被告信息）'}
                </div>
                
                <div style="margin-bottom: 20px;">
                    <strong>案由：</strong>${data.cause || '劳动纠纷'}
                </div>
                
                <div style="margin-bottom: 20px;">
                    <strong>诉讼请求：</strong>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        ${data.requests ? data.requests.split('\n').map(request => `<p>${request}</p>`).join('') : '（请填写诉讼请求）'}
                    </div>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <strong>事实与理由：</strong>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>事实：</strong></p>
                        <p>${data.facts || '（请填写事实经过）'}</p>
                        
                        <p><strong>理由：</strong></p>
                        <p>${data.reasons || '（请填写诉讼理由）'}</p>
                    </div>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <strong>起诉依据：</strong>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        ${data.basis || '《中华人民共和国民法典》相关规定'}
                    </div>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <strong>此致</strong><br>
                    ${data.court || '（请填写法院名称）'}
                </div>
                
                <div style="margin-top: 40px; text-align: right;">
                    <p>起诉人：${data.plaintiff ? data.plaintiff.split(',')[0] : '（原告姓名）'}</p>
                    <p>${currentDate}</p>
                </div>
            </div>
        `;
    }

    // 打印文书
    window.printDocument = function() {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>劳动纠纷起诉状填写</title>
                    <style>
                        body { font-family: 'SimSun', serif; line-height: 1.6; margin: 20px; }
                        .lawsuit-document { max-width: 800px; margin: 0 auto; }
                        h2 { text-align: center; margin-bottom: 30px; }
                        p { margin: 10px 0; }
                        @media print { body { margin: 0; } }
                    </style>
                </head>
                <body>
                    ${generatedDocument.innerHTML}
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    };

    // 下载文书
    window.downloadDocument = function() {
        const content = generatedDocument.innerHTML;
        const blob = new Blob([`
            <html>
                <head>
                    <title>劳动纠纷起诉状填写</title>
                    <style>
                        body { font-family: 'SimSun', serif; line-height: 1.6; margin: 20px; }
                        .lawsuit-document { max-width: 800px; margin: 0 auto; }
                        h2 { text-align: center; margin-bottom: 30px; }
                        p { margin: 10px 0; }
                    </style>
                </head>
                <body>
                    ${content}
                </body>
            </html>
        `], { type: 'text/html' });
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '劳动纠纷起诉状填写.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    // 表单验证
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = '#ff6b6b';
            } else {
                this.style.borderColor = '#ddd';
            }
        });
    });
});