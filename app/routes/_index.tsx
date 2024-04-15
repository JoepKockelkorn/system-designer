import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "System Designer" }];
};

export default function Index() {
  return <h1>Welcome to System Designer</h1>;
}
