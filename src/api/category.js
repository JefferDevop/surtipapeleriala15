import { BASE_API } from "../config/constants";

export class Categories {
  async getAll() {
    try {
      const url = `${BASE_API}/api/category/`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getBySlug(slug) {
    try {
      const slugFilter = `slug=${slug}`;
      const url = `${BASE_API}/api/category/?${slugFilter}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;
      return result[0];
    } catch (error) {
      console.error(error);
      console.log(
        "Ha ocurrido un error al obtener los datos. Por favor, inténtalo de nuevo más tarde."
      );
    }
  }

  async addCategoryApi(data, token) {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("slug", data.slug);
      formData.append("image", data.image);

      const url = `${BASE_API}/api/category/`;
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
