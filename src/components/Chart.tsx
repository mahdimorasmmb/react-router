import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
   
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Oct",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Nov",
      totalr: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dec",
      totalr: Math.floor(Math.random() * 5000) + 1000,
    },
  ]
  

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
    <BarChart  data={data}>
      <XAxis
        dataKey="name"
        stroke="#888888"
        fontSize={14}
        tickLine={false}
        axisLine={false}
      />
      <YAxis
        stroke="#888888"
        fontSize={14}
        tickLine={false}
        axisLine={false}
        tickFormatter={(value) => `$${value}`}
      />
      <Bar barSize={30} className='' dataKey="total" fill="#FFEAD0" radius={[4, 4, 0, 0]} />
      <Bar barSize={30} className='' dataKey="totalr" fill="#FF8C38" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
  )
}

export default Chart