document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const submittedDataList = document.getElementById('submittedData');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (name && email && phone && subject && message) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>ชื่อ:</strong> ${name} <br>
                <strong>อีเมล:</strong> ${email} <br>
                <strong>เบอร์โทร:</strong> ${phone} <br>
                <strong>หัวข้อ:</strong> ${subject} <br>
                <strong>ข้อความ:</strong> ${message} <br>
                <button class="delete">ลบข้อมูล</button>
            `;

            submittedDataList.appendChild(listItem);

            listItem.querySelector('.delete').addEventListener('click', function () {
                submittedDataList.removeChild(listItem);
            });

            contactForm.reset();
        } else {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        }
    });
});
