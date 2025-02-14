
import {
  Card,
  Input,
 
  CardHeader,

  Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  {
    head: "Product",
    icon: "#",
  },
  {
    head: "Customer",
  },
  {
    head: "Amount",
  },
  {
    head: "Quantity",
  },
  {
    head: "Payment Date",
  },
  {
    head: "Status",
  },
];

const TABLE_ROWS = [
  {
    product: "T-shirt",
    customer: "Viking Burrito",
    amount: "$14,000",
    quantity: 8,
    date: "31 Feb 2024",
    status:'On the way'
  },
  {
    product: "Shirt",
    customer: "Stone Tech Zone",
    amount: "$3,000",
    quantity: 7,
    date: "24 Feb 2024",
    status:'Delivered'
  },
  {
    product: "Bag",
    customer: "Fiber Notion",
    amount: "$20,000",
    quantity: 4,
    date: "12 Feb 2024",
    status:'Returned'
  },
  {
    product: "Pant",
    customer: "Blue Bird",
    amount: "$5,600",
    quantity: 1,
    date: "10 Feb 2024",
    status:'Cancelled'
  },
];

export function RecentOrders() {
  return (
    <Card className="h-full w-full overflow-x-auto shadow-none">
      <CardHeader
        floated={false}
        shadow={false}
        className="mb-2 rounded-none p-2"
      >
        <div className="w-full md:w-96 mt">
          <Input label="Search..." variant="standard" />
        </div>
      </CardHeader>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map(({ head, icon }) => (
              <th
                key={head}
                className="border-b border-gray-300 p-4 py-3 bg-[#00C982]/5"
              >
                <div className="flex  items-center gap-1">
                  <div className=" px-4">
                  {icon}
                  </div>
                  <Typography
                    color="blue-gray"
                    variant="small"
                    className="!font-bold"
                  >
                    {head}
                  </Typography>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(
            ({ product, customer, amount, quantity, date,status }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "px-4 py-3"
                : "p-4 py-3 border-b border-gray-300";

              return (
                <tr key={product}>
                  <td className={classes}>
                    <div className="flex items-center gap-1">
                      <div className=" px-4">
                        {index+1}.
                      </div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {product}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {customer}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {amount}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {quantity}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className={`flex items-center gap-2  font-bold
                      ${status=="Cancelled" && 'text-red-500'}
                      ${status=="Delivered" && 'text-green-500'}
                      ${status=="Returned" && 'text-yellow-500'}
                      `}>{status}</div>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
}
