import React from "react";
import {
  AreaChart,
  Area,
  ReferenceLine,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { MdBarChart } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { MdShield } from "react-icons/md";
import { PiShieldCheckFill } from "react-icons/pi";

function Graph({ graphData }) {
  // Extract data from props with defaults if not provided
  const {
    marks = 77,
    description = "Top 27 percent of the course",
    average = 74,
  } = graphData || {};

  // Generate normal distribution data points
  const generateBellCurveData = (mean, stdDev, min, max, points) => {
    const data = [];
    const step = (max - min) / (points - 1);

    for (let i = 0; i < points; i++) {
      const x = min + step * i;
      // Normal distribution formula
      const y =
        (1 / (stdDev * Math.sqrt(2 * Math.PI))) *
        Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
      data.push({ x, y });
    }

    return data;
  };

  // Create bell curve data with a mean of 74 (average) and std dev of 10
  const curveData = generateBellCurveData(average, 10, 40, 100, 100);

  return (
    <div className="py-10 px-2 relative overflow-hidden rounded-lg shadow-sm bg-white border hover:shadow-xl hover:shadow-gray-300 hover:scale-105  duration-200 hover:ease-in-out">
      <div className="text-center text-3xl font-bold mb-2 py-4">
        {marks}%
      </div>
      {/* shiel */}
      <div className="absolute top-0 right-0 p-2 rounded-bl-md text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out border-l border-b">
        <PiShieldCheckFill color="#1976bc"  size={30} />
      </div>

      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={curveData}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <XAxis hide domain={[40, 100]} />
            <YAxis hide />
            <Tooltip content={() => null} />
            <Area
              type="monotone"
              dataKey="y"
              stroke="#1976bc"
              fill="#1976bc"
              strokeWidth={2}
              isAnimationActive={false}
            />
            <ReferenceLine
              x={marks}
              stroke="red"
              strokeWidth={2}
              ifOverflow="extendDomain"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 space-y-6 ">
        <div className="flex items-center text-sm text-gray-600 mb-1 gap-2 ">
          <div className="">
            <MdBarChart size={25} />
          </div>
          <span>{description}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 gap-2 pb-10">
          <div className="">
            <IoMdTrendingUp size={25} />
          </div>
          <span>Average class grade: {average}%</span>
        </div>
      </div>
    </div>
  );
}

export default Graph;
