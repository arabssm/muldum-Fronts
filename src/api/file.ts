import axiosInstance from "../lib/axiosInatanse";

export default async function savefile(file) {
    try {
        const res = await axiosInstance.post('/ara/files', file, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
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
