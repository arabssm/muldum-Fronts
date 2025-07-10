import axiosInstance from "../lib/axiosInatanse";

export default async function Apply(name1,number,price,link,source,reason,team_id) {
    try {
      const res = await axiosInstance.post(`/std/items/1/temp`,{
        "productName":name1,
        "quantity":number,
        "price":price,
        "productLink":link,
        "item_source":source,
        "reason":reason
      });
  
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  export async function getApply(team_id) {
    try {
      const res = await axiosInstance.get(`/std/items/1`);
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  export async function getMoney(team_id) {
    try {
      const res = await axiosInstance.get(`/std/items/money/1`);
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }