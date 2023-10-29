import { Slider } from 'antd';

const Range = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Price</h2>
      <Slider range defaultValue={[0, 10]} />
    </div>
  );
};

export default Range;
