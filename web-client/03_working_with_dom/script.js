const N = 10;

const container = document.getElementById('table-container-1');
const table = document.createElement('table');

for (let i = 0; i <= N; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j <= N; j++) {

        if (i == 0 && j == 0) {
            const th = document.createElement('th');
            th.textContent = '*';
            th.classList.add('mark');
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
            if (i == j) {
                td.classList.add('mark');
            }
            row.appendChild(td);
        }

        
    }
    table.appendChild(row);
}

container.appendChild(table);


const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const todayDate = now.getDate(); 

const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

document.getElementById('month-title').textContent = `${monthNames[month]} ${year}`

const table_ = document.getElementById('calendar-table');
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

daysOfWeek.forEach(day => {
    const th = document.createElement('th');
    th.textContent = day;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table_.appendChild(thead);

const tbody = document.createElement('tbody');

const firstDayOfMonth = new Date(year, month, 1);
let startDay = firstDayOfMonth.getDay();
startDay = startDay === 0 ? 6 : startDay - 1;
const daysInMonth = new Date(year, month + 1, 0).getDate();

let dateCounter = 1;
for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {

        const cell = document.createElement('td'); 
        if ((i === 0 && j < startDay) || dateCounter > daysInMonth) {
            cell.textContent = '';
        } 
        else {

            cell.textContent = dateCounter;
            if (dateCounter === todayDate) {
                cell.classList.add('mark');
            }
        dateCounter++;

        }
        row.appendChild(cell);
    }
    tbody.appendChild(row);
    if (dateCounter > daysInMonth) {
        break;
    }
}

table_.appendChild(tbody)
