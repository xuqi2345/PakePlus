// DOM元素
const form = document.getElementById('lawsuitForm');
const modal = document.getElementById('documentModal');
const generatedDocument = document.getElementById('generatedDocument');
const closeBtn = document.querySelector('.close');

// 返回上一页
function goBack() {
    window.history.back();
}

// 生成起诉状文书
function generateLawsuitDocument(formData) {
    // 解析原告信息
    const plaintiffInfo = formData.plaintiff.split(',').map(item => item.trim());
    const plaintiffName = plaintiffInfo[0] || '王敏';
    const plaintiffGender = plaintiffInfo[1] || '女';
    const plaintiffEthnicity = plaintiffInfo[3] || '汉族';
    const plaintiffBirth = plaintiffInfo[2] || '1969年5月30日出生';
    const plaintiffOccupation = plaintiffInfo[4] || '上海某家政服务员工';
    const plaintiffId = plaintiffInfo[5] || '41022419690530XXXX';
    const plaintiffAddress = plaintiffInfo[6] || '上海市松江区天乐小区3单元2号楼206';
    const plaintiffPhone = plaintiffInfo[7] || '15537890XXX';

    // 解析被告信息
    const defendantInfo = formData.defendant.split(',').map(item => item.trim());
    const defendantName = defendantInfo[0] || '许悦琳';
    const defendantGender = defendantInfo[1] || '女';
    const defendantEthnicity = defendantInfo[3] || '汉族';
    const defendantBirth = defendantInfo[2] || '1972年7月23日出生';
    const defendantOccupation = defendantInfo[4] || '某公司员工';
    const defendantId = defendantInfo[5] || '31010519720723XXXX';
    const defendantAddress = defendantInfo[6] || '上海市长宁区新中小区3单元3号楼606';
    const defendantPhone = defendantInfo[7] || '13849130XXX';

    // 获取其他表单数据
    const cause = formData.cause || '遗赠纠纷';
    const requests = formData.requests || `1.请求判决原告依遗赠取得上海市黄浦区提香小区1单元6号楼301房产所有权的35%份额；
2.本案诉讼费由被告依法承担。`;
    const facts = formData.facts || `原告${plaintiffName}自2016年起受雇于被告父亲许德睿、母亲李秀珍，照顾二位老人的起居生活。2021年李秀珍病故，原告继续照顾被告父亲许德睿，双方建立了深厚情谊。而被告在此期间长年旅居国外，未对父母尽法定的赡养义务。2023年1月1日，许德睿自书立下遗嘱，将其位于上海市黄浦区提香小区1单元6号楼301房产的35%赠与原告，并嘱托原告亲自处理其骨灰及安排海葬事宜。许德睿去世后，被告${defendantName}作为其女儿，拒绝向原告交付其依据遗嘱应得的遗产财产份额。`;
    const reasons = formData.reasons || `原告认为，许德睿有权依据《中华人民共和国民法典》的规定通过立遗嘱的方式将自己的个人合法财产赠与法定继承人以外的个人。其所立遗嘱从形式上看，为其亲笔书写，有亲笔签名，且注明了立遗嘱的年、月、日 。在实质要件上，许德睿在立遗嘱时精神正常、意识清醒，能够正确认识和表达自己的意思。所立遗嘱是基于原告长期照料而产生的信任与依赖的情感基础而设立，反映了真实想法，且处理的是许德睿本人的个人合法财产，不存在违法情形。因此，该遗嘱合法有效。尊重遗嘱人的意愿是最好的祭奠，同时符合人们对于公平、正义和感恩的认知，有利于维护社会的公序良俗。`;
    const basis = formData.basis || `《中华人民共和国民法典》第一千一百三十三条、第一千一百三十四条、第一千一百四十三条及《中华人民共和国民事诉讼法》第一百二十二条`;
    const court = formData.court || '上海市黄浦区人民法院';

    // 生成文书内容（标准法律文书格式）
    const lawsuitDocument = `民事起诉状

原告：${plaintiffName}，${plaintiffGender}，${plaintiffEthnicity}，${plaintiffBirth}，${plaintiffOccupation}，身份证号：${plaintiffId}，住${plaintiffAddress}，联系电话：${plaintiffPhone}。

委托诉讼代理人：张XX，铭德律师事务所律师。

被告：${defendantName}，${defendantGender}，${defendantEthnicity}，${defendantBirth}，${defendantOccupation}，身份证号：${defendantId}，住${defendantAddress}，联系电话：${defendantPhone}。

案由：${cause}

诉讼请求：
${requests}

事实与理由：
${facts}

${reasons}

原告为维护自身合法权益，现依据${basis}，特向贵院提起诉讼，恳请贵院依法支持原告的诉讼请求。

此致
${court}

具状人：${plaintiffName}
二〇二四年三月十二日

附：
1.本状副本1份
2.证据清单`;

    return lawsuitDocument;
}

// 显示生成的文书
function showGeneratedDocument(lawsuitDocument) {
    generatedDocument.textContent = lawsuitDocument;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 隐藏模态框
function hideModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 打印文书
function printDocument() {
    const printWindow = window.open('', '_blank');
    const documentContent = generatedDocument.textContent;
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>民事起诉状</title>
            <style>
                body {
                    font-family: 'SimSun', serif;
                    font-size: 14px;
                    line-height: 1.8;
                    margin: 40px;
                    color: #000;
                }
                .document-title {
                    text-align: center;
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 30px;
                }
                .content {
                    white-space: pre-line;
                }
                @media print {
                    body { margin: 20px; }
                }
            </style>
        </head>
        <body>
            <div class="document-title">民事起诉状</div>
            <div class="content">${documentContent}</div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
}

// 下载文书（Word格式）
function downloadDocument() {
    const documentContent = generatedDocument.textContent;
    
    // 创建Word文档的HTML内容（标准法律文书格式）
    const wordHtml = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
    <meta charset="utf-8">
    <title>民事起诉状</title>
    <style>
        body {
            font-family: 'SimSun', '宋体', serif;
            font-size: 14pt;
            line-height: 1.8;
            margin: 2.54cm;
            color: #000;
            text-align: justify;
        }
        .title {
            text-align: center;
            font-size: 18pt;
            font-weight: bold;
            margin-bottom: 30pt;
        }
        .content {
            white-space: pre-line;
        }
        .plaintiff, .defendant {
            margin-bottom: 15pt;
        }
        .cause {
            margin-bottom: 15pt;
        }
        .requests {
            margin-bottom: 15pt;
        }
        .facts-reasons {
            margin-bottom: 15pt;
        }
        .basis {
            margin-bottom: 15pt;
        }
        .court {
            margin-bottom: 15pt;
        }
        .signature {
            margin-top: 30pt;
        }
        .attachment {
            margin-top: 20pt;
        }
    </style>
</head>
<body>
    <div class="title">民事起诉状</div>
    <div class="content">${documentContent}</div>
</body>
</html>`;
    
    // 创建Blob对象
    const blob = new Blob([wordHtml], { 
        type: 'application/msword' 
    });
    
    // 创建下载链接
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '民事起诉状.doc';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// 表单验证
function validateForm(formData) {
    const requiredFields = ['plaintiff', 'defendant', 'cause', 'requests', 'facts', 'reasons', 'basis', 'court'];
    
    for (let field of requiredFields) {
        if (!formData[field] || formData[field].trim() === '') {
            alert(`请填写${getFieldLabel(field)}`);
            return false;
        }
    }
    
    return true;
}

// 获取字段标签
function getFieldLabel(field) {
    const labels = {
        'plaintiff': '原告身份事项',
        'defendant': '被告身份事项',
        'cause': '案由',
        'requests': '诉讼请求',
        'facts': '事实',
        'reasons': '理由',
        'basis': '起诉依据',
        'court': '致送的法院'
    };
    return labels[field] || field;
}

// 事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 表单提交事件
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = {
            plaintiff: document.getElementById('plaintiff').value,
            defendant: document.getElementById('defendant').value,
            cause: document.getElementById('cause').value,
            requests: document.getElementById('requests').value,
            facts: document.getElementById('facts').value,
            reasons: document.getElementById('reasons').value,
            basis: document.getElementById('basis').value,
            court: document.getElementById('court').value
        };
        
        // 验证表单
        if (!validateForm(formData)) {
            return;
        }
        
        // 生成文书
        const lawsuitDocument = generateLawsuitDocument(formData);
        
        // 显示生成的文书
        showGeneratedDocument(lawsuitDocument);
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

    // 添加表单字段焦点效果
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
});

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
}); 