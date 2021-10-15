import axios from 'axios'

class get {

  request(route) {

    return new Promise(resolve => {
      
      axios.get(route)
        .then(function (response) {
          // handle success
          resolve(response);
        })
        .catch(function (error) {

          resolve(false);

        })
    })
  
  }

}

export {
  get
}