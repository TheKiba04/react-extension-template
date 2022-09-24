import ReactDOM, { Renderer } from 'react-dom'

type RootElement = Parameters<Renderer>['0'][0];
type ContainerSelector = string

interface AppSetupConfig {
    rootElement: RootElement,
    injectExtensionTo: ContainerSelector,
    injectWebAppTo: ContainerSelector
}
function checkisExtension() {
    //change when we have webapp
    return true
}
function findElementInDOM(selector: ContainerSelector) {
    return document.querySelector(selector)
}
function renderAppToDOM(element: RootElement, selector: ContainerSelector) {
    ReactDOM.render(element, document.querySelector(selector))
}

function injectExtensionToDOM(element: RootElement,
    selector: ContainerSelector) {
    const rootElementId = 'root'
    const appContainer = document.createElement('div')
    appContainer.id = rootElementId

    const elementInDOM = findElementInDOM(selector)

    if (elementInDOM) {
        elementInDOM.prepend(appContainer)
        renderAppToDOM(element, `#${rootElementId}`)
    }
}

function initExtension(element: RootElement, selector: ContainerSelector) {
    const interval = setInterval(() => {
        if (!findElementInDOM(selector)) return
        clearInterval(interval)
        injectExtensionToDOM(element, selector)
    }, 100)
}

function setupProject(config: AppSetupConfig) {
    const { rootElement, injectExtensionTo, injectWebAppTo } = config
    if (checkisExtension()) {
        console.log('ext');
        
        initExtension(rootElement, injectExtensionTo)
    } else {
        renderAppToDOM(rootElement, injectWebAppTo)
    }
}

export { setupProject }