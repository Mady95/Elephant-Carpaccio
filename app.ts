interface StateTax {
  [key: string]: number;
}

const stateTaxes: StateTax = {
  UT: 0.0685, 
  NV: 0.08,   
  TX: 0.0625, 
  AL: 0.04,   
  CA: 0.0825  
};

function calculateTotal(quantity: number, price: number, state: string): string {
  if (quantity <= 0 || price <= 0) {
    return "Veuillez saisir une quantité et un prix valides.";
  }

  if (!state || !(state in stateTaxes)) {
    return "Veuillez sélectionner un état valide.";
  }

  const totalBeforeTax = quantity * price;

  const taxRate = stateTaxes[state];
  const tax = totalBeforeTax * taxRate;
  const finalTotal = totalBeforeTax + tax;

  return `
    Prix brut : ${totalBeforeTax.toFixed(2)} €
    Taxes (${(taxRate * 100).toFixed(2)}%) : +${tax.toFixed(2)} €
    Total final : ${finalTotal.toFixed(2)} €
  `;
}

document.getElementById("calculate")?.addEventListener("click", () => {
  const quantity = +(document.getElementById("quantity") as HTMLInputElement).value;
  const price = +(document.getElementById("price") as HTMLInputElement).value;
  const state = (document.getElementById("state") as HTMLSelectElement).value;

  const result = calculateTotal(quantity, price, state);
  const resultDiv = document.getElementById("result");
  if (resultDiv) {
    resultDiv.textContent = result;
  }
});
