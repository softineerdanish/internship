import axios from "axios"

export class ApiService {
    private static URL : string = 'https://jsonplaceholder.typicode.com'

    public static getAllDetail(){
        let ApiURL:string = `${this.URL}/posts`
        return axios.get(ApiURL)
    }
}