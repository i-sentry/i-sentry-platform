/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, ReactNode } from "react";

// const EachElement = ({ render, of }: { render: any; of: any[] }) => {
//   return Children?.toArray(
//     of?.map((item: any, index: number) => render(item, index)),
//   );
// };

const EachElement = <T,>({ render, of }: EachElementProps<T>) => {
  return Children.toArray(of?.map((item, index) => render(item, index)));
};

export default EachElement;

type EachElementProps<T> = {
  of: T[]; // Array of items
  render: (item: T, index: number) => ReactNode; // Render function
};
