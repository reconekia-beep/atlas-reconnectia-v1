const fs = require('fs');
const html = fs.readFileSync('c:/Users/aviel/RECONNECTIA_DEV/atlas-reconnectia-v1/landing_original.html', 'utf8');

// Extract body content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
    console.log('No body content found');
    process.exit(1);
}

let jsxContent = bodyMatch[1];

// Convert class to className
jsxContent = jsxContent.replace(/class=/g, 'className=');

// Convert for to htmlFor
jsxContent = jsxContent.replace(/for=/g, 'htmlFor=');

// Close unclosed br, hr, input, img, meta, link tags
jsxContent = jsxContent.replace(/<img(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
});
jsxContent = jsxContent.replace(/<br(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
});
jsxContent = jsxContent.replace(/<hr(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
});

// Convert style attributes to objects manually for the specific ones
jsxContent = jsxContent.replace(/style="background-image: (\w+)-gradient\(([^)]+)\); background-size: ([^;\"\']+);" /g, "style={{ backgroundImage: '$1-gradient($2)', backgroundSize: '$3' }} ");
jsxContent = jsxContent.replace(/style="([^"]*)"/g, (match, p1) => {
    // Basic inline style to object converter for the 2 elements in the HTML
    if (p1.includes('radial-gradient')) {
        return "style={{ backgroundImage: 'radial-gradient(#067ff9 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}"
    }
    if (p1.includes('linear-gradient')) {
        return "style={{ backgroundImage: 'linear-gradient(#ff751f 1px, transparent 1px), linear-gradient(90deg, #ff751f 1px, transparent 1px)', backgroundSize: '40px 40px' }}"
    }
    return match;
});

// Convert HTML comments to JSX comments
jsxContent = jsxContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

// Update image paths
jsxContent = jsxContent.replace(/src="assets\/images\//g, 'src="/assets/images/');

// Update external links to Concierge (href="https://calendly.com/reconnectia/30min" to href="#concierge")
jsxContent = jsxContent.replace(/href="https:\/\/calendly\.com\/reconnectia\/30min"/g, 'href="#concierge"');

fs.writeFileSync('c:/Users/aviel/RECONNECTIA_DEV/atlas-reconnectia-v1/app/page_converted.tsx', jsxContent);
console.log('Done!');
