const auxiliary = props => props.children 

export default auxiliary;



const add10 = x => x + 10;
const multiplyBy2 = x => x * 2;

const compose = (...funcs) => x => funcs.reduce((acc, curr) => curr(acc), x);


compose(add10, multiplyBy2)(5)//30