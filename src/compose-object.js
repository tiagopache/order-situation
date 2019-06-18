var output = [];

var objectSource = [
    {
        id: 1,
        name: 'Teste 1',
        status: 0
    },
    {
        id: 2,
        name: 'Teste 2',
        status: 1
    },
    {
        id: 3,
        name: 'Teste 3',
        status: 1
    },
    {
        id: 4,
        name: 'Teste 4',
        status: 2
    }
];

var enumStatusType = [
    {
        id: 0,
        text: 'ABERTO'
    },
    {
        id: 1,
        text: 'PROCESSANDO'
    },
    {
        id: 2,
        text: 'FECHADO'
    },
];

var findStatus = (id) => {
    return enumStatusType.find((item) => item.id === id).text;
};

var processObject = () => {
    var collection = objectSource;
    var output = [];

    collection.forEach((item) => 
    {
        output.push({ id: item.id, name: item.name, status_name: findStatus(item.status) });
    });

    return output;
};

console.log(processObject());