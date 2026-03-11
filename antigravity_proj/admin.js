// Tyre Database
const tyreData = [
    { brand: "Bridgestone", size: "135X70X12", pattern: "STURDO", baseRate: 2483, customerRate: 2731 },
    { brand: "Bridgestone", size: "145X80X12", pattern: "STURDO", baseRate: 2988, customerRate: 3287 },
    { brand: "Bridgestone", size: "155X65X12", pattern: "STURDO", baseRate: 3069, customerRate: 3376 },
    { brand: "Bridgestone", size: "145X70X13", pattern: "STURDO", baseRate: 3321, customerRate: 3653 },
    { brand: "Bridgestone", size: "145X80X13", pattern: "STURDO", baseRate: 3312, customerRate: 3643 },
    { brand: "Bridgestone", size: "155X65X13", pattern: "STURDO", baseRate: 3474, customerRate: 3821 },
    { brand: "Bridgestone", size: "155X70X13", pattern: "STURDO", baseRate: 3618, customerRate: 3980 },
    { brand: "Bridgestone", size: "155X80X13", pattern: "STURDO", baseRate: 3888, customerRate: 4277 },
    { brand: "Bridgestone", size: "165X65X13", pattern: "STURDO", baseRate: 3672, customerRate: 4039 },
    { brand: "Bridgestone", size: "175X70X13", pattern: "STURDO", baseRate: 4626, customerRate: 5089 },
    { brand: "Bridgestone", size: "155X65X14", pattern: "STURDO", baseRate: 3627, customerRate: 3990 },
    { brand: "Bridgestone", size: "165X65X14", pattern: "STURDO", baseRate: 4338, customerRate: 4772 },
    { brand: "Bridgestone", size: "165X70X14", pattern: "STURDO", baseRate: 3591, customerRate: 3950 },
    { brand: "Bridgestone", size: "165X80X14", pattern: "STURDO", baseRate: 3933, customerRate: 4326 },
    { brand: "Bridgestone", size: "175X65X14", pattern: "STURDO", baseRate: 5121, customerRate: 5633 },
    { brand: "Bridgestone", size: "175X70X14", pattern: "STURDO", baseRate: 5112, customerRate: 5623 },
    { brand: "Bridgestone", size: "185X65X14", pattern: "STURDO", baseRate: 4842, customerRate: 5326 },
    { brand: "Bridgestone", size: "185X70X14", pattern: "STURDO", baseRate: 4923, customerRate: 5415 },
    { brand: "Bridgestone", size: "185X70X14", pattern: "T006i", baseRate: 5238, customerRate: 5762 },
    { brand: "Bridgestone", size: "175X65X15", pattern: "STURDO", baseRate: 5355, customerRate: 5891 },
    { brand: "Bridgestone", size: "185X60X15", pattern: "STURDO", baseRate: 5400, customerRate: 5940 },
    { brand: "Bridgestone", size: "185X65X15", pattern: "STURDO", baseRate: 5697, customerRate: 6267 },
    { brand: "Bridgestone", size: "185X65X15", pattern: "T006i", baseRate: 5913, customerRate: 6504 },
    { brand: "Bridgestone", size: "195X60X15", pattern: "STURDO", baseRate: 6237, customerRate: 6861 },
    { brand: "Bridgestone", size: "195X65X15", pattern: "STURDO", baseRate: 6327, customerRate: 6960 },
    { brand: "Bridgestone", size: "195X55X16", pattern: "STURDO", baseRate: 7596, customerRate: 8356 },
    { brand: "Bridgestone", size: "205X55X16", pattern: "STURDO", baseRate: 8397, customerRate: 9237 },
    { brand: "Bridgestone", size: "205X55X16", pattern: "T006i", baseRate: 8883, customerRate: 9771 },
    { brand: "Bridgestone", size: "205X60X16", pattern: "T006i", baseRate: 7308, customerRate: 8039 },
    { brand: "Bridgestone", size: "215X60X16", pattern: "T006i", baseRate: 7902, customerRate: 8692 },
    { brand: "Bridgestone", size: "215X65X16", pattern: "T006i", baseRate: 8955, customerRate: 9851 },
    { brand: "Bridgestone", size: "215X55X17", pattern: "T006i", baseRate: 10485, customerRate: 11534 },
    { brand: "Bridgestone", size: "225X55X17", pattern: "T006i", baseRate: 10611, customerRate: 11672 },
    { brand: "Bridgestone", size: "235X55X17", pattern: "T006i", baseRate: 12402, customerRate: 13642 },
    { brand: "Bridgestone", size: "265X65X17", pattern: "AT002", baseRate: 12708, customerRate: 13979 },
    { brand: "Bridgestone", size: "265X60X18", pattern: "AT002", baseRate: 16533, customerRate: 18186 },
    { brand: "Yokohama", size: "145/80 R12", pattern: "Earth-1 Max", baseRate: 3160, customerRate: 3476 },
    { brand: "Yokohama", size: "155/80 R13", pattern: "Earth-1 Max", baseRate: 4380, customerRate: 4818 },
    { brand: "Yokohama", size: "175/70 R14", pattern: "Earth-1 Max", baseRate: 5590, customerRate: 6149 },
    { brand: "Yokohama", size: "185/70 R14", pattern: "Earth-1 Max", baseRate: 5460, customerRate: 6006 },
    { brand: "Yokohama", size: "185/65 R15", pattern: "Earth-1 Max", baseRate: 6270, customerRate: 6897 },
    { brand: "Yokohama", size: "195/60 R15", pattern: "Earth-1 Max", baseRate: 6840, customerRate: 7524 },
    { brand: "Yokohama", size: "205/65 R15", pattern: "Earth-1 Max", baseRate: 7450, customerRate: 8195 },
    { brand: "Yokohama", size: "215/75 R15", pattern: "G015", baseRate: 7320, customerRate: 8052 },
    { brand: "Yokohama", size: "205/60 R16", pattern: "Earth-1 Max", baseRate: 7830, customerRate: 8613 },
    { brand: "Yokohama", size: "215/60 R16", pattern: "Earth-1 Max", baseRate: 8540, customerRate: 9394 },
    { brand: "Yokohama", size: "215/65 R16", pattern: "G015", baseRate: 9630, customerRate: 10593 },
    { brand: "Yokohama", size: "215/55 R17", pattern: "Earth-1 Max", baseRate: 11740, customerRate: 12914 },
    { brand: "Yokohama", size: "215/60 R17", pattern: "Earth-1 Max", baseRate: 10300, customerRate: 11330 },
    { brand: "Yokohama", size: "265/65 R17", pattern: "G015", baseRate: 14030, customerRate: 15433 },
    { brand: "Yokohama", size: "265/60 R18", pattern: "G015", baseRate: 18010, customerRate: 19811 }
];

document.addEventListener('DOMContentLoaded', () => {

    // Set today's date
    const dateStr = new Date().toLocaleDateString('en-IN', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
    document.getElementById('q-date').textContent = dateStr;

    // Form Elements
    const brandSelect = document.getElementById('brand-select');
    const sizeSelect = document.getElementById('size-select');
    const patternSelect = document.getElementById('pattern-select');
    
    const pricePreview = document.getElementById('price-preview');
    const quantityGroup = document.getElementById('quantity-group');
    const previewBase = document.getElementById('preview-base');
    const previewCustomer = document.getElementById('preview-customer');
    const addItemBtn = document.getElementById('add-item-btn');
    const quantityInput = document.getElementById('quantity');
    const customerInput = document.getElementById('customer-input');

    // Quotation Elements
    const qTbody = document.getElementById('q-tbody');
    const qGrandTotal = document.getElementById('q-grand-total');
    const qCustomerDisplay = document.getElementById('q-customer-display');

    let quotationItems = [];
    let currentSelectedTyre = null;

    // Handle Customer Name Input Sync
    customerInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        qCustomerDisplay.textContent = val ? val : 'N/A';
    });

    // Format Currency
    const formatCurrency = (number) => {
        return '₹' + number.toLocaleString('en-IN');
    };

    // 1. Populate Brands
    const brands = [...new Set(tyreData.map(t => t.brand))];
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    });

    // 2. Handle Brand Selection
    brandSelect.addEventListener('change', (e) => {
        const selectedBrand = e.target.value;
        
        // Reset sub-selects
        sizeSelect.innerHTML = '<option value="">-- Select Size --</option>';
        patternSelect.innerHTML = '<option value="">-- Select Pattern --</option>';
        patternSelect.disabled = true;
        resetPreview();

        if (selectedBrand) {
            // Filter sizes for this brand
            const brandTyres = tyreData.filter(t => t.brand === selectedBrand);
            const sizes = [...new Set(brandTyres.map(t => t.size))];
            
            sizes.forEach(size => {
                const option = document.createElement('option');
                option.value = size;
                option.textContent = size;
                sizeSelect.appendChild(option);
            });
            sizeSelect.disabled = false;
        } else {
            sizeSelect.disabled = true;
        }
    });

    // 3. Handle Size Selection
    sizeSelect.addEventListener('change', (e) => {
        const selectedBrand = brandSelect.value;
        const selectedSize = e.target.value;
        
        // Reset pattern
        patternSelect.innerHTML = '<option value="">-- Select Pattern --</option>';
        resetPreview();

        if (selectedSize) {
            // Filter patterns for this brand and size
            const matchingTyres = tyreData.filter(t => t.brand === selectedBrand && t.size === selectedSize);
            const patterns = [...new Set(matchingTyres.map(t => t.pattern))];

            patterns.forEach(pattern => {
                const option = document.createElement('option');
                option.value = pattern;
                option.textContent = pattern;
                patternSelect.appendChild(option);
            });
            patternSelect.disabled = false;
            
            // Auto-select if only one pattern exists
            if(patterns.length === 1) {
                patternSelect.value = patterns[0];
                patternSelect.dispatchEvent(new Event('change'));
            }
        } else {
            patternSelect.disabled = true;
        }
    });

    // 4. Handle Pattern Selection & Show Price
    patternSelect.addEventListener('change', (e) => {
        const selectedBrand = brandSelect.value;
        const selectedSize = sizeSelect.value;
        const selectedPattern = e.target.value;

        if (selectedPattern) {
            currentSelectedTyre = tyreData.find(t => 
                t.brand === selectedBrand && 
                t.size === selectedSize && 
                t.pattern === selectedPattern
            );

            if (currentSelectedTyre) {
                previewBase.textContent = formatCurrency(currentSelectedTyre.baseRate);
                previewCustomer.textContent = formatCurrency(currentSelectedTyre.customerRate);
                
                pricePreview.style.display = 'block';
                quantityGroup.style.display = 'block';
                addItemBtn.disabled = false;
            }
        } else {
            resetPreview();
        }
    });

    const resetPreview = () => {
        pricePreview.style.display = 'none';
        quantityGroup.style.display = 'none';
        addItemBtn.disabled = true;
        currentSelectedTyre = null;
        quantityInput.value = 1;
    };

    // 5. Add to Quotation
    addItemBtn.addEventListener('click', () => {
        if (!currentSelectedTyre) return;

        const qty = parseInt(quantityInput.value) || 1;
        const total = qty * currentSelectedTyre.customerRate;

        // Check if item already exists in quotation, if so just increment qty
        const existingItemIndex = quotationItems.findIndex(item => 
            item.tyre.brand === currentSelectedTyre.brand && 
            item.tyre.size === currentSelectedTyre.size && 
            item.tyre.pattern === currentSelectedTyre.pattern
        );

        if (existingItemIndex > -1) {
            quotationItems[existingItemIndex].qty += qty;
            quotationItems[existingItemIndex].total = quotationItems[existingItemIndex].qty * currentSelectedTyre.customerRate;
        } else {
            quotationItems.push({
                id: Date.now(), // unique ID for deletion
                tyre: currentSelectedTyre,
                qty: qty,
                total: total
            });
        }

        updateQuotationTable();
        
        // Reset form to default
        brandSelect.value = '';
        brandSelect.dispatchEvent(new Event('change')); // trigger reset logic
    });

    // 6. Remove from Quotation
    window.removeQuotationItem = (id) => {
        quotationItems = quotationItems.filter(item => item.id !== id);
        updateQuotationTable();
    };

    // 7. Render Quotation Table
    const updateQuotationTable = () => {
        qTbody.innerHTML = '';
        
        if (quotationItems.length === 0) {
            qTbody.innerHTML = '<tr class="empty-state"><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">No items added yet.</td></tr>';
            qGrandTotal.textContent = '₹0';
            return;
        }

        let grandTotal = 0;

        quotationItems.forEach(item => {
            grandTotal += item.total;
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <strong>${item.tyre.brand} ${item.tyre.pattern}</strong><br>
                    <span style="color: #666; font-size: 0.875rem;">Size: ${item.tyre.size}</span>
                </td>
                <td>${item.qty}</td>
                <td>${formatCurrency(item.tyre.customerRate)}</td>
                <td><strong>${formatCurrency(item.total)}</strong></td>
                <td>
                    <button class="btn-remove" onclick="removeQuotationItem(${item.id})" aria-label="Remove item">
                        <i class="ph ph-trash"></i>
                    </button>
                </td>
            `;
            qTbody.appendChild(tr);
        });

        qGrandTotal.textContent = formatCurrency(grandTotal);
    };

    // 8. WhatsApp Sharing
    const whatsappShareBtn = document.getElementById('whatsapp-share-btn');
    const customerPhoneInput = document.getElementById('customer-phone');

    whatsappShareBtn.addEventListener('click', () => {
        if (quotationItems.length === 0) {
            alert("Quotation is empty. Please add items first.");
            return;
        }

        let phoneNum = customerPhoneInput.value.trim();
        phoneNum = phoneNum.replace(/\D/g, ''); // strip non-digits

        if (phoneNum.length < 10) {
            alert("Please enter a valid 10-digit WhatsApp number in the left panel.");
            return;
        }
        
        // Append country code if it is exact India format
        if (phoneNum.length === 10) {
            phoneNum = '91' + phoneNum;
        }

        const customerName = customerInput.value.trim() || 'Customer';

        let message = `*Quotation from B M Tyres*\n`;
        message += `Shop 4, Ashish Heights, Nashik\n\n`;
        message += `Hello ${customerName},\nHere are your quotation details:\n\n`;

        let grandTotal = 0;
        quotationItems.forEach((item, index) => {
            message += `${index + 1}. *${item.tyre.brand} ${item.tyre.pattern}* (${item.tyre.size})\n`;
            message += `   Qty: ${item.qty} x ${formatCurrency(item.tyre.customerRate)} = *${formatCurrency(item.total)}*\n`;
            grandTotal += item.total;
        });

        message += `\n*Total Estimate: ${formatCurrency(grandTotal)}*\n\n`;
        message += `_Prices are inclusive of all taxes. Valid for 7 days._\n`;
        message += `Call us: +91 83294 10321`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNum}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    });

});
