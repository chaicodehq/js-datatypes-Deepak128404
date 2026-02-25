/**
 * 🧾 GST Calculator - Tax Lagao Bhai!
 *
 * Bunty apni dukaan ke liye GST calculator bana raha hai. Customer ko bill
 * dena hai jisme base price, GST amount, aur total clearly dikhna chahiye.
 * GST rate category ke hisaab se change hota hai.
 *
 * GST Rates (by category string, case-insensitive):
 *   - "essential"   => 0% GST  (dal, chawal, atta, etc.)
 *   - "food"        => 5% GST  (packaged food, restaurant below Rs 7500)
 *   - "standard"    => 12% GST (processed food, business class tickets)
 *   - "electronics" => 18% GST (phones, laptops, etc.)
 *   - "luxury"      => 28% GST (cars, aerated drinks, tobacco)
 *   - Any other category => return null
 *
 * Rules:
 *   - Calculate: gstAmount = amount * rate / 100
 *   - Calculate: totalAmount = amount + gstAmount
 *   - Round gstAmount aur totalAmount to 2 decimal places using
 *     parseFloat(value.toFixed(2))
 *   - Return object: { baseAmount, gstRate, gstAmount, totalAmount }
 *   - category ko lowercase mein compare karo (case-insensitive)
 *   - Hint: Use toFixed(), parseFloat(), Number.isFinite(), toLowerCase()
 *
 * Validation:
 *   - Agar amount positive finite number nahi hai, return null
 *   - Agar category string nahi hai, return null
 *   - Agar category unknown hai, return null
 *
 * @param {number} amount - Base amount before tax
 * @param {string} category - Product category
 * @returns {{ baseAmount: number, gstRate: number, gstAmount: number, totalAmount: number } | null}
 *
 * @example
 *   calculateGST(1000, "electronics")
 *   // => { baseAmount: 1000, gstRate: 18, gstAmount: 180, totalAmount: 1180 }
 *
 *   calculateGST(500, "essential")
 *   // => { baseAmount: 500, gstRate: 0, gstAmount: 0, totalAmount: 500 }
 */
export function calculateGST(amount, category) {
  if(!Number.isFinite(amount) || amount <= 0) return null
  if(typeof category !== "string") return null
  category = category.toLowerCase()
  let baseAmount = 0
  let gstRate = 0
  let gstAmount = 0
  let totalAmount = 0

  if(category === "essential") {
    baseAmount = amount 
    totalAmount = baseAmount 
  }
  else if (category === "food") {
    baseAmount = amount
    gstRate = 5
    gstAmount = amount * gstRate/100
    totalAmount = amount + gstAmount
  }
    else if (category === "standard") {
    baseAmount = amount
    gstRate = 12
    gstAmount = amount * gstRate/100
    totalAmount = amount + gstAmount
  }
    else if (category === "electronics") {
    baseAmount = amount
    gstRate = 18
    gstAmount = amount * gstRate/100
    totalAmount = amount + gstAmount
  }
    else if (category === "luxury") {
    baseAmount = amount
    gstRate = 28
    gstAmount = amount * gstRate/100
    totalAmount = amount + gstAmount
  } else return null

  gstAmount = parseFloat(gstAmount.toFixed(2))
  totalAmount = parseFloat(totalAmount.toFixed(2))
  return {baseAmount, gstRate, gstAmount, totalAmount}
}
