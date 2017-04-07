export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http = $http

  }

  postMessage(){
    this.$http.post('http://localhost:8000/api/message',{msg:this.message})
  }

}
