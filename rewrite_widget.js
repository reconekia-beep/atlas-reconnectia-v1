const fs = require('fs');

const widgetPath = 'c:/Users/aviel/RECONNECTIA_DEV/atlas-reconnectia-v1/components/concierge/ConciergeWidget.tsx';

let widgetContent = fs.readFileSync(widgetPath, 'utf8');

const hookImport = 'import { useState, useEffect } from "react";';
const hookImplementation = `
    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#concierge') {
                setIsOpen(true);
                // Clean up the hash to avoid it staying there
                window.history.replaceState(null, '', window.location.pathname + window.location.search);
            }
        };

        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            
            if (link && link.getAttribute('href') === '#concierge') {
                e.preventDefault();
                setIsOpen(true);
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        document.addEventListener('click', handleClick);
        
        // Also check on initial load
        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            document.removeEventListener('click', handleClick);
        };
    }, []);
`;

widgetContent = widgetContent.replace('import { useState } from "react";', hookImport);
widgetContent = widgetContent.replace('const [isOpen, setIsOpen] = useState(false);', 'const [isOpen, setIsOpen] = useState(false);\n' + hookImplementation);

fs.writeFileSync(widgetPath, widgetContent);
console.log('Successfully updated ConciergeWidget.tsx');
