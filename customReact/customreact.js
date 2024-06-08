function customRender(reactElement, container)
{
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    /*domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)*/

    for(const key in reactElement.props)
    {
        domElement.setAttribute(key,reactElement.props.key);
    }
    container.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}

const mainContainer = document.querySelector("#root");
// bina react ka render use kiye 
customRender(reactElement, mainContainer)