import {API} from "../axios";

export const getBeritaAntara = async (category: string = "terbaru") => {
  try {
    const resp = await API.get(`/antara/${category}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

// cnn

//okezone

//kumparan
