const N = 10;

const container = document.getElementById('table-container-1');
const table = document.createElement('table');

for (let i = 0; i <= N; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j <= N; j++) {

        if (i == 0 && j == 0) {
            const th = document.createElement('th');
            th.textContent = '*';
            row.appendChild(th);
        }

        else if (i == 0) {
            const th = document.createElement('th');
            th.textContent = j;
            row.appendChild(th);
        }

        else if (j == 0) {
            const th = document.createElement('th');
            th.textContent = i;
            row.appendChild(th);
        }

        else {
            const td = document.createElement('td');
            td.textContent = i * j;
            row.appendChild(td);
        }
    }
    table.appendChild(row);
}

container.appendChild(table);