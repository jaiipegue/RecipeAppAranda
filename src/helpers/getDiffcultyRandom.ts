export const getDiffcultyRandom = () => {
    const difficultyArray = ["Fácil", "Dificil"];
    let position = Math.floor(Math.random() * 2);
    return difficultyArray[position];
  };