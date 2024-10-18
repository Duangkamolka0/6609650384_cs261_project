function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value; // ดึงค่า role จาก dropdown

    // ตรวจสอบว่ามีการเลือก role หรือยัง
    if (!role) {
        document.getElementById('message').innerText = 'Please select a role before logging in.';
        return; // ยกเลิกการดำเนินการถ้ายังไม่ได้เลือก role
    }

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TUe6a242e439380b6f375a40de027455f807d30daa019fd820142acd9afdbbfd2675f664d6bc44416262c0281a8656b3c7'
        },
        body: JSON.stringify({"UserName": username, "PassWord": password, "Role": role}) // ส่ง Role ไปด้วย
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}
