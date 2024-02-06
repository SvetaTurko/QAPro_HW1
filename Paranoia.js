var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    }
];

var validEmails = arr.filter(obj => /^[a-z0-9]+\.[a-z0-9]+@(gmail|yahoo)\.com$/.test(obj.email))
.map(obj => obj.email);

console.log(validEmails);
