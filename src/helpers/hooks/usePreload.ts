import memo from 'lodash.memoize';
import { useAsync } from 'react-use';

const isImageUrl = (url: string) => url.match(/\.(jpeg|jpg|gif|png)$/) != null;

type Url = string;

type Fn = () => Promise<void>;

type UsePreloadAssets = Array<Url | Fn>;

const loadImage = memo((src: string) => {
  const image = document.createElement('img');

  const removeAllEventListeners = () => image.replaceWith(image.cloneNode(true));

  return new Promise((resolve, reject) => {
    image.setAttribute('src', src);
    image.addEventListener('load', () => {
      resolve(image);
      removeAllEventListeners();
    });
    image.addEventListener('error', msg => {
      reject(msg);
      removeAllEventListeners();
    });
  });
});

export const usePreload = (assets: UsePreloadAssets) => {
  const promises = assets.map(asset => {
    if (typeof asset === 'function') {
      return asset();
    }

    if (isImageUrl(asset)) {
      return loadImage(asset);
    }

    console.error('No loader for this asset type');

    return null;
  });

  useAsync(() => Promise.all(promises));

  return null;
};
