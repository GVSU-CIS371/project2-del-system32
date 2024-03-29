import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    const mainContainer = document.getElementById('main-container');
    if (!mainContainer) return;
    mainContainer.innerHTML = ""; 
    prods.forEach(product => {
        const productHTML = generateProductHTML(product);
        mainContainer.innerHTML += productHTML;
    });
}

function getByCategory(category: string): void {
    const prods = products.filter(product => product.category === category);
    renderProducts(prods);
}

function getByRating(minRating: number): void {
    const prods = products.filter(product => product.rating > minRating);
    renderProducts(prods);
}

export { renderProducts, getByCategory, getByRating };