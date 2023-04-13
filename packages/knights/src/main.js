const validateSize = (size) => {
  return size.length !== 2 ||
    size[0] < 0 ||
    size[1] < 0;
}
const generateRandomCoords = (size) => {
  const x = Math.floor(Math.random() * size[0]);
  const y = Math.floor(Math.random() * size[0]);
  return [x, y];
}
const KnightsAPI = {
  getNewKnight: (size = [8,8]) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!validateSize(size)) {
          reject('Invalid size parameter');
        }
        resolve({
          image: "https://lordducky.github.io/scratchpad/knights/assets/knight.svg",
          position: generateRandomCoords(size)
        });
      }, 200);
    });
  },
  getNewTarget: (size = [8,8]) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!validateSize(size)) {
          reject({
            status: 500,
            success: false,
            message: 'Invalid size parameter'
          });
        }
        resolve({
          image: "",
          position: generateRandomCoords(size)
        });
      }, 200);
    });
  }
}

export default KnightsAPI;