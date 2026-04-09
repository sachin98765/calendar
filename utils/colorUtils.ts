// Utility functions for color extraction from images

export const extractDominantColor = async (imageUrl: string): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        resolve('#1e88e5');
        return;
      }

      ctx.drawImage(img, 0, 0);

      // Sample the bottom-right quadrant where the overlay will be
      const imageData = ctx.getImageData(
        Math.floor(canvas.width * 0.6),
        Math.floor(canvas.height * 0.6),
        Math.floor(canvas.width * 0.4),
        Math.floor(canvas.height * 0.4)
      );

      const data = imageData.data;
      const colors: { r: number; g: number; b: number }[] = [];

      for (let i = 0; i < data.length; i += 4) {
        colors.push({
          r: data[i],
          g: data[i + 1],
          b: data[i + 2],
        });
      }

      const bgColor = findAverageColor(colors);
      resolve(`rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`);
    };

    img.onerror = () => {
      resolve('#1e88e5');
    };
  });
};

const findAverageColor = (colors: { r: number; g: number; b: number }[]): { r: number; g: number; b: number } => {
  let r = 0, g = 0, b = 0;

  colors.forEach((color) => {
    r += color.r;
    g += color.g;
    b += color.b;
  });

  const len = colors.length;
  return {
    r: Math.round(r / len),
    g: Math.round(g / len),
    b: Math.round(b / len),
  };
};

export const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + [r, g, b].map((x) => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('').toUpperCase();
};

export const lightenColor = (color: string, percent: number): string => {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;

  return '#' + (
    0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)
  ).toString(16).slice(1);
};
