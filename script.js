// จับการคลิกที่ปุ่มเมนู
document.querySelector('.menu-button').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu-items').classList.toggle('show');
});

// จับการคลิกที่รายการเมนู
document.querySelectorAll('.menu-item').forEach(function(item) {
    item.addEventListener('click', function() {
        // ซ่อนเมนู
        document.querySelector('.menu-button').classList.remove('active');
        document.querySelector('.menu-items').classList.remove('show');
        
        // ปิดทุกการ์ด
        document.querySelectorAll('.page-card').forEach(function(card) {
            card.classList.remove('active');
        });
        
        // เปิดการ์ดตามเมนูที่คลิก
        if (this.id === 'item1') {
            document.getElementById('home-card').classList.add('active');
        } else if (this.id === 'item2') {
            document.getElementById('services-card').classList.add('active');
        } else if (this.id === 'item3') {
            document.getElementById('products-card').classList.add('active');
        } else if (this.id === 'item4') {
            document.getElementById('about-card').classList.add('active');
        } else if (this.id === 'item5') {
            document.getElementById('blog-card').classList.add('active');
        } else if (this.id === 'item6') {
            document.getElementById('contact-card').classList.add('active');
        }
    });
});

// ปุ่มปิดการ์ด
document.querySelectorAll('.close-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        const card = this.closest('.page-card');
        card.classList.remove('active');
    });
});

// เมื่อคลิกนอกเมนู ให้ซ่อนเมนู
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.floating-menu');
    const menuButton = document.querySelector('.menu-button');
    
    if (!menu.contains(event.target)) {
        menuButton.classList.remove('active');
        document.querySelector('.menu-items').classList.remove('show');
    }
});

// เพิ่มฟังก์ชันสำหรับเลือกประเภทสินค้า
document.addEventListener('DOMContentLoaded', function() {
    const productCategories = document.querySelectorAll('#products-card .card-content span');
    
    if (productCategories.length > 0) {
        productCategories.forEach(function(category) {
            category.addEventListener('click', function() {
                // ลบการเน้นจากทุกหมวดหมู่
                productCategories.forEach(function(cat) {
                    cat.style.fontWeight = 'normal';
                    cat.style.color = 'black';
                });
                
                // เน้นหมวดหมู่ที่เลือก
                this.style.fontWeight = 'bold';
                this.style.color = '#88ff00';
                
                // ในที่นี้สามารถเพิ่มโค้ดสำหรับกรองสินค้าตามหมวดหมู่ได้
                // เช่น แสดง/ซ่อนสินค้าตามหมวดหมู่ที่เลือก
            });
        });
    }
    
    // เพิ่มการโต้ตอบกับรายการสินค้า
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // ในอนาคตสามารถเพิ่มการแสดงรายละเอียดสินค้าได้ที่นี่
            alert('คุณได้เลือก: ' + this.querySelector('h3').textContent);
        });
    });
});

// เพิ่มการตรวจสอบแบบฟอร์มติดต่อเบื้องต้น
const contactForm = document.querySelector('.contact-form button');
if (contactForm) {
    contactForm.addEventListener('click', function(e) {
        e.preventDefault();
        
        const form = this.closest('.contact-form');
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const subject = form.querySelector('select').value;
        const message = form.querySelector('textarea').value;
        
        let valid = true;
        let errorMessage = '';
        
        // ตรวจสอบชื่อ
        if (!name.trim()) {
            valid = false;
            errorMessage += 'กรุณากรอกชื่อ-นามสกุล\n';
        }
        
        // ตรวจสอบอีเมล
        if (!email.trim()) {
            valid = false;
            errorMessage += 'กรุณากรอกอีเมล\n';
        } else if (!validateEmail(email)) {
            valid = false;
            errorMessage += 'กรุณากรอกอีเมลให้ถูกต้อง\n';
        }
        
        // ตรวจสอบหัวข้อ
        if (!subject) {
            valid = false;
            errorMessage += 'กรุณาเลือกหัวข้อ\n';
        }
        
        // ตรวจสอบข้อความ
        if (!message.trim()) {
            valid = false;
            errorMessage += 'กรุณากรอกข้อความ\n';
        }
        
        if (valid) {
            alert('ส่งข้อความสำเร็จ! เราจะติดต่อกลับโดยเร็วที่สุด');
            // รีเซ็ตฟอร์ม
            form.reset();
        } else {
            alert('กรุณาตรวจสอบข้อมูล:\n' + errorMessage);
        }
    });
}

// ฟังก์ชันตรวจสอบรูปแบบอีเมล
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
