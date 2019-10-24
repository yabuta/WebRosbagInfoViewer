import { open } from '../lib/rosbag/dist/web/index';

export default class BagDataProvider {
  initialize = async file => {
    const bag = await open(file);
    console.log(bag);
    return bag;
  };
}
