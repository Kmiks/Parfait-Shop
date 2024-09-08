var orderItems = [];
var subtotal = 0;
var taxRate = 0.04712;

function order(parfaitId) {
    var quantity = document.getElementById(`choice${parfaitId}`).value;
    var price = 7.99;
    var totalPrice = quantity * price;

    var itemName = "";
    switch (parfaitId) {
        case 1:
            itemName = `${quantity}x Raspberry Bunny Parfait`;
            break;
        case 2:
            itemName = `${quantity}x Matcha Bunny Parfait`;
            break;
        case 3:
            itemName = `${quantity}x Crème Brûlée Bunny Parfait`;
            break;
        case 4:
            itemName = `${quantity}x Choco Bunny Parfait`;
            break;
    }

    orderItems.push({ name: itemName, total: totalPrice });
    updateOrderList();
}

function updateOrderList() {
    var orderList = document.getElementById('order-list');
    orderList.innerHTML = '';

    orderItems.forEach(item => {
        var li = document.createElement('li');
        li.innerText = `${item.name} - $${item.total.toFixed(2)}`;
        orderList.appendChild(li);
    });

    calculateSubtotal();
}

function calculateSubtotal() {
    subtotal = orderItems.reduce((acc, item) => acc + item.total, 0);
    document.getElementById('subtotal').innerText = `Sub Total: $${subtotal.toFixed(2)}`;
}

function calculateTotal() {
    if (subtotal === 0) {
        document.getElementById('invalid').innerText = "You must add an item to your order.";
        return;
    }

    var tax = subtotal * taxRate;
    var grandTotal = subtotal + tax;

    document.getElementById('tax').innerText = `Tax (4.712%): $${tax.toFixed(2)}`;
    document.getElementById('grandtotal').innerText = `Grand Total: $${grandTotal.toFixed(2)}`;
}