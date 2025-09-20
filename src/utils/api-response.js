class Apiresponse{
    constructor(statuscode,message,data,message = "success"){
        this.statuscode = statuscode
        this.message = message
        this.data = data
        this.success = statuscode<400
    }
}
export {Apiresponse};