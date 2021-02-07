(function () {
    const maximum_z_index = '2147483647';

    const ensureHighestStackingContext = (element) => {
        element.style.position = 'relative';
        element.style.zIndex = maximum_z_index;
    };

    const createPanel = () => {
        const element = document.createElement('div');
        element.style.position = 'fixed';
        element.style.top = '0';
        element.style.left = '0';
        element.style.width = '100%';
        element.style.height = '100px';
        element.style.backgroundColor = 'white';
        element.innerText = 'Hello World!';
        return element;
    };

    const createButton = (caption, onClick) => {
        const element = document.createElement('div');
        element.style.backgroundColor = 'red';
        element.innerText = caption;
        element.onclick = onClick;
    };

    const openPopup = () => {
        const rootElement = document.createElement('div');
        ensureHighestStackingContext(rootElement);
        document.body.appendChild(rootElement);
        const remove = () => document.body.removeChild(rootElement);
        const panel = createPanel();
        panel.appendChild(createButton('close', remove));
        rootElement.appendChild(panel);
    };
})();
