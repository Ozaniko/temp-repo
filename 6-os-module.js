const os = require('os')

const user = os.uptime()
let asMinutes = user/60
let asHours = asMinutes/60
console.log(user)
console.log("Your pc is open for " + asHours + " hours or "+ asMinutes +" minutes long"  )

const operatingSystem =
{
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(operatingSystem)