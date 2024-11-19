import { BASE_API } from "../config/constants";


export class Products {
  
  async getProducts(){
    try {
      const url = `${BASE_API}/api/products/`;      

      const response = await fetch(url);    
      const result = await response.json();    

      if (response.status !==200 ) throw result;
     
      return result;
    } catch (error) {
      throw error;
    }
  }


  async getProductsByCategory(idCategory){
   
    try {    
      const productsFilter = `category=${idCategory}`;
  
      const url = `${BASE_API}/api/product_category/?${productsFilter}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;
  
      return result;
    } catch (error) {
      throw error;
    }
  }


  async getProductBySlug(slug){

    try {    
      const productFilter = `slug=${slug}`;
  
      const url = `${BASE_API}/api/products/?${productFilter}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;
  
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getProductByName(flag){
    try {    
      const productFilter = `flag=${flag}`;
  
      const url = `${BASE_API}/api/products/?${productFilter}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;
  
      return result;
    } catch (error) {
      throw error;
    }
  }
  

  async getProductByOfertAndExclusive(){
    try {      
      const url = `${BASE_API}/api/productsOE/`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;
  
      return result;
    } catch (error) {
      throw error;
    }
  }


  async addProductApi(data, token){
    
    try {
      const formData = new FormData();
      formData.append('name_extend', data.nombre);
      formData.append('flag', data.grupo);
      formData.append('slug', data.url);
      formData.append('ref', data.referencia);
      formData.append('description', data.descripcion);
      formData.append('images', data.image);
      formData.append('price1', data. precioact);
      formData.append('price_old', data.precioant);
      formData.append('active', data.active);
      // formData.append('offer', data.nombre);
      // formData.append('home', data.nombre);

      const url = `${BASE_API}/api/products/`;
      const params = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      };

      const response = await fetch(url, params);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
}


