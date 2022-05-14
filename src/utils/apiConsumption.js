class ApiConsumption {
     static host = "https://moonpig.github.io/tech-test-frontend";

     static async getProducts() {
          try {
               const response = await fetch(`${this.host}/search.json`);
               const status = response.status;
               if (status >= 200 && status <= 300) {
                    const data = await response.json();
                    return data?.Products;
               }
          } catch (error) {
               console.log(error);
          }
     }
}
export default ApiConsumption;
