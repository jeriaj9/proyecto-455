
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

const SHAFT_SHEET_ID = '1F_0KWY2alDAp5IqeE-Np-DkNUPs8kPFSMwzhchOolCs';
const SHAFT_SHEET_NAME = 'shaft_products';
const NEXX_SHEET_ID = '1A5d03OowFs1iFXrw35ldfTUXFq4oFSLSIrkwQaS-MK8';
const NEXX_SHEET_NAME = 'nexx_products';

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'data');

interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    image_url: string;
}

async function fetchGoogleSheet(sheetId: string, sheetName: string): Promise<Product[]> {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;
    console.log(`Fetching from: ${url}`);

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch sheet: ${response.statusText}`);
    }

    const csvText = await response.text();

    return new Promise((resolve, reject) => {
        Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                // Validate and map columns
                const products: Product[] = results.data.map((row: any) => ({
                    id: row.id || row.ID || '', // Handle varied casing
                    name: row.name || row.Name || row.NAME || '',
                    description: row.description || row.Description || '',
                    category: row.category || row.Category || '',
                    image_url: row.image_url || row['image url'] || row.Image || ''
                })).filter(p => p.id && p.name); // Basic validation

                resolve(products);
            },
            error: (error: any) => {
                reject(error);
            }
        });
    });
}

async function main() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    try {
        console.log('Starting product update...');

        // Fetch Shaft
        const shaftProducts = await fetchGoogleSheet(SHAFT_SHEET_ID, SHAFT_SHEET_NAME);
        fs.writeFileSync(path.join(OUTPUT_DIR, 'shaft-products.json'), JSON.stringify(shaftProducts, null, 2));
        console.log(`Saved ${shaftProducts.length} Shaft products.`);

        // Fetch Nexx
        const nexxProducts = await fetchGoogleSheet(NEXX_SHEET_ID, NEXX_SHEET_NAME);
        fs.writeFileSync(path.join(OUTPUT_DIR, 'nexx-products.json'), JSON.stringify(nexxProducts, null, 2));
        console.log(`Saved ${nexxProducts.length} Nexx products.`);

        console.log('Product update complete.');
    } catch (error) {
        console.error('Error updating products:', error);
        process.exit(1);
    }
}

main();
