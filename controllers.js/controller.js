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
    var {operation_type, x, y} = req.body;
    operation_type = operation_type.toLowerCase()
    var operationSplit = operation_type.split(' '); 
    
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
                result: x + y,
                operation_type: Enum.addition
                
            })
        }
        else if(operation_type === Enum.subtraction){
            res.status(200).json({
                slackUsername: "MallamTY",
                result: x - y,
                operation_type: Enum.subtraction
            })
        }
        else if(operation_type === Enum.multiplication){
            res.status(200).json({
                slackUsername: "MallamTY",
                result: x * y,
                operation_type: Enum.multiplication
            })
        }
    }

    else if(operationSplit.length > 1){                       ['could', 'you', 'please', 'add', 5, 'and', 5]
        var total = 0;
        if(operationSplit.includes('addition') || operationSplit.includes('add') || 
        operationSplit.includes('added') || operationSplit.includes('plus') || operationSplit.includes('sum')
         || operationSplit.includes('togetherness') || operationSplit.includes('+')){
            operationSplit.forEach(element => {
                if (element === 'x') {
                    total += x;
                }
                if (element === 'y') {
                    total += y;
                }
                if (Number.isInteger(parseInt(element))) {
                    total += parseInt(element);
                }  
        })
        res.status(200).json({
            slackUsername: "MallamTY",
            result: total,
            operation_type: Enum.addition
        }) 
    }
        if(operationSplit.includes('subtract')|| operationSplit.includes('minus') || 
        operationSplit.includes('subtration') || operationSplit.includes('less') || operationSplit.includes('deduct') || operationSplit.includes('-')){
            var total = 0;
                operationSplit.forEach(element => {
                if (element === 'x') {
                    total = x - total;
                }
                if (element === 'y') {
                    total = y - total;
                }
                if (Number.isInteger(parseInt(element))) {
                    total = parseInt(element) - total;
                    
                }
        })
        res.status(200).json({
            slackUsername: "MallamTY",
            result: total,
            operation_type: Enum.subtraction
        })  
        }
    }
        
        if(operationSplit.includes('multiply') || operationSplit.includes('multiplied') || 
        operationSplit.includes('product')|| operationSplit.includes('mulplication') || operationSplit.includes('*')){
            total = 1
            operationSplit.forEach(element => {

                if (element === 'x') {
                    total *= x;
                }
                if (element === 'y') {
                    total *= y;
                }
                if (Number.isInteger(parseInt(element))) {
                    total *= parseInt(element)
                }
        })
    res.status(200).json({
        slackUsername: "MallamTY",
        result: total,
        operation_type: Enum.multiplication
    })  
    }
}

module.exports = {
    getEndpoint,
    postEndpoint
}