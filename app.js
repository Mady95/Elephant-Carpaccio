var _a;
var stateTaxes = {
    UT: 0.0685, 
    NV: 0.08, 
    TX: 0.0625, 
    AL: 0.04, 
    CA: 0.0825 
};
function calculateTotal(quantity, price, state) {
    if (quantity <= 0 || price <= 0) {
        return "Veuillez saisir une quantité et un prix valides.";
    }
    if (!state || !(state in stateTaxes)) {
        return "Veuillez sélectionner un état valide.";
    }

    var totalBeforeTax = quantity * price;

    var taxRate = stateTaxes[state];
    var tax = totalBeforeTax * taxRate;
    var finalTotal = totalBeforeTax + tax;
    return "\n    Prix brut : ".concat(totalBeforeTax.toFixed(2), " \u20AC\n    Taxes (").concat((taxRate * 100).toFixed(2), "%) : +").concat(tax.toFixed(2), " \u20AC\n    Total final : ").concat(finalTotal.toFixed(2), " \u20AC\n  ");
}

(_a = document.getElementById("calculate")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var quantity = +document.getElementById("quantity").value;
    var price = +document.getElementById("price").value;
    var state = document.getElementById("state").value;
    var result = calculateTotal(quantity, price, state);
    var resultDiv = document.getElementById("result");
    if (resultDiv) {
        resultDiv.textContent = result;
    }
});
