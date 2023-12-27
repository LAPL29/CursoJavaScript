/**
 * 
 * @param {HTMLDivElement} element 
 */
// Funciones generadoras
export const generatorFunctionComponent = (element) => {

    // console.log('generatorFunctionComponent');
    // const mygenerator = myfirstGeneratorFunction();
    // console.log(mygenerator.next());
    // console.log(mygenerator.next());
    // console.log(mygenerator.next());
    // console.log(mygenerator.next());
    // console.log(mygenerator.next());


    const genId = idGenerator();
    
    const button = document.createElement('button');
    button.innerText ='Click me';
    element.append(button);

    const renderButton = () =>{
        //saca el valor de idGenerator
        const {value} = genId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', renderButton )

}


function* idGenerator() {
    let currentID = 0;
    while(true){
        yield ++currentID;
    }
}


function* myfirstGeneratorFunction() {
    yield 'Primer Valor';
    yield 'Segundo Valor';
    yield 'Tercer Valor';
    yield 'Cuarto Valor';

    //Cuadno llega al return done pasa de false a true
    return 'no';
}
