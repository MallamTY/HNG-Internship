const getEndpoint = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({
        slackUsername: `MallamTY`,
        backend: true,
        age: 23,
        bio: `I am an intermediate backend developer who uses the javaScript technology with intermediate experience using Nodejs framwork. I am also comversant with MongoDB and partially PostgreSQL database. It is important to state that I have experience with cloud computing and familiar with AWS and Oracle cloud platform. It's a great opportunity interning with HNG and look forward to working with great minds.`
    })
}



const postEndpoint = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    const {operation_type, x, y} = req.body;
    var operationSplit = operation_type.split(' ');
    const lowOperationSplit = []
    operationSplit.forEach(element => {
        lowOperationSplit.push(element.toLowerCase())
    });
    var total = 0;
    const Enum = {
        addition: 'addition',
        subtraction: 'subtraction',
        multiplication: 'multiplication'
    }

    if (operationSplit.length === 1) {
        if(operation_type === Enum.addition){
            res.status(200).json({
                slackUsername: "MallamTY",
                operation_type: Enum.addition,
                result: x + y
            })
        }
        else if(operation_type === Enum.subtraction){
            res.status(200).json({
                slackUsername: "MallamTY",
                operation_type: Enum.subtraction,
                result: x - y
            })
        }
        else if(operation_type === Enum.multiplication){
            res.status(200).json({
                slackUsername: "MallamTY",
                operation_type: Enum.multiplication,
                result: x * y
            })
        }
        else{
            return res.status(400).json(`${operation_type} is not a recognised operation`)
        }
    }

    else if(operationSplit.length > 1){
        var total = 0;
        if(lowOperationSplit.includes('addition') || lowOperationSplit.includes('add') || 
        lowOperationSplit.includes('added') || lowOperationSplit.includes('plus')){
            operationSplit.forEach(element => {
                if (element.toLowerCase() === 'x') {
                    total += x;
                }
                if (element.toLowerCase() == 'y') {
                    total += y;
                }
                if (Number.isInteger(parseInt(element))) {
                    total += parseInt(element);
                }  
        })
        res.status(200).json({
            slackUsername: "MallamTY",
            operation_type: Enum.addition,
            result: total
        }) 
    }
        if(lowOperationSplit.includes('subtract')|| lowOperationSplit.includes('minus') || 
        lowOperationSplit.includes('subtration') || lowOperationSplit.includes('less')){
            var total = 0;
            operationSplit.forEach(element => {
                if (element.toLowerCase() === 'x') {
                    total = x - total;
                }
                if (element.toLowerCase() == 'y') {
                    total = y - total;
                }
                if (Number.isInteger(parseInt(element))) {
                    total = parseInt(element) - total;
                    
                }
        })
        res.status(200).json({
            slackUsername: "MallamTY",
            operation_type: Enum.subtraction,
            result: total
        })  
        }
            }
        
        if(lowOperationSplit.includes('multiply') || operationSplit.includes('multiplied') || 
        operationSplit.includes('product') || operationSplit.includes('of') || operationSplit.includes('mulplication')){
            total = 1
            operationSplit.forEach(element => {

                if (element.toLowerCase() === 'x') {
                    total *= x;
                }
                if (element.toLowerCase() == 'y') {
                    total *= y;
                }
                if (Number.isInteger(parseInt(element))) {
                    total *= parseInt(element)
                }
        })
    res.status(200).json({
        slackUsername: "MallamTY",
        operation_type: Enum.multiplication,
        result: total
    })  
}
}

module.exports = {
    getEndpoint,
    postEndpoint
}