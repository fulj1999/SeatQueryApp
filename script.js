document.getElementById('searchButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value.trim();
    if (name === "") {
        alert("请输入姓名！");
        return;
    }

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const user = data.find(person => person.name === name);
            const resultDiv = document.getElementById('result');
            if (user) {
                resultDiv.textContent = `${user.name} 的座位号是：${user.seatNumber}`;
            } else {
                resultDiv.textContent = "未找到该姓名的座位号。";
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
