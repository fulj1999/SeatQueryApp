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
                results.forEach((user, index) => {
                    const resultItem = document.createElement('p');
                    if (results.length > 1) {
                        // 如果结果超过一个，显示姓名
                        resultItem.textContent = `姓名：${user.name}，座位号：${user.seatNumber}`;
                    } else {
                        // 如果只有一个结果，只显示座位号
                        resultItem.textContent = `座位号：${user.seatNumber}`;
                    }
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
