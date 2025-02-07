document.getElementById('searchButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value.trim();
    if (name === "") {
        alert("请输入姓名！");
        return;
    }
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const results = data.filter(person => person.name.includes(name)); // 使用包含（includes）来查找匹配的结果
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = ""; // 清空之前的结果

            if (results.length > 0) {
                results.forEach(user => {
                    const resultItem = document.createElement('p');
                    resultItem.textContent = `您的座位号是：${user.seatNumber}，姓名：${user.name}`;
                    resultDiv.appendChild(resultItem);
                });
            } else {
                resultDiv.textContent = "未找到该姓名的座位号。";
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
