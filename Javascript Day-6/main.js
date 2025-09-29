function Employee(name, pos, office, age, startDate){
    this.name = name;
    this.pos = pos;
    this.office = office;
    this.age = age;
    this.startDate = startDate;
}


let e1  = new Employee("Airi Satou", "Accountant", "Tokyo", 33, "2008/11/28");
let e2  = new Employee("Angelica Ramos", "Chief Executive Officer (CEO)", "London", 47, "2009/10/09");
let e3  = new Employee("Ashton Cox", "Junior Technical Author", "San Francisco", 66, "2009/01/12");
let e4  = new Employee("Bradley Greer", "Software Engineer", "London", 41, "2012/10/13");
let e5  = new Employee("Brenden Wagner", "Software Engineer", "San Francisco", 28, "2011/06/07");
let e6  = new Employee("Brielle Williamson", "Integration Specialist", "New York", 61, "2012/12/02");
let e7  = new Employee("Bruno Nash", "Software Engineer", "London", 38, "2011/05/03");
let e8  = new Employee("Caesar Vance", "Pre-Sales Support", "New York", 21, "2011/12/12");
let e9  = new Employee("Cara Stevens", "Sales Assistant", "New York", 46, "2011/12/06");
let e10 = new Employee("Cedric Kelly", "Senior Javascript Developer", "Edinburgh", 22, "2012/03/29");

let employees = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10];

console.log(employees);

const tbody = document.getElementById('tbod');

employees.map(function(emp){
    const newTr = document.createElement('tr');

    const name = document.createElement('td');
    name.innerHTML = emp.name;
    const pos = document.createElement('td');
    pos.innerHTML = emp.pos;
    const office = document.createElement('td');
    office.innerHTML = emp.office;
    const age = document.createElement('td');
    age.innerHTML = emp.age;
    const startDate = document.createElement('td');
    startDate.innerHTML = emp.startDate;

    newTr.appendChild(name);
    newTr.appendChild(pos);
    newTr.appendChild(office);
    newTr.appendChild(age);
    newTr.appendChild(startDate);
    
    tbody.appendChild(newTr);
});

function renderTable(data) {
    const tbody = document.getElementById('tbod');
    tbody.innerHTML = "";

    data.forEach(emp => {
        const newTr = document.createElement('tr');
        newTr.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.pos}</td>
            <td>${emp.office}</td>
            <td>${emp.age}</td>
            <td>${emp.startDate}</td>
        `;
        tbody.appendChild(newTr);
    });
}

function sortString(str, prop, type){
        document.getElementById(str).addEventListener('click', function(){
        employees.sort((a, b) =>{
            if(typeof a[prop] === 'number'){
                if(type){
                    return a[prop] - b[prop];
                }
                else{
                    return b[prop] - a[prop];
                }
            }
            else if(prop === 'startDate'){
                let dateA = new Date(a[prop]);
                let dateB = new Date(b[prop]);
                 if(type){
                    return dateA - dateB;
                 }
                 else{
                    return dateB - dateA;
                 }

            }else{
                if(type){
                    return a[prop].localeCompare(b[prop]);
                }
                else{
                    return b[prop].localeCompare(a[prop]);
                }
            }
        });
        type = !type;
        renderTable(employees);
    });
}

sortString('for-name','name', false);
sortString('for-age', 'age', false);
sortString('for-pos', 'pos', false);
sortString('for-office', 'office', false);
sortString('for-date', 'startDate', false);

document.getElementById('form1').addEventListener('submit', function (e){
    e.preventDefault();

    let name = document.getElementById('name-inp').value;
    let age = parseInt(document.getElementById('age-inp').value);
    let pos = document.getElementById('pos-inp').value;
    let date = document.getElementById('date-inp').value;
    let office = document.getElementById('off-inp').value;

    const emp = new Employee(name, pos, office, age, date);
    // employees.append(emp);
    employees.push(emp);
    renderTable(employees);
});

function Node(val){
    this.value = val;
    this.next = null;
    this.prev = null;
}

function LL(){
    
    this.head = null;
    this.tail = null;

    this.add = function(val){
        const nod = new Node(val);
        
        if(this.head == null){
            this.head = nod;
            this.tail = nod;
        }
        else{
            this.tail.next = nod;
            nod.prev = this.tail;
            this.tail = nod;
        }
    }

    this.delete = function(){
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    this.display = function(){
        const container = document.querySelector(".linkedlist");
        container.innerHTML = ""; 
        let current = this.head;
        while(current != null){
            let nodeDiv = document.createElement("div");
            nodeDiv.className = "node";
            nodeDiv.textContent = current.value;
            container.appendChild(nodeDiv);
            current = current.next;
        }
    }
}


function Vehicle(engType, wheels, color){
    this._engType = engType;
    this._wheels = wheels;
    this._color = color;
}

function Car(cc, gears, engType, wheels, color){
    Vehicle.call(this,engType,wheels,color);
    this._cc = cc;
    this._gears = gears;    
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
const c = new Car();
