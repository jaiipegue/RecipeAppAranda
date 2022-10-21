import api from "./api";

export const getRecipes = async (type: string) => {
  const url = `/recipes/random`;
  const { data } = await api.get(url, {
    params: {
      number: 4,
      tags: type,
    },
  });
  const { recipes } = data;
  return recipes;
};